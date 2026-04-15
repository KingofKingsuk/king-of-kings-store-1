import Stripe from 'stripe';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Diagnostic: Check if key exists
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ 
      error: 'STRIPE_SECRET_KEY is missing',
      envKeys: Object.keys(process.env).filter(k => k.includes('STRIPE'))
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { items, email } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const lineItems = items.map(item => ({
      price_data: {
        currency: 'gbp',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://kingofkings.uk/success.html',
      cancel_url: 'https://kingofkings.uk/',
      customer_email: email,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
