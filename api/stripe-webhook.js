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
    const customerEmail = session.customer_details?.email || 'No email provided';
    const customerName = session.customer_details?.name || 'No name provided';
    const amount = `£${(session.amount_total / 100).toFixed(2)}`;
    const orderId = session.id;
    const timestamp = new Date().toLocaleString();
    
    console.log('🛍️ NEW ORDER RECEIVED!');
    console.log(`Order ID: ${orderId}`);
    console.log(`Customer: ${customerEmail}`);
    console.log(`Amount: ${amount}`);
    
    // 👇👇👇 REPLACE THIS EMAIL WITH YOUR REAL EMAIL 👇👇👇
    const YOUR_EMAIL_ADDRESS = 'JohnOlorunshe@KingofKingsGB862.onmicrosoft.com';
    // 👆👆👆 CHANGE THIS TO YOUR ACTUAL EMAIL 👆👆👆
    
    // Send email notification using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Resend's default for testing
        to: YOUR_EMAIL_ADDRESS,
        subject: `🛍️ New King of Kings Order! ${orderId.slice(-8)}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; }
              h2 { color: #b8860b; }
              .order-details { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0; }
              .button { background: #b8860b; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>🛍️ New Order Received!</h2>
              <div class="order-details">
                <p><strong>Customer:</strong> ${customerName}</p>
                <p><strong>Email:</strong> ${customerEmail}</p>
                <p><strong>Order ID:</strong> ${orderId}</p>
                <p><strong>Amount:</strong> ${amount}</p>
                <p><strong>Time:</strong> ${timestamp}</p>
              </div>
              <a href="https://dashboard.stripe.com/payments/${orderId}" class="button">View in Stripe Dashboard</a>
              <p style="font-size: 12px; color: #999; margin-top: 20px;">King of Kings • Faith-led apparel</p>
            </div>
          </body>
          </html>
        `,
      });
      
      if (error) {
        console.error('Email sending failed:', error);
      } else {
        console.log('Email sent successfully to:', YOUR_EMAIL_ADDRESS);
      }
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
    }
  }

  res.status(200).json({ received: true });
}
