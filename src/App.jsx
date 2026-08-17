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
    <div>
      <h1>Open-Media-Project</h1>
      <p>{message}</p>
    </div>
  );
}
