import React, { useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  const [preview, setPreview] = useState('KING OF KINGS')

  const products = [
    { id: 1, name: 'JESUS IS KING', price: '£24.99' },
    { id: 2, name: 'FAITH OVER FEAR', price: '£24.99' },
    { id: 3, name: 'CHILD OF GOD', price: '£29.99' }
  ]

  const generate = () => {
    if (!message) return
    setPreview(message.toUpperCase())
  }

  const checkout = () => {
    window.open('https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01', '_blank')
  }

  return (
    <div style={{ background: 'linear-gradient(180deg,#000 0%, #111 100%)', minHeight: '100vh', color: '#fff', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '48px' }}>King of Kings</h1>
      <p style={{ textAlign: 'center', color: '#aaa' }}>Bold Faith. Worn Loud.</p>

      <div style={{ maxWidth: '900px', margin: '40px auto' }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          style={{ width: '100%', padding: '15px', fontSize: '18px', borderRadius: '10px' }}
        />

        <button onClick={generate} style={{ marginTop: '20px', width: '100%', padding: '15px', fontSize: '18px', borderRadius: '10px', border: 'none' }}>
          Generate Design
        </button>

        <button onClick={checkout} style={{ marginTop: '20px', width: '100%', padding: '15px', fontSize: '18px', background: '#fff', color: '#000', borderRadius: '10px', border: 'none' }}>
          Buy Now • Secure Checkout
        </button>

        <div style={{ marginTop: '40px', padding: '80px', background: '#111', textAlign: 'center', fontSize: '36px', fontWeight: 'bold', borderRadius: '18px' }}>
          {preview}
        </div>

        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Featured Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {products.map((product) => (
              <div key={product.id} style={{ background: '#111', padding: '25px', borderRadius: '18px' }}>
                <div style={{ height: '180px', background: '#000', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {product.name}
                </div>
                <p style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={checkout} style={{ width: '100%', padding: '12px', marginTop: '10px', borderRadius: '10px', border: 'none' }}>
                  Buy with Stripe
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

          
