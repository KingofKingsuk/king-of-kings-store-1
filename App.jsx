function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>King of Kings - Image Test</h1>
      
      <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div>
          <img src="/el elyon 1 mockup white.png" alt="test" style={{ width: '200px' }} />
          <p>el elyon 1 mockup white.png</p>
        </div>
        <div>
          <img src="/King of Kings black silky mockup.png" alt="test" style={{ width: '200px' }} />
          <p>King of Kings black silky mockup.png</p>
        </div>
        <div>
          <img src="/the almighty white mockup.png" alt="test" style={{ width: '200px' }} />
          <p>the almighty white mockup.png</p>
        </div>
      </div>
      
      <p style={{ marginTop: '40px', color: 'red' }}>
        If you don't see images above, there's a Vercel deployment issue.
        <br />
        Try opening: <code>https://king-of-kings-store-1.vercel.app/el%20elyon%201%20mockup%20white.png</code>
      </p>
    </div>
  );
}

export default App;
