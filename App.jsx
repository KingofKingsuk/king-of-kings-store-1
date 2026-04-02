import { useState, useEffect } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageStatus, setImageStatus] = useState({});

  // List of ALL your mockups based on what you showed earlier
  const allMockups = [
    { name: 'Christian Identity Tee', price: '£9.99', file: 'christian identity mockup.png' },
    { name: 'EL YON Monogram Tee', price: '£9.99', file: 'el elyon 1 mockup white.png' },
    { name: 'EL YON Creme Tee', price: '£9.99', file: 'el elyon 2 mockup creme.png' },
    { name: 'Faith Over Fear Tee', price: '£9.99', file: 'fath over fear mockup.png' },
    { name: 'God Got Me Tee', price: '£9.99', file: 'god got me mockup.png' },
    { name: 'Jesus Christ Tee', price: '£9.99', file: 'jesus christ mockup.png' },
    { name: 'Jesus Died For Me Tee', price: '£9.99', file: 'jesus died for me mockup.png' },
    { name: 'Jesus The Way Tee', price: '£9.99', file: 'jesus the way mockup.png' },
    { name: 'The Way The Truth The Life Tee', price: '£9.99', file: 'jesus the way the truth and the life mock up.png' },
    { name: 'King of Kings Black Tee', price: '£9.99', file: 'king of kings black mockup.png' },
    { name: 'King of Kings Crest Tee', price: '£9.99', file: 'King of Kings black silky mockup.png' },
    { name: 'King of Kings Gold Tee', price: '£9.99', file: 'King of Kings mockup.png' },
    { name: 'Light of The World Tee', price: '£9.99', file: 'Light of the world mockup.png' },
    { name: 'My Identity Tee', price: '£9.99', file: 'my identity mockup.png' },
    { name: 'No Weapon Formed Tee', price: '£9.99', file: 'no weapon formed mockup.png' },
    { name: 'Redeemed Hoodie', price: '£9.99', file: 'redeemed hoodie mockup.png' },
    { name: 'The Almighty Tee', price: '£9.99', file: 'the almighty white mockup.png' },
    { name: 'The First and The Last Tee', price: '£9.99', file: 'the first and the last mockup black.png' },
    { name: 'The Holy One Tee', price: '£9.99', file: 'the holy one mockup Gold white.png' },
    { name: 'The Living God Tee', price: '£9.99', file: 'the living god mockup white.png' },
    { name: 'The Prince of Peace Tee', price: '£9.99', file: 'the prince of peace mockup.png' },
    { name: 'The Way Tee', price: '£9.99', file: 'The way mockup.png' },
    { name: 'The Way The Truth The Life Tee 2', price: '£9.99', file: 'the way the truth and the life mockup.png' },
    { name: 'Time Is Running Tee', price: '£9.99', file: 'Time is running mockup.png' },
    { name: 'Time Is Running Out Tee', price: '£9.99', file: 'time Is Running Out mockup.png' },
    { name: 'Yahweh Saboath Tee', price: '£9.99', file: 'yahweh sabotah mockup.png' }
  ];

  // Check each image on load
  useEffect(() => {
    allMockups.forEach(mockup => {
      const img = new Image();
      img.onload = () => setImageStatus(prev => ({ ...prev, [mockup.name]: 'loaded' }));
      img.onerror = () => setImageStatus(prev => ({ ...prev, [mockup.name]: 'failed' }));
      img.src = `/${mockup.file}`;
    });
  }, []);

  const collections = [
    {
      title: 'Signature Collection',
      subtitle: 'Luxury typography pieces',
      products: allMockups.filter(m => 
        m.name === 'EL YON Monogram Tee' || 
        m.name === 'EL YON Creme Tee' || 
        m.name === 'The Almighty Tee'
      )
    },
    {
      title: 'Royal Collection',
      subtitle: 'Crest and kingdom inspired premium wear',
      products: allMockups.filter(m => 
        m.name === 'King of Kings Crest Tee' || 
        m.name === 'King of Kings Black Tee' || 
        m.name === 'King of Kings Gold Tee' || 
        m.name === 'The Prince of Peace Tee'
      )
    },
    {
      title: 'Jesus Collection',
      subtitle: 'Declare His name boldly',
      products: allMockups.filter(m => 
        m.name === 'Jesus Died For Me Tee' || 
        m.name === 'Jesus Christ Tee' || 
        m.name === 'Jesus The Way Tee' || 
        m.name === 'The Way The Truth The Life Tee'
      )
    },
    {
      title: 'Faith Collection',
      subtitle: 'Bold declarations of faith',
      products: allMockups.filter(m => 
        m.name === 'Faith Over Fear Tee' || 
        m.name === 'God Got Me Tee' || 
        m.name === 'No Weapon Formed Tee' || 
        m.name === 'Yahweh Saboath Tee'
      )
    },
    {
      title: 'Scripture Collection',
      subtitle: 'Wear the Word boldly',
      products: allMockups.filter(m => 
        m.name === 'The First and The Last Tee' || 
        m.name === 'The Living God Tee' || 
        m.name === 'Light of The World Tee' || 
        m.name === 'The Way Tee' || 
        m.name === 'The Way The Truth The Life Tee 2'
      )
    },
    {
      title: 'Identity Collection',
      subtitle: 'Who you are in Christ',
      products: allMockups.filter(m => 
        m.name === 'Christian Identity Tee' || 
        m.name === 'My Identity Tee' || 
        m.name === 'Time Is Running Out Tee' || 
        m.name === 'Time Is Running Tee' || 
        m.name === 'Redeemed Hoodie'
      )
    }
  ];

  const checkout = () => {
    window.open('https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01', '_blank');
  };

  const imageSize = '240px';
  const popupSize = '576px';

  // Count how many images loaded
  const loadedCount = Object.values(imageStatus).filter(s => s === 'loaded').length;
  const totalCount = allMockups.length;

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'white' }}>
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px', color: '#666' }}>Luxury Christian Streetwear</p>
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px' }}>King of Kings</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 32px', fontSize: '20px', color: '#666' }}>
          Premium faith-led apparel crafted to make belief visible.
        </p>
        
        {/* Diagnostic Banner - Shows how many images loaded */}
        <div style={{ 
          backgroundColor: loadedCount === totalCount ? '#10b981' : '#ef4444', 
          color: 'white', 
          padding: '10px', 
          borderRadius: '8px',
          maxWidth: '400px',
          margin: '0 auto 20px',
          fontSize: '14px'
        }}>
          Images loaded: {loadedCount} / {totalCount}
          {loadedCount !== totalCount && ' - Some images are missing!'}
        </div>
        
        <button 
          onClick={checkout}
          style={{ backgroundColor: 'black', color: 'white', padding: '16px 32px', borderRadius: '32px', fontSize: '18px', border: 'none', cursor: 'pointer' }}
        >
          Shop Best Sellers
        </button>
      </div>

      {/* Product Collections */}
      {collections.map((collection, idx) => (
        <div key={idx} style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 8px 0' }}>{collection.title}</h2>
            <p style={{ color: '#666', margin: '0' }}>{collection.subtitle}</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'stretch'
          }}>
            {collection.products.map((product, i) => (
              <div key={i} style={{ 
                backgroundColor: 'white', 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                border: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div 
                  style={{ 
                    padding: '30px 20px', 
                    textAlign: 'center', 
                    backgroundColor: '#fafafa',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedImage(`/${product.file}`)}
                >
                  <img 
                    src={`/${product.file}`}
                    alt={product.name} 
                    style={{ 
                      width: imageSize,
                      height: 'auto', 
                      display: 'block',
                      objectFit: 'contain',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/240x300/ff6b6b/white?text=MISSING:${product.file.substring(0,20)}`;
                      console.error('Failed to load:', product.file);
                    }}
                  />
                </div>
                
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', textAlign: 'center' }}>{product.name}</h3>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginTop: 'auto',
                    gap: '10px'
                  }}>
                    <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#000' }}>{product.price}</span>
                    <button 
                      onClick={checkout}
                      style={{ 
                        backgroundColor: 'black', 
                        color: 'white', 
                        padding: '10px 20px', 
                        borderRadius: '30px', 
                        border: 'none', 
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Custom Design Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Create Your Own Design</h2>
          <p style={{ color: '#ccc', margin: '0 0 24px 0' }}>Personal scripture, declarations, and faith-led typography</p>
          <button 
            onClick={checkout}
            style={{ backgroundColor: 'white', color: 'black', padding: '12px 32px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: '500' }}
          >
            Start Custom Design
          </button>
        </div>
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              maxWidth: popupSize,
              width: '90%',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Product preview"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: popupSize,
                display: 'block',
                margin: '0 auto'
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                marginTop: '20px',
                padding: '10px 28px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
