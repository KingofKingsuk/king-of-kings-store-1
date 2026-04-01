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
      <section className="px-8 py-24 text-center bg-gradient-to-br from-stone-100 to-amber-50">
        <p className="tracking-[0.3em] uppercase text-sm mb-4">Luxury Christian Streetwear</p>
        <h1 className="text-6xl font-semibold mb-6">King of Kings</h1>
        <p className="max-w-2xl mx-auto text-xl text-neutral-600 mb-8">
          Premium faith-led apparel crafted to make belief visible.
        </p>
        <button onClick={checkout} className="px-8 py-4 rounded-2xl bg-black text-white text-lg shadow-xl">
          Shop Best Sellers
        </button>
      </section>

      {collections.map((collection, idx) => (
        <section key={idx} className="max-w-7xl mx-auto px-8 py-16">
          <div className="mb-8">
            <h2 className="text-4xl font-semibold">{collection.title}</h2>
            <p className="text-neutral-500 mt-2">{collection.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collection.products.map((product, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100">
                {/* Fixed container size for consistent product images */}
                <div className="w-full flex items-center justify-center bg-gray-50 p-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-40 h-auto object-contain"  // 40 = 2.5 inches approx (40*4px = 160px ≈ 1.67 inches)
                    style={{ maxWidth: '160px', height: 'auto' }}
                    onError={(e) => {
                      console.error('Failed to load:', product.image);
                      e.target.src = 'https://via.placeholder.com/160x200?text=Image+Not+Found';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-neutral-500 mt-1">Premium quality • Oversized fit</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <button onClick={checkout} className="px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="rounded-3xl bg-black text-white p-12 text-center">
          <h2 className="text-4xl font-semibold mb-4">Create Your Own Design</h2>
          <p className="text-neutral-300 mb-8">Personal scripture, declarations, and faith-led typography</p>
          <button onClick={checkout} className="px-8 py-4 rounded-2xl bg-white text-black text-lg hover:bg-gray-100 transition">
            Start Custom Design
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
