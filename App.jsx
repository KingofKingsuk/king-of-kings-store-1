import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [design, setDesign] = useState('YOUR DESIGN')

  const generateDesign = () => {
    if (!text) return
    setDesign(text.toUpperCase())
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '48px' }}>
        King of Kings
      </h1>

      <p style={{ textAlign: 'center', color: '#999' }}>
        Bold Faith. Worn Loud.
      </p>

      <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        display: 'grid',
        gap: '20px'
      }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your Christian message..."
          style={{
            padding: '15px',
            fontSize: '18px',
            borderRadius: '8px',
            border: 'none'
          }}
        />

        <button
          onClick={generateDesign}
          style={{
            padding: '15px',
            fontSize: '18px',
            background: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          Generate Design
        </button>

        <div style={{
          marginTop: '30px',
          background: '#111',
          padding: '60px',
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: 'bold',
          borderRadius: '20px'
        }}>
          {design}
        </div>
      </div>
    </div>
  )
}
