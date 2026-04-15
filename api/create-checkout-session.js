import Stripe from 'stripe';

export default async function handler(req, res) {
  // Log that the function was called
  console.log('=== CHECKOUT FUNCTION CALLED ===');
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if Stripe secret key exists
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is missing!');
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY is missing' });
    }
    
    console.log('Stripe key found, initializing Stripe...');
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
    const { items, email } = req.body;
    console.log('Items received:', items);
    console.log('Email received:', email);

    // Validate cart is not empty
    if (!items || items.length === 0) {
      console.log('Cart is empty');
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Transform cart items into Stripe line items
    const lineItems = items.map(item => {
      const priceInPence = Math.round(item.price * 100);
      console.log(`Item: ${item.name}, Price: £${item.price}, Pence: ${priceInPence}`);
      return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.name,
          },
          unit_amount: priceInPence,
        },
        quantity: 1,
      };
    });

    console.log('Line items created:', JSON.stringify(lineItems, null, 2));

    // Create Stripe Checkout Session
    console.log('Creating Stripe checkout session...');
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://kingofkings.uk/success.html',
      cancel_url: 'https://kingofkings.uk/',
      customer_email: email || undefined,
    });

    console.log('Session created successfully! URL:', session.url);
    
    // Return the session URL
    return res.status(200).json({ url: session.url });
    
  } catch (error) {
    console.error('Stripe error details:', error);
    console.error('Error message:', error.message);
    console.error('Error type:', error.type);
    return res.status(500).json({ 
      error: error.message,
      type: error.type || 'unknown'
    });
  }
}
