export default function KingOfKingsHomepage() {
  const collections = [
    {
      title: 'Signature Collection',
      subtitle: 'Luxury typography pieces',
      products: [
        { name: 'ELYON Monogram Tee', price: '£29.99', image: '/images/elyon-1.jpeg' },
        { name: 'The Holy One Gold Foil Tee', price: '£34.99', image: '/images/the-holy-one.png' },
        { name: 'The Almighty Statement Tee', price: '£29.99', image: '/images/the-almighty.png' }
      ]
    },
    {
      title: 'Royal Collection',
      subtitle: 'Crest and kingdom inspired premium wear',
      products: [
        { name: 'King of Kings Crest Luxe Tee', price: '£34.99', image: '/images/king-of-kings-crest.png' },
        { name: 'Lion of Judah Heritage Tee', price: '£34.99', image: '/images/lion-of-judah.png' },
        { name: 'Elyon Noir Tee', price: '£29.99', image: '/images/elyon-2.jpeg' }
      ]
    },
    {
      title: 'Scripture Collection',
      subtitle: 'Wear the Word boldly',
      products: [
        { name: 'The First and The Last Mono Tee', price: '£29.99', image: '/images/the-first-and-the-last-light.jpeg' },
        { name: 'The First and The Last Noir Tee', price: '£29.99', image: '/images/the-first-and-the-last-dark.png' }
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
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    console.error('Failed to load image:', product.image);
                    e.target.src = 'https://via.placeholder.com/400x500?text=Image+Not+Found';
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-neutral-500 mt-1">Premium oversized fit</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <button onClick={checkout} className="px-5 py-3 rounded-xl bg-black text-white">
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
          <button onClick={checkout} className="px-8 py-4 rounded-2xl bg-white text-black text-lg">
            Start Custom Design
          </button>
        </div>
      </section>
    </div>
  );
}
