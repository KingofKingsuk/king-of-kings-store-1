import { useEffect, useState } from 'react';

function App() {
  const [imageStatus, setImageStatus] = useState({});

  // Test each image path based on your GitHub files
  const testImages = [
    '/King of Kings black silky mockup.png',
    '/King of Kings mockup.png',
    '/King of Kings secondmockup.png',
    '/The way mockup.png',
    '/christian identity mockup.png',
    '/el eyon 1 mockup white.png',
    '/el eyon 1 mockup.png',
    '/el eyon 2 mockup creme.png',
    '/fath over fear mockup.png',
    '/jesus christ mockup.png',
    '/jesus died for me mockup.png',
    '/no weapon formed mockup.png',
    '/the first and the last mockup - Copy.png',
    '/the holy one mockup.png',
    '/the holy one mockup - Copy.png',
    '/the living god mockup.png',
    '/the prince of peace mockup.png',
    '/the way the truth and the life mockup.png',
    '/time is Running Out mockup.png',
    '/times Running Out mockup.png',
    '/yahweh sabaoth mockup.png'
  ];

  useEffect(() => {
    testImages.forEach(path => {
      const img = new Image();
      img.onload = () => setImageStatus(prev => ({ ...prev, [path]: '✅ LOADS' }));
      img.onerror = () => setImageStatus(prev => ({ ...prev, [path]: '❌ MISSING' }));
      img.src = path;
    });
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'monospace', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Image Diagnostic Test</h1>
      <p>Check which images are loading from your public folder:</p>
      <div style={{ marginTop: '20px' }}>
        {testImages.map(path => (
          <div key={path} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '8px',
            borderBottom: '1px solid #ddd',
            backgroundColor: imageStatus[path] === '✅ LOADS' ? '#d1fae5' : '#fee2e2'
          }}>
            <span>{imageStatus[path] || '⏳'}</span>
            <span style={{ fontSize: '12px', flex: 1 }}>{path}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>To fix this issue:</h3>
        <p>1. Go to your GitHub repository → public folder</p>
        <p>2. Look at the EXACT filenames (spaces, capitals, everything)</p>
        <p>3. Take a screenshot and share it with me</p>
        <p>4. Or tell me what you see - any differences from the list above?</p>
      </div>
    </div>
  );
}

export default App;
