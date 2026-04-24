// api/stripe-webhook.js
import Stripe from 'stripe';

// This is a special config for Vercel to handle raw body parsing
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
    // Verify this came from Stripe
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.log(`⚠️ Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Extract order details
    const orderDetails = {
      id: session.id,
      customerEmail: session.customer_details?.email || 'No email provided',
      customerName: session.customer_details?.name || 'No name provided',
      amount: `£${(session.amount_total / 100).toFixed(2)}`,
      items: [], // Stripe payment links don't include line items automatically
      timestamp: new Date().toISOString(),
    };
    
    console.log('🛍️ NEW ORDER RECEIVED!');
    console.log('Order ID:', orderDetails.id);
    console.log('Customer:', orderDetails.customerEmail);
    console.log('Amount:', orderDetails.amount);
    
    // Send email notification to you
    await sendAdminEmail(orderDetails);
  }

  res.status(200).json({ received: true });
}

// Function to send email notification to the store owner
async function sendAdminEmail(order) {
  // You need a service like Resend, SendGrid, or EmailJS
  // For now, we'll log to console – you'll add your email service here
  
  console.log('📧 Would send email to: admin@kingofkings.uk');
  console.log(`New order from ${order.customerEmail} for ${order.amount}`);
  
  // Example using Resend (free tier available)
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'orders@kingofkings.uk',
  //   to: 'your-email@gmail.com',
  //   subject: `New Order! ${order.id}`,
  //   html: `
  //     <h1>New Order Received!</h1>
  //     <p><strong>Customer:</strong> ${order.customerName} (${order.customerEmail})</p>
  //     <p><strong>Order ID:</strong> ${order.id}</p>
  //     <p><strong>Amount:</strong> ${order.amount}</p>
  //     <p><strong>Time:</strong> ${order.timestamp}</p>
  //     <p>View in Stripe: https://dashboard.stripe.com/payments/${order.id}</p>
  //   `,
  // });
}
