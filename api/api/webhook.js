import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Only allow POST requests from Stripe
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // Get the raw body for signature verification
  let body = '';
  await new Promise((resolve) => {
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve();
    });
  });

  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.log(`⚠️ Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      
      console.log('========================================');
      console.log('🛍️ NEW ORDER RECEIVED!');
      console.log('========================================');
      console.log(`Order ID: ${session.id}`);
      console.log(`Customer Email: ${session.customer_details?.email || 'Not provided'}`);
      console.log(`Customer Name: ${session.customer_details?.name || 'Not provided'}`);
      console.log(`Amount Paid: ${session.amount_total / 100} ${session.currency.toUpperCase()}`);
      console.log(`Payment Status: ${session.payment_status}`);
      console.log('========================================');
      
      // You will receive email notifications from Stripe automatically
      // The customer also receives an email receipt from Stripe
      
      break;
      
    case 'checkout.session.async_payment_succeeded':
      const asyncSession = event.data.object;
      console.log(`✅ Async payment succeeded for session: ${asyncSession.id}`);
      break;
      
    case 'checkout.session.async_payment_failed':
      const failedSession = event.data.object;
      console.log(`❌ Async payment failed for session: ${failedSession.id}`);
      break;
      
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.status(200).json({ received: true });
}
