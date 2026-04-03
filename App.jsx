import { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCustomPage, setShowCustomPage] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(null);

  // Logo options for customization
  const logoOptions = [
    { id: 1, name: 'King of Kings Crest', image: '/King of Kings black silky mockup.png' },
    { id: 2, name: 'The Almighty', image: '/the almighty white mockup.png' },
    { id: 3, name: 'Light of The World', image: '/Light of the world mockup.png' },
    { id: 4, name: 'The Way', image: '/The way mockup.png' },
    { id: 5, name: 'The First and The Last', image: '/the first and the last mockup black.png' },
    { id: 6, name: 'No Weapon Formed', image: '/no weapon formed mockup.png' },
    { id: 7, name: 'God Got Me', image: '/god got me mockup.png' },
    { id: 8, name: 'The Prince of Peace', image: '/the prince of peace mockup.png' }
  ];

  // Product options
  const productOptions = [
    { id: 1, name: 'T-Shirt', price: '£24.99', icon: '👕' },
    { id: 2, name: 'Hoodie', price: '£49.99', icon: '🧥' },
    { id: 3, name: 'Sweatshirt', price: '£44.99', icon: '👚' }
  ];

  // ALL WORKING PRODUCTS
  const collections = [
    {
      title: 'Signature Collection',
      subtitle: 'Luxury typography pieces',
      products: [
        { name: 'The Almighty Tee', price: '£9.99', image: '/the almighty white mockup.png' }
      ]
    },
    {
      title: 'Royal Collection',
      subtitle: 'Crest and kingdom inspired premium wear',
      products: [
        { name: 'King of Kings Crest Tee', price: '£9.99', image: '/King of Kings black silky mockup.png' },
        { name: 'King of Kings Black Tee', price: '£9.99', image: '/King of Kings black mockup.png.png' },
        { name: 'King of Kings Gold Tee', price: '£9.99', image: '/King of Kings mockup.png' },
        { name: 'The Prince of Peace Tee', price: '£9.99', image: '/the prince of peace mockup.png' }
      ]
    },
    {
      title: 'Faith Collection',
      subtitle: 'Bold declarations of faith',
      products: [
        { name: 'God Got Me Tee', price: '£9.99', image: '/god got me mockup.png' },
        { name: 'No Weapon Formed Tee', price: '£9.99', image: '/no weapon formed mockup.png' }
      ]
    },
    {
      title: 'Scripture Collection',
      subtitle: 'Wear the Word boldly',
      products: [
        { name: 'Light of The World Tee', price: '£9.99', image: '/Light of the world mockup.png' },
        { name: 'The Way Tee', price: '£9.99', image: '/The way mockup.png' },
        { name: 'The Way The Truth The Life Tee', price: '£9.99', image: '/the way the truth and the life mockup.png' },
        { name: 'The First and The Last Tee', price: '£9.99', image: '/the first and the last mockup black.png' }
      ]
    },
    {
      title: 'Identity Collection',
      subtitle: 'Who you are in Christ',
      products: [
        { name: 'My Identity Tee', price: '£9.99', image: '/my identity mockup.png' },
        { name: 'Time Is Running Tee', price: '£9.99', image: '/Time is running mockup.png' }
      ]
    }
  ];

  const checkout = () => {
    window.open('https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01', '_blank');
  };

  const handleCustomDesign = () => {
    setShowCustomPage(true);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) {
      alert('Please select a product type (T-Shirt, Hoodie, or Sweatshirt)');
      return;
    }
    if (!selectedLogo) {
      alert('Please select a logo design');
      return;
    }
    // Here you would add to cart or go to checkout
    alert(`Added to cart: ${selectedProduct.name} with ${selectedLogo.name} design!\n\nProceed to checkout?`);
    checkout();
  };

  const imageSize = '240px';
  const popupSize = '576px';

  // If showing custom design page, render that instead
  if (showCustomPage) {
    return (
      <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* Back Button */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <button 
            onClick={() => setShowCustomPage(false)}
            style={{ backgroundColor: 'transparent', color: 'black', padding: '10px 20px', borderRadius: '30px', border: '1px solid #ddd', cursor: 'pointer', fontSize: '14px' }}
          >
            ← Back to Shop
          </button>
        </div>

        {/* Custom Design Header */}
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>Create Your Own Design</h1>
          <p style={{ color: '#666', fontSize: '18px' }}>Choose your garment and logo to create a unique faith-led piece</p>
        </div>

        {/* Step 1: Choose Product */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>Step 1: Choose Your Garment</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {productOptions.map(product => (
              <div 
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                style={{ 
                  backgroundColor: selectedProduct?.id === product.id ? '#f0f0f0' : 'white',
                  border: selectedProduct?.id === product.id ? '2px solid black' : '1px solid #eee',
                  borderRadius: '16px',
                  padding: '30px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{product.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{product.name}</h3>
                <p style={{ color: '#b8860b', fontWeight: 'bold' }}>{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Choose Logo */}
        <div style={{ backgroundColor: '#fafafa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>Step 2: Choose Your Design</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
              {logoOptions.map(logo => (
                <div 
                  key={logo.id}
                  onClick={() => setSelectedLogo(logo)}
                  style={{ 
                    backgroundColor: selectedLogo?.id === logo.id ? '#f0f0f0' : 'white',
                    border: selectedLogo?.id === logo.id ? '2px solid black' : '1px solid #eee',
                    borderRadius: '16px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <img src={logo.image} alt={logo.name} style={{ width: '120px', height: 'auto', marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>{logo.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary and Checkout */}
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#f5f5f5', borderRadius: '16px', padding: '30px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Your Custom Design</h3>
            {selectedProduct && <p><strong>Garment:</strong> {selectedProduct.name} - {selectedProduct.price}</p>}
            {selectedLogo && <p><strong>Design:</strong> {selectedLogo.name}</p>}
            {!selectedProduct && <p style={{ color: '#999' }}>No garment selected</p>}
            {!selectedLogo && <p style={{ color: '#999' }}>No design selected</p>}
            <button 
              onClick={handleAddToCart}
              style={{ 
                backgroundColor: 'black', 
                color: 'white', 
                padding: '16px 32px', 
                borderRadius: '32px', 
                fontSize: '18px', 
                border: 'none', 
                cursor: 'pointer', 
                marginTop: '20px',
                width: '100%'
              }}
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Shop Page (original content)
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* HERO SECTION */}
      <div style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #f5f5f0 0%, #ffffff 100%)' }}>
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px', color: '#666' }}>Luxury Christian Streetwear</p>
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px' }}>King of Kings</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 32px', fontSize: '20px', color: '#666' }}>
          Premium faith-led apparel crafted to make belief visible.
        </p>
        <button onClick={checkout} style={{ backgroundColor: 'black', color: 'white', padding: '16px 32px', borderRadius: '32px', fontSize: '18px', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          Shop Best Sellers
        </button>
      </div>

      {/* WHO WE ARE SECTION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#b8860b', letterSpacing: '2px', fontSize: '14px', marginBottom: '16px' }}>OUR STORY</p>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>More Than a T-Shirt</h2>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              King of Kings was born from a simple yet powerful calling: to turn everyday apparel into a tool for ministry. 
              We noticed a gap in the market for clothing that is both fashion-forward and unapologetically bold in its faith.
            </p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              In a culture constantly searching for identity and hope, we believe believers are called to be a light. 
              Our mission is to equip you with high-quality, stylish apparel that makes sharing your faith as simple as 
              getting dressed in the morning.
            </p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
              Every shirt is a seed, every hoodie a potential prayer, and every design an opportunity to point someone 
              back to the love of Jesus Christ.
            </p>
          </div>
          <div style={{ backgroundColor: '#f0f0f0', borderRadius: '24px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(https://placehold.co/600x400/e2e8f0/666?text=Our+Mission)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px' }}>
          </div>
        </div>
      </div>

      {/* OUR PROMISE SECTION - 3 CARDS */}
      <div style={{ backgroundColor: '#fafafa', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>Our Promise</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Rooted in Christ, driven by purpose, committed to excellence
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>👕</div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Premium Quality</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>We are committed to providing apparel that lasts. From our oversized fits to our premium fabrics, you'll receive a garment you'll be proud to wear for years.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>✝️</div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Kingdom Purpose</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>This brand is not about us; it's about Him. A portion of every purchase supports missions and spreading the Gospel around the world.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🤝</div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>A Community of Faith</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>When you wear King of Kings, you join a global family of believers who are unashamed of the Gospel. You are seen, loved, and part of our story.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT COLLECTIONS */}
      {collections.map((collection, idx) => (
        <div key={idx} style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 8px 0' }}>{collection.title}</h2>
            <p style={{ color: '#666', margin: '0' }}>{collection.subtitle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
            {collection.products.map((product, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #eee', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)'; }}>
                <div style={{ padding: '30px 20px', textAlign: 'center', backgroundColor: '#fafafa', minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedImage(product.image)}>
                  <img src={product.image} alt={product.name} style={{ width: imageSize, height: 'auto', display: 'block', objectFit: 'contain', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', textAlign: 'center' }}>{product.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', gap: '10px' }}>
                    <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#000' }}>{product.price}</span>
                    <button onClick={checkout} style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}>Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CUSTOM DESIGN SECTION - UPDATED BUTTON */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderRadius: '24px', background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Create Your Own Design</h2>
          <p style={{ color: '#ccc', margin: '0 0 24px 0', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>Personal scripture, declarations, and faith-led typography. Wear your testimony.</p>
          <button 
            onClick={handleCustomDesign}
            style={{ backgroundColor: 'white', color: 'black', padding: '12px 32px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '500', transition: 'transform 0.2s' }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Start Custom Design →
          </button>
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

      {/* LIGHTBOX POPUP */}
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
