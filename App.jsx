function App() {
  const collections = [
    {
      title: 'Signature Collection',
      subtitle: 'Luxury typography pieces',
      products: [
        { name: 'EL YON Monogram Tee', price: '£29.99', image: '/el%20elyon%201%20mockup%20white.png' },
        { name: 'The Holy One Tee', price: '£34.99', image: '/the%20holy%20one%20mockup%20Gold%20white.png' },
        { name: 'The Almighty Tee', price: '£29.99', image: '/the%20almighty%20white%20mockup.png' }
      ]
    },
    {
      title: 'Royal Collection',
      subtitle: 'Crest and kingdom inspired premium wear',
      products: [
        { name: 'King of Kings Crest Tee', price: '£34.99', image: '/King%20of%20Kings%20black%20silky%20mockup.png' },
        { name: 'King of Kings Black Tee', price: '£34.99', image: '/king%20of%20kings%20black%20mockup.png' },
        { name: 'The Prince of Peace Tee', price: '£29.99', image: '/the%20prince%20of%20peace%20mockup.png' }
      ]
    },
    {
      title: 'Jesus Collection',
      subtitle: 'Declare His name boldly',
      products: [
        { name: 'Jesus Died For Me Tee', price: '£34.99', image: '/jesus%20died%20for%20me%20mockup.png' },
        { name: 'Jesus Christ Tee', price: '£34.99', image: '/jesus%20christ%20mockup.png' },
        { name: 'The Way The Truth The Life Tee', price: '£34.99', image: '/jesus%20the%20way%20the%20truth%20and%20the%20life%20mock%20up.png' }
      ]
    },
    {
      title: 'Scripture Collection',
      subtitle: 'Wear the Word boldly',
      products: [
        { name: 'The First and The Last Tee', price: '£29.99', image: '/the%20first%20and%20the%20last%20mockup%20black.png' },
        { name: 'The Living God Tee', price: '£29.99', image: '/the%20living%20god%20mockup%20white.png' },
        { name: 'Light of The World Tee', price: '£29.99', image: '/Light%20of%20the%20world%20mockup.png' }
      ]
    },
    {
      title: 'Identity Collection',
      subtitle: 'Who you are in Christ',
      products: [
        { name: 'Christian Identity Tee', price: '£29.99', image: '/christian%20identity%20mockup.png' },
        { name: 'Time Is Running Out Tee', price: '£24.99', image: '/time%20Is%20Running%20Out%20mockup.png' },
        { name: 'Yahweh Saboath Tee', price: '£29.99', image: '/yahweh%20saboath%20mockup.png' }
      ]
    }
  ];

  const checkout = () => {
    window.open('https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01', '_blank');
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'white' }}>
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px', color: '#666' }}>Luxury Christian Streetwear</p>
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px', margin: '0 0 24px 0' }}>King of Kings</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 32px', fontSize: '20px', color: '#666' }}>
          Premium faith-led apparel crafted to make belief visible.
        </p>
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

          {/* GRID LAYOUT - Fixed alignment */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
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
                {/* Image Container - Fixed height and alignment */}
                <div style={{ 
                  padding: '30px 20px', 
                  textAlign: 'center', 
                  backgroundColor: '#fafafa',
                  minHeight: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ 
                      width: '140px', 
                      height: 'auto', 
                      display: 'block',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/140x180/e2e8f0/666?text=Coming+Soon';
                      e.target.style.width = '120px';
                    }}
                  />
                </div>
                
                {/* Product Info - Fixed alignment */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0', textAlign: 'center' }}>{product.name}</h3>
                  <p style={{ color: '#999', fontSize: '13px', margin: '0 0 20px 0', textAlign: 'center' }}>Premium quality • Oversized fit</p>
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
    </div>
  );
}

export default App;
