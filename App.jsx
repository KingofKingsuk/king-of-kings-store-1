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
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'white' }}>
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px', color: '#666' }}>Luxury Christian Streetwear</p>
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px' }}>King of Kings</h1>
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
        <div key={idx} style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>{collection.title}</h2>
            <p style={{ color: '#666', marginTop: '8px' }}>{collection.subtitle}</p>
          </div>

          {/* GRID LAYOUT - This creates 3 columns */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px',
            alignItems: 'start'
          }}>
            {collection.products.map((product, i) => (
              <div key={i} style={{ 
                backgroundColor: 'white', 
                borderRadius: '24px', 
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0'
              }}>
                <div style={{ padding: '24px', textAlign: 'center', backgroundColor: 'white' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ 
                      width: '160px', 
                      height: 'auto', 
                      margin: '0 auto',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/160x200?text=Loading...';
                    }}
                  />
                </div>
                <div style={{ padding: '0 24px 24px 24px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{product.name}</h3>
                  <p style={{ color: '#999', fontSize: '14px', marginTop: '8px' }}>Premium quality • Oversized fit</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{product.price}</span>
                    <button 
                      onClick={checkout}
                      style={{ backgroundColor: 'black', color: 'white', padding: '10px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer' }}
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
        <div style={{ backgroundColor: '#111', color: 'white', padding: '60px', textAlign: 'center', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Create Your Own Design</h2>
          <p style={{ color: '#ccc', marginBottom: '24px' }}>Personal scripture, declarations, and faith-led typography</p>
          <button 
            onClick={checkout}
            style={{ backgroundColor: 'white', color: 'black', padding: '12px 32px', borderRadius: '32px', border: 'none', cursor: 'pointer', fontSize: '16px' }}
          >
            Start Custom Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
