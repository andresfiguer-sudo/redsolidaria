import { useEffect, useState } from 'react';

export default function Home() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('/seed.json')
      .then(res => res.json())
      .then(data => setCampaigns(data));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Red Solidaria</h1>
      <p>Ayudá a personas en situaciones difíciles.</p>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {campaigns.map((c, i) => (
          <div key={i} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px' }}>
            <h2>{c.title}</h2>
            <p>{c.description}</p>
            <p><b>Meta:</b> ${c.goal}</p>
            <button style={{ background: '#0070f3', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '8px' }}>
              Donar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}