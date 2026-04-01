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
    <div className="bg-white min-h-screen text-black">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 text-center bg-white">
        <p className="tracking-[0.3em] uppercase text-sm mb-4 text-neutral-500">Luxury Christian Streetwear</p>
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">King of Kings</h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-600 mb-8 px-4">
          Premium faith-led apparel crafted to make belief visible.
        </p>
        <button 
          onClick={checkout} 
          className="px-8 py-4 rounded-full bg-black text-white text-lg font-medium shadow-lg hover:bg-gray-800 transition duration-300"
        >
          Shop Best Sellers
        </button>
      </section>

      {/* Product Collections */}
      {collections.map((collection, idx) => (
        <section key={idx} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{collection.title}</h2>
            <p className="text-neutral-500 mt-2 text-sm sm:text-base">{collection.subtitle}</p>
          </div>

          {/* Grid Layout - 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collection.products.map((product, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div className="bg-white p-6 flex items-center justify-center min-h-[280px]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-36 sm:w-40 h-auto object-contain hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: '160px', height: 'auto' }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/160x200?text=Design+Coming+Soon';
                    }}
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-5 pt-0 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-neutral-400 text-sm mt-1">Premium quality • Oversized fit</p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <button 
                      onClick={checkout} 
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Custom Design Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="rounded-2xl bg-gray-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Create Your Own Design</h2>
          <p className="text-neutral-300 mb-6 max-w-lg mx-auto text-sm sm:text-base">
            Personal scripture, declarations, and faith-led typography
          </p>
          <button 
            onClick={checkout} 
            className="px-6 py-3 rounded-full bg-white text-gray-900 text-base font-medium hover:bg-gray-100 transition-colors"
          >
            Start Custom Design
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
