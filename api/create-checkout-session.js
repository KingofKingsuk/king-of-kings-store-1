import Stripe from 'stripe';

export default async function handler(req, res) {
  // Initialize Stripe with the secret key
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items } = req.body;
    console.log('Received items:', items);

    // Check if Stripe key exists
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY is missing in environment variables' });
    }

    // Transform cart items into Stripe line items
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'gbp',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    }));

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://king-of-kings-store-1.vercel.app/',
      cancel_url: 'https://king-of-kings-store-1.vercel.app/',
    });

    // Return the session URL
    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message });
  }
}
