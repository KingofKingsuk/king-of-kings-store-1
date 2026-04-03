import { useState, useEffect } from 'react';

function App() {
  const [imageStatus, setImageStatus] = useState({});

  // Let's test the actual image paths from your public folder
  const testImages = [
    '/kingof kings black modcup.png',
    '/king of kings second modcup.png',
    '/el aleyon 1 modcup.png',
    '/el aleyon white modcup.png',
    '/the way modcup.png',
    '/jesus christ white modcup.png',
    '/faith over fear modcup.png',
    '/the almighty white modcup.png',
    '/light of the world modcup.png'
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
    <div style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1>🔍 Image Diagnostic Test</h1>
      <p>Checking which images are loading from your public folder:</p>
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
        <h3>📝 What to do:</h3>
        <p>1. Look at which images show ❌ MISSING</p>
        <p>2. Go to your GitHub <strong>public</strong> folder</p>
        <p>3. Copy the EXACT filename (including spaces and capitalization)</p>
        <p>4. Share the correct filenames with me</p>
      </div>
    </div>
  );
}

export default App;
