import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // DIRECT STRIPE PAYMENT LINKS - NO API CALLS
  const stripeLinks = {
    9.99: 'https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01',
    14.99: 'https://buy.stripe.com/3cI28sa8JdfUbim7vbdUY02',
  };

  const products = [
    { id: 1, name: 'EL Elyon 2 Tee', price: 9.99, priceDisplay: '£9.99', image: '/el elyon 2 mockup.png' },
    { id: 2, name: 'Christian Identity Tee', price: 9.99, priceDisplay: '£9.99', image: '/christian identity mockup.png' },
  ];

  const addToCart = (item) => {
    setCart([...cart, { ...item, id: Date.now() }]);
    alert(`${item.name} added to cart!`);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const proceedToCheckout = () => {
    const total = getCartTotal();
    const roundedTotal = Math.round(total * 100) / 100;
    
    // Direct redirect - NO fetch, NO API call
    const link = stripeLinks[roundedTotal];
    
    if (link) {
      window.open(link, '_blank');
    } else {
      alert(`Total £${roundedTotal} - please contact us`);
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>King of Kings - TEST VERSION</h1>
      <p>Checkout uses direct Stripe links - NO serverless function</p>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.priceDisplay}</p>
            <button onClick={() => addToCart(product)} style={{ background: 'black', color: 'white', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      <button onClick={() => setShowCart(true)} style={{ position: 'fixed', top: '20px', right: '20px', background: 'black', color: 'white', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer' }}>
        Cart ({cart.length})
      </button>
      
      {showCart && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '300px', background: 'white', border: '1px solid #ddd', padding: '20px', height: '100vh', overflow: 'auto' }}>
          <h2>Cart</h2>
          <button onClick={() => setShowCart(false)}>Close</button>
          {cart.map(item => (
            <div key={item.id}>{item.name} - {item.priceDisplay}</div>
          ))}
          <hr />
          <strong>Total: £{getCartTotal().toFixed(2)}</strong>
          <button onClick={proceedToCheckout} style={{ background: 'black', color: 'white', padding: '10px', width: '100%', marginTop: '20px', cursor: 'pointer' }}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
