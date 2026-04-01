import React, { useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  const [preview, setPreview] = useState('KING OF KINGS')

  const generate = () => {
    if (!message) return
    setPreview(message.toUpperCase())
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '48px' }}>King of Kings</h1>
      <p style={{ textAlign: 'center', color: '#aaa' }}>Bold Faith. Worn Loud.</p>

      <div style={{ maxWidth: '600px', margin: '40px auto' }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          style={{ width: '100%', padding: '15px', fontSize: '18px' }}
        />

        <button
          onClick={generate}
          style={{ marginTop: '20px', width: '100%', padding: '15px', fontSize: '18px' }}
        >
          Generate Design
        </button>

        <div
          style={{
            marginTop: '40px',
            padding: '80px',
            background: '#111',
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold'
          }}
        >
          {preview}
        </div>
      </div>
    </div>
  )
}

          
