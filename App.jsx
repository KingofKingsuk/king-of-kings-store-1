import { useState, useEffect } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageStatus, setImageStatus] = useState({});

  // FIRST - Let's test ALL possible image files from your GitHub
  const testImages = [
    'King of Kings black mockup.png.png',
    'King of Kings black silky mockup.png',
    'King of Kings mockup.png',
    'Light of the world mockup.png',
    'The way mockup.png',
    'Time is running mockup.png',
    'Time is running mockup.png.png',
    'christain identity mockup.png',
    'al alyan 1 mockup white.png',
    'al alyan 2 mockup cream.png',
    'fatih over fear mockup.png',
    'god got me mockup.png',
    'Jesus christ mockup.png',
    'Jesus died for me mockup.png',
    'Jesus the way mockup.png',
    'Jesus the way the truth and the life mock up.png',
    'my identity mockup.png',
    'no weapon formed mockup.png',
    'redamned hoodie mockup.png',
    'the almighty white mockup.png',
    'the first and the last mockup black.png',
    'the holy one mockup Gold yellow.png',
    'the fixing god mockup white.png',
    'the prince of peace mockup.png',
    'the way the truth and the life mockup.png',
    'time is burning Out mockup.png.png',
    'yahweh sabbath mockup.png.png'
  ];

  // Test each image on load
  useEffect(() => {
    testImages.forEach(filename => {
      const img = new Image();
      img.onload = () => setImageStatus(prev => ({ ...prev, [filename]: '✅ LOADS' }));
      img.onerror = () => setImageStatus(prev => ({ ...prev, [filename]: '❌ MISSING' }));
      img.src = `/${filename}`;
    });
  }, []);

  const checkout = () => {
    window.open('https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01', '_blank');
  };

  // Count working images
  const workingImages = Object.values(imageStatus).filter(s => s === '✅ LOADS').length;
  const totalImages = testImages.length;

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '48px', textAlign: 'center' }}>King of Kings</h1>
      
      {/* Diagnostic Banner */}
      <div style={{ 
        backgroundColor: workingImages === totalImages ? '#10b981' : '#ef4444', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '12px',
        maxWidth: '800px',
        margin: '20px auto',
        textAlign: 'center'
      }}>
        <h2>Images Working: {workingImages} / {totalImages}</h2>
        {workingImages !== totalImages && <p>Scroll down to see which files are missing!</p>}
      </div>

      {/* List all images and their status */}
      <div style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '12px' }}>
        <h3 style={{ marginBottom: '20px' }}>Image Status Check:</h3>
        {testImages.map((filename, idx) => (
          <div key={idx} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '8px',
            borderBottom: '1px solid #ddd',
            backgroundColor: imageStatus[filename] === '✅ LOADS' ? '#d1fae5' : '#fee2e2'
          }}>
            <span style={{ fontSize: '20px' }}>{imageStatus[filename] === '✅ LOADS' ? '✅' : '❌'}</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', flex: 1 }}>{filename}</span>
            <span style={{ fontSize: '12px', color: imageStatus[filename] === '✅ LOADS' ? 'green' : 'red' }}>{imageStatus[filename]}</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button onClick={checkout} style={{ backgroundColor: 'black', color: 'white', padding: '16px 32px', borderRadius: '32px', fontSize: '18px', border: 'none', cursor: 'pointer' }}>
          Shop Best Sellers
        </button>
      </div>
    </div>
  );
}

export default App;
