import React, { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Connecting to Java backend...');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Error fetching backend:', err);
        setMessage('Failed to connect to backend.');
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Open-Media-Project</h1>
      <p style={{ fontSize: '1.2rem', color: '#0070f3' }}>{message}</p>
    </div>
  );
}
