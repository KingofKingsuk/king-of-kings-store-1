import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

  // DIRECT STRIPE PAYMENT LINKS - NO API CALLS
  const stripeLinks = {
    9.99: 'https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01',
    14.99: 'https://buy.stripe.com/3cI28sa8JdfUbim7vbdUY02',
  };

  const products = [
    { id: 1, name: 'EL Elyon 2 Tee', price: 9.99, priceDisplay: '£9.99', image: '/el elyon 2 mockup.png' },
    { id: 2, name: 'Christian Identity Tee', price: 9.99, priceDisplay: '£9.99', image: '/christian identity mockup.png' },
    { id: 3, name: 'Christian Identity Front Sweatshirt', price: 14.99, priceDisplay: '£14.99', image: '/christian identity front black mockup.png' },
  ];

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const addToCart = (item, selectedSize) => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    setCart([...cart, { ...item, id: Date.now(), size: selectedSize, nameWithSize: `${item.name} (${selectedSize})` }]);
    alert(`${item.name} (${selectedSize}) added to cart!`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const proceedToCheckout = () => {
    const total = getCartTotal();
    const roundedTotal = Math.round(total * 100) / 100;
    
    // Direct Stripe link - NO API CALL
    const link = stripeLinks[roundedTotal];
    
    if (link) {
      window.open(link, '_blank');
    } else {
      alert(`Total £${roundedTotal.toFixed(2)} - please contact us`);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1>King of Kings</h1>
      <p>Premium faith-led apparel</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.priceDisplay}</p>
            <div style={{ display: 'flex', gap: '8px', margin: '10px 0' }}>
              {sizeOptions.map(size => (
                <button key={size} onClick={() => handleSizeSelect(product.id, size)} style={{ background: selectedSizes[product.id] === size ? '#b8860b' : '#ddd', color: selectedSizes[product.id] === size ? 'white' : 'black', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>{size}</button>
              ))}
            </div>
            <button onClick={() => addToCart(product, selectedSizes[product.id])} style={{ background: 'black', color: 'white', padding: '10px', width: '100%', borderRadius: '8px', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      <button onClick={() => setShowCart(true)} style={{ position: 'fixed', top: '20px', right: '20px', background: 'black', color: 'white', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer' }}>Cart ({cart.length})</button>
      
      {showCart && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '350px', height: '100vh', background: 'white', borderLeft: '1px solid #ddd', padding: '20px', overflow: 'auto', zIndex: 1000 }}>
          <button onClick={() => setShowCart(false)} style={{ float: 'right', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
          <h2>Your Cart ({cart.length})</h2>
          {cart.length === 0 ? <p>Cart is empty</p> : (
            <>
              {cart.map(item => (
                <div key={item.id} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <div><strong>{item.nameWithSize}</strong></div>
                  <div>{item.priceDisplay}</div>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', marginTop: '5px' }}>Remove</button>
                </div>
              ))}
              <hr />
              <div><strong>Total: £{getCartTotal().toFixed(2)}</strong></div>
              <button onClick={proceedToCheckout} style={{ background: 'black', color: 'white', padding: '15px', width: '100%', borderRadius: '8px', marginTop: '20px', cursor: 'pointer' }}>Proceed to Checkout</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
