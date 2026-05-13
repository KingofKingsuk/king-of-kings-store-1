// api/stripe-webhook.js
import Stripe from 'stripe';
import { Resend } from 'resend';

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

  // Get the raw request body
  let rawBody = '';
  await new Promise((resolve) => {
    req.on('data', chunk => {
      rawBody += chunk.toString();
    });
    req.on('end', () => {
      resolve();
    });
  });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.log(`⚠️ Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    const customerEmail = session.customer_details?.email || 'No email provided';
    const customerName = session.customer_details?.name || 'No name provided';
    const amount = `£${(session.amount_total / 100).toFixed(2)}`;
    const orderId = session.id;
    const timestamp = new Date().toLocaleString();
    
    console.log('🛍️ NEW ORDER RECEIVED!');
    console.log(`Order ID: ${orderId}`);
    console.log(`Customer: ${customerEmail}`);
    console.log(`Amount: ${amount}`);
    
    // YOUR EMAIL ADDRESS FOR NOTIFICATIONS
    const YOUR_EMAIL_ADDRESS = 'JohnOlorunshe@KingofKingsGB051.onmicrosoft.com';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: YOUR_EMAIL_ADDRESS,
        subject: `🛍️ New King of Kings Order! ${orderId.slice(-8)}`,
        html: `
          <h2>New Order Received!</h2>
          <p><strong>Customer:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Amount:</strong> ${amount}</p>
          <p><strong>Time:</strong> ${timestamp}</p>
          <p><a href="https://dashboard.stripe.com/payments/${orderId}">View in Stripe Dashboard</a></p>
        `,
      });
      console.log('Email sent successfully to:', YOUR_EMAIL_ADDRESS);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
    }
  }

  res.status(200).json({ received: true });
}
