function App() {
  const collections = [
    {
      title: 'Signature Collection',
      subtitle: 'Luxury typography pieces',
      products: [
        { name: 'EL YON Monogram Tee', price: '£29.99', image: '/el%20elyon%201%20mockup%20white.png' },
        { name: 'The Holy One Gold Foil Tee', price: '£34.99', image: '/el%20elyon%202%20mockup%20creme.png' },
        { name: 'The Almighty Statement Tee', price: '£29.99', image: '/alyon%205.png' }
      ]
    },
    {
      title: 'Royal Collection',
      subtitle: 'Crest and kingdom inspired premium wear',
      products: [
        { name: 'King of Kings Crest Luxe Tee', price: '£34.99', image: '/King%20of%20Kings%20black%20silky%20mockup.png' },
        { name: 'Lion of Judah Heritage Tee', price: '£34.99', image: '/King%20of%20Kings%20mockup.png' },
        { name: 'Yahweh Saboath Tee', price: '£29.99', image: '/yahweh%20saboath%20mockup.png' }
      ]
    },
    {
      title: 'Scripture Collection',
      subtitle: 'Wear the Word boldly',
      products: [
        { name: 'The First and The Last Mono Tee', price: '£29.99', image: '/the%20first%20and%20the%20last%20mockup%20black.png' },
        { name: 'The Living God Tee', price: '£29.99', image: '/the%20living%20god%20mockup%20white.png' }
      ]
    }
  ];

  const checkout = () => {
    window.open('https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01', '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-black">
      {/* Hero Section */}
      <section className="px-8 py-24 text-center bg-gradient-to-br from-stone-100 to-amber-50">
        <p className="tracking-[0.3em] uppercase text-sm mb-4">Luxury Christian Streetwear</p>
        <h1 className="text-6xl font-semibold mb-6">King of Kings</h1>
        <p className="max-w-2xl mx-auto text-xl text-neutral-600 mb-8">
          Premium faith-led apparel crafted to make belief visible.
        </p>
        <button onClick={checkout} className="px-8 py-4 rounded-2xl bg-black text-white text-lg shadow-xl hover:bg-gray-800 transition">
          Shop Best Sellers
        </button>
      </section>

      {/* Product Collections */}
      {collections.map((collection, idx) => (
        <section key={idx} className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold">{collection.title}</h2>
            <p className="text-neutral-500 mt-2">{collection.subtitle}</p>
          </div>

          {/* Grid Layout - This creates the 3-column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collection.products.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-stone-100">
                {/* Image Container */}
                <div className="bg-white p-6 flex items-center justify-center min-h-[280px]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-36 h-auto object-contain hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: '144px', height: 'auto' }}
                    onError={(e) => {
                      console.error('Failed to load:', product.image);
                      e.target.src = 'https://via.placeholder.com/144x180?text=Image+Not+Found';
                    }}
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-5 pt-0">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-neutral-400 text-sm mt-1">Premium oversized fit</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <button 
                      onClick={checkout} 
                      className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800 transition-colors"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="rounded-2xl bg-black text-white p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Create Your Own Design</h2>
          <p className="text-neutral-300 mb-6 max-w-lg mx-auto">Personal scripture, declarations, and faith-led typography</p>
          <button onClick={checkout} className="px-6 py-3 rounded-xl bg-white text-black text-base font-medium hover:bg-gray-100 transition">
            Start Custom Design
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
