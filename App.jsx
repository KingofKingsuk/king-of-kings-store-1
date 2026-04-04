import { useState, useRef } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCustomPage, setShowCustomPage] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLogoGallery, setShowLogoGallery] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  // Create ref for Jesus Collection section
  const jesusCollectionRef = useRef(null);

  // Product options for custom design
  const productOptions = [
    { id: 1, name: 'T-Shirt', price: 9.99, priceDisplay: '£9.99', icon: '👕', description: 'Classic fit • 100% cotton • Premium quality' },
    { id: 2, name: 'Sweatshirt', price: 19.99, priceDisplay: '£19.99', icon: '👚', description: 'Oversized fit • Fleece lined • Comfortable' },
    { id: 3, name: 'Hoodie', price: 29.99, priceDisplay: '£29.99', icon: '🧥', description: 'Premium hoodie • Kangaroo pocket • Adjustable hood' }
  ];

  // Scroll to Jesus Collection
  const scrollToJesusCollection = () => {
    jesusCollectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ALL PRODUCT COLLECTIONS - REORDERED
  const collections = [
    {
      title: 'Identity Collection',
      subtitle: 'Who you are in Christ',
      products: [
        { name: 'Christian Identity Front Black Tee', price: 9.99, priceDisplay: '£9.99', image: '/christian identity front black mockup.png' },
        { name: 'Christian Identity Tee', price: 9.99, priceDisplay: '£9.99', image: '/christian identity mockup.png' },
        { name: 'My Identity Tee', price: 9.99, priceDisplay: '£9.99', image: '/my identity mockup.png' },
        { name: 'Redeemed Front Tee', price: 9.99, priceDisplay: '£9.99', image: '/redeemed front mockup.png' },
        { name: 'The Almighty White Tee', price: 9.99, priceDisplay: '£9.99', image: '/the almighty white mockup.png' },
        { name: 'Light of The World Tee', price: 9.99, priceDisplay: '£9.99', image: '/Light of the world mockup.png' }
      ]
    },
    {
      title: 'Signature Collection',
      subtitle: 'Luxury typography pieces',
      products: [
        { name: 'EL Elyon 1 Tee', price: 9.99, priceDisplay: '£9.99', image: '/el elyon 1 mockup.png' },
        { name: 'EL Elyon 2 Tee', price: 9.99, priceDisplay: '£9.99', image: '/el elyon 2 mockup.png' },
        { name: 'EL Elyon White Tee', price: 9.99, priceDisplay: '£9.99', image: '/el elyon white mockup.png' }
      ]
    },
    {
      title: 'Royal Collection',
      subtitle: 'Crest and kingdom inspired premium wear',
      products: [
        { name: 'King of Kings Black Tee', price: 9.99, priceDisplay: '£9.99', image: '/King of Kings black mockup.png' },
        { name: 'King of Kings Second Tee', price: 9.99, priceDisplay: '£9.99', image: '/King of Kings second mockup.png' },
        { name: 'The Prince of Peace Tee', price: 9.99, priceDisplay: '£9.99', image: '/the prince of peace mockup.png' },
        { name: 'Prince of Peace Sweat', price: 19.99, priceDisplay: '£19.99', image: '/prince of peace sweat mockup.png' }
      ]
    },
    {
      title: 'Jesus Collection',
      subtitle: 'Declare His name boldly',
      ref: jesusCollectionRef,
      products: [
        { name: 'Jesus Christ White Tee', price: 9.99, priceDisplay: '£9.99', image: '/jesus christ white mockup.png' },
        { name: 'Jesus Cross Tee', price: 9.99, priceDisplay: '£9.99', image: '/jesus cross mockup.png' },
        { name: 'Jesus Tee', price: 9.99, priceDisplay: '£9.99', image: '/jesus mockup.png' },
        { name: 'Jesus The Way Front Tee', price: 9.99, priceDisplay: '£9.99', image: '/jesus the way front mockup.png' }
      ]
    },
    {
      title: 'Faith Collection',
      subtitle: 'Bold declarations of faith',
      products: [
        { name: 'Faith Over Fear Tee', price: 9.99, priceDisplay: '£9.99', image: '/faith over fear mockup.png' },
        { name: 'God Got Me Back Tee', price: 9.99, priceDisplay: '£9.99', image: '/god got me back mockup.png' },
        { name: 'No Weapon Tee', price: 9.99, priceDisplay: '£9.99', image: '/no weapon mockup.png' }
      ]
    },
    {
      title: 'Scripture Collection',
      subtitle: 'Wear the Word boldly',
      products: [
        { name: 'The First and The Last Black Tee', price: 9.99, priceDisplay: '£9.99', image: '/the first and the last black mockup.png' },
        { name: 'The Living God Tee', price: 9.99, priceDisplay: '£9.99', image: '/the living god mockup.png' },
        { name: 'The Holy One Tee', price: 9.99, priceDisplay: '£9.99', image: '/the holy one mockup.png' },
        { name: 'The Way Tee', price: 9.99, priceDisplay: '£9.99', image: '/the way mockup.png' },
        { name: 'The Way The Truth The Life Tee', price: 9.99, priceDisplay: '£9.99', image: '/the way the truth and the life mockup.png' }
      ]
    }
  ];

  // Add to cart function
  const addToCart = (item) => {
    setCart([...cart, { 
      ...item, 
      id: Date.now(),
      price: typeof item.price === 'number' ? item.price : parseFloat(item.price)
    }]);
    alert(`${item.name} added to cart!`);
  };

  // Remove from cart function
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Get cart total in pounds (for Stripe, we need pence)
  const getCartTotalPounds = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
      return total + price;
    }, 0);
  };

  // Get cart total display
  const getCartTotalDisplay = () => {
    return `£${getCartTotalPounds().toFixed(2)}`;
  };

  // Proceed to Stripe checkout with dynamic amount
  const proceedToCheckout = () => {
    const totalPounds = getCartTotalPounds();
    
    if (totalPounds === 0) {
      alert('Your cart is empty. Please add items before checking out.');
      return;
    }
    
    // Create a description of items for Stripe
    const itemDescriptions = cart.map(item => item.name).join(', ');
    
    // You'll need to replace this with your actual Stripe payment link
    // For dynamic amounts, you need to use Stripe Checkout API or a payment link with amount parameter
    // Since you have a fixed Stripe link, I'll redirect with the amount as a query parameter
    // Note: Your Stripe link may need to support amount parameters
    
    // For now, we'll open Stripe with the total amount in the URL (if supported)
    const stripeBaseUrl = 'https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01';
    
    // Some Stripe payment links support ?amount=XX parameter
    // Try adding the amount as a query parameter
    const amountInPence = Math.round(totalPounds * 100);
    const stripeUrl = `${stripeBaseUrl}?amount=${amountInPence}&description=${encodeURIComponent(itemDescriptions)}`;
    
    window.open(stripeUrl, '_blank');
    
    // Optional: Clear cart after checkout
    // setCart([]);
    // setShowCart(false);
  };

  const handleCustomDesign = () => {
    setShowCustomPage(true);
    setSelectedProduct(null);
    setSelectedLogo(null);
    setShowLogoGallery(false);
    window.scrollTo(0, 0);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setShowLogoGallery(true);
    window.scrollTo(0, 0);
  };

  const handleLogoSelect = (logo) => {
    setSelectedLogo(logo);
    const customItem = {
      name: `${selectedProduct.name} with ${logo.name} Design`,
      price: selectedProduct.price,
      priceDisplay: `£${selectedProduct.price.toFixed(2)}`,
      image: logo.image,
      type: 'custom'
    };
    addToCart(customItem);
    setShowLogoGallery(false);
    setSelectedProduct(null);
    setSelectedLogo(null);
  };

  const handleBackToProducts = () => {
    setShowLogoGallery(false);
    setSelectedProduct(null);
  };

  const imageSize = '240px';
  const popupSize = '576px'; // 6 inches

  // Custom Design Page
  if (showCustomPage) {
    if (showLogoGallery && selectedProduct) {
      return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <button onClick={handleBackToProducts} style={{ backgroundColor: 'transparent', color: 'black', padding: '10px 20px', borderRadius: '30px', border: '1px solid #ddd', cursor: 'pointer', fontSize: '14px' }}>← Back to Garment Selection</button>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: '60px', marginBottom: '16px' }}>{selectedProduct.icon}</div>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>Choose Your Design</h1>
            <p style={{ color: '#666', fontSize: '18px' }}>Selected: {selectedProduct.name} - {selectedProduct.priceDisplay}</p>
            <p style={{ color: '#999', fontSize: '14px', marginTop: '8px' }}>{selectedProduct.description}</p>
          </div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {collections.flatMap(c => c.products).map((product, idx) => (
                <div key={idx} onClick={() => handleLogoSelect(product)} style={{ backgroundColor: 'white', border: '1px solid #eee', borderRadius: '16px', padding: '24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'; }}>
                  <img src={product.image} alt={product.name} style={{ width: '180px', height: 'auto', marginBottom: '16px', borderRadius: '8px' }} onError={(e) => { e.target.src = 'https://placehold.co/180x200/e2e8f0/666?text=Coming+Soon'; }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{product.name}</h3>
                  <button style={{ backgroundColor: 'black', color: 'white', padding: '8px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '14px', marginTop: '16px' }}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <button onClick={() => setShowCustomPage(false)} style={{ backgroundColor: 'transparent', color: 'black', padding: '10px 20px', borderRadius: '30px', border: '1px solid #ddd', cursor: 'pointer', fontSize: '14px' }}>← Back to Shop</button>
        </div>
        <div style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>Create Your Own Design</h1>
          <p style={{ color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Choose your garment to get started. Each piece is custom printed with your selected design.</p>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {productOptions.map(product => (
              <div key={product.id} onClick={() => handleProductSelect(product)} style={{ backgroundColor: 'white', border: '2px solid #f0f0f0', borderRadius: '24px', padding: '40px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = '#b8860b'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#f0f0f0'; }}>
                <div style={{ fontSize: '80px', marginBottom: '20px' }}>{product.icon}</div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>{product.name}</h2>
                <p style={{ fontSize: '24px', color: '#b8860b', fontWeight: 'bold', marginBottom: '16px' }}>{product.priceDisplay}</p>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>{product.description}</p>
                <button style={{ backgroundColor: 'black', color: 'white', padding: '12px 28px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '500' }}>Choose {product.name} →</button>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: '#fafafa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>How It Works</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
              <div><div style={{ fontSize: '30px', marginBottom: '10px' }}>1</div><p><strong>Choose Garment</strong></p><p style={{ fontSize: '14px', color: '#666' }}>Select T-Shirt, Sweatshirt, or Hoodie</p></div>
              <div><div style={{ fontSize: '30px', marginBottom: '10px' }}>2</div><p><strong>Pick a Design</strong></p><p style={{ fontSize: '14px', color: '#666' }}>Choose from our faith-led logo collection</p></div>
              <div><div style={{ fontSize: '30px', marginBottom: '10px' }}>3</div><p><strong>Add to Cart</strong></p><p style={{ fontSize: '14px', color: '#666' }}>Review items and proceed to checkout</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Shop Page
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '400px',
          height: '100vh',
          backgroundColor: 'white',
          boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
          zIndex: 1001,
          padding: '20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Your Cart ({cart.length})</h2>
            <button onClick={() => setShowCart(false)} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>✕</button>
          </div>
          
          {cart.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', marginTop: '40px' }}>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '15px', marginBottom: '20px', padding: '10px', borderBottom: '1px solid #eee' }}>
                  <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>{item.name}</h4>
                    <p style={{ color: '#b8860b', fontWeight: 'bold' }}>{item.priceDisplay || `£${item.price.toFixed(2)}`}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '8px', padding: '5px 10px', cursor: 'pointer' }}>Remove</button>
                </div>
              ))}
              
              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '2px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <strong>Total:</strong>
                  <strong>{getCartTotalDisplay()}</strong>
                </div>
                <button onClick={proceedToCheckout} style={{ backgroundColor: 'black', color: 'white', padding: '15px', borderRadius: '30px', border: 'none', cursor: 'pointer', width: '100%', fontSize: '16px', fontWeight: 'bold' }}>
                  Proceed to Checkout • {getCartTotalDisplay()}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Cart Icon */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <button onClick={() => setShowCart(true)} style={{ backgroundColor: 'black', color: 'white', padding: '12px 18px', borderRadius: '50px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          🛒 Cart {cart.length > 0 && <span style={{ backgroundColor: '#b8860b', borderRadius: '50%', padding: '2px 8px', fontSize: '12px' }}>{cart.length}</span>}
        </button>
      </div>

      {/* HERO SECTION */}
      <div style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #f5f5f0 0%, #ffffff 100%)' }}>
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px', color: '#666' }}>Luxury Christian Streetwear</p>
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px' }}>King of Kings</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 32px', fontSize: '20px', color: '#666' }}>Premium faith-led apparel crafted to make belief visible.</p>
        <button 
          onClick={scrollToJesusCollection}
          style={{ backgroundColor: 'black', color: 'white', padding: '16px 32px', borderRadius: '32px', fontSize: '18px', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }} 
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Shop Best Sellers
        </button>
      </div>

      {/* WHO WE ARE SECTION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#b8860b', letterSpacing: '2px', fontSize: '14px', marginBottom: '16px' }}>OUR STORY</p>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>More Than a T-Shirt</h2>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>King of Kings was born from a simple yet powerful calling: to turn everyday apparel into a tool for ministry. We noticed a gap in the market for clothing that is both fashion-forward and unapologetically bold in its faith.</p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>In a culture constantly searching for identity and hope, we believe believers are called to be a light. Our mission is to equip you with high-quality, stylish apparel that makes sharing your faith as simple as getting dressed in the morning.</p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>Every shirt is a seed, every hoodie a potential prayer, and every design an opportunity to point someone back to the love of Jesus Christ.</p>
          </div>
          <div style={{ backgroundColor: '#f0f0f0', borderRadius: '24px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(https://placehold.co/600x400/e2e8f0/666?text=Our+Mission)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px' }}></div>
        </div>
      </div>

      {/* OUR PROMISE SECTION */}
      <div style={{ backgroundColor: '#fafafa', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>Our Promise</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Rooted in Christ, driven by purpose, committed to excellence</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}><div style={{ fontSize: '48px', marginBottom: '20px' }}>👕</div><h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Premium Quality</h3><p style={{ color: '#666', lineHeight: '1.6' }}>We are committed to providing apparel that lasts. From our oversized fits to our premium fabrics, you'll receive a garment you'll be proud to wear for years.</p></div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}><div style={{ fontSize: '48px', marginBottom: '20px' }}>✝️</div><h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Kingdom Purpose</h3><p style={{ color: '#666', lineHeight: '1.6' }}>This brand is not about us; it's about Him. A portion of every purchase supports missions and spreading the Gospel around the world.</p></div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}><div style={{ fontSize: '48px', marginBottom: '20px' }}>🤝</div><h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>A Community of Faith</h3><p style={{ color: '#666', lineHeight: '1.6' }}>When you wear King of Kings, you join a global family of believers who are unashamed of the Gospel. You are seen, loved, and part of our story.</p></div>
          </div>
        </div>
      </div>

      {/* PRODUCT COLLECTIONS */}
      {collections.map((collection, idx) => (
        <div 
          key={idx} 
          ref={collection.ref || null}
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 8px 0' }}>{collection.title}</h2>
            <p style={{ color: '#666', margin: '0' }}>{collection.subtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
            {collection.products.map((product, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #eee', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'; }}>
                <div style={{ padding: '30px 20px', textAlign: 'center', backgroundColor: '#fafafa', minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedImage(product.image)}>
                  <img src={product.image} alt={product.name} style={{ width: imageSize, height: 'auto', display: 'block', objectFit: 'contain', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/240x300/e2e8f0/666?text=Image+Not+Found'; console.error('Failed to load:', product.image); }} />
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', textAlign: 'center' }}>{product.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', gap: '10px' }}>
                    <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#000' }}>{product.priceDisplay}</span>
                    <button onClick={() => addToCart(product)} style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CUSTOM DESIGN SECTION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderRadius: '24px', background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Create Your Own Design</h2>
          <p style={{ color: '#ccc', margin: '0 0 24px 0', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>Personal scripture, declarations, and faith-led typography. Wear your testimony.</p>
          <button onClick={handleCustomDesign} style={{ backgroundColor: 'white', color: 'black', padding: '12px 32px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '500', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Start Custom Design →</button>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>King of Kings</h3>
          <p style={{ color: '#666', marginBottom: '16px' }}>Declaring His name through premium faith-led apparel</p>
          <p style={{ color: '#999', fontSize: '14px' }}>© 2025 King of Kings. All rights reserved.</p>
          <p style={{ color: '#999', fontSize: '12px', marginTop: '16px' }}>"Therefore go and make disciples of all nations..." - Matthew 28:19</p>
        </div>
      </div>

      {/* LIGHTBOX POPUP - 6 INCHES */}
      {selectedImage && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, cursor: 'pointer' }} onClick={() => setSelectedImage(null)}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', maxWidth: popupSize, width: '90%', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Product preview" style={{ width: '100%', height: 'auto', maxWidth: popupSize, display: 'block', margin: '0 auto' }} />
            <button onClick={() => setSelectedImage(null)} style={{ marginTop: '20px', padding: '10px 28px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '14px' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
