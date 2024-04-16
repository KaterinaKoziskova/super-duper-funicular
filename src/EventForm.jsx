import React, { useState, useEffect } from 'react';

function EventForm({ onAddEvent }) {
  const [nazev, setNazev] = useState('');
  const [datum, setDatum] = useState('');
  const [cas, setCas] = useState('');
  const [popis, setPopis] = useState('');
  const [udalosti, setUdalosti] = useState([]);

  useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      const parsedEvents = JSON.parse(savedEvents);
      setUdalosti(parsedEvents);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nazev || !datum || !cas || !popis) return;
    const novaUdalost = {
      nazev,
      datum,
      cas,
      popis
    };
    const updatedEvents = [...udalosti, novaUdalost];
    setUdalosti(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    onAddEvent(novaUdalost);
    setNazev('');
    setDatum('');
    setCas('');
    setPopis('');
  };

  return (
    <div className="EventForm">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" placeholder="Název události" value={nazev} onChange={(e) => setNazev(e.target.value)} style={{ marginBottom: '10px', padding: '5px' }} />
        <input type="date" value={datum} onChange={(e) => setDatum(e.target.value)} style={{ marginBottom: '10px', padding: '5px' }} />
        <input type="time" value={cas} onChange={(e) => setCas(e.target.value)} style={{ marginBottom: '10px', padding: '5px' }} />
        <textarea placeholder="Popis události" value={popis} onChange={(e) => setPopis(e.target.value)} style={{ marginBottom: '10px', padding: '5px' }} />
        <button type="submit" style={{ padding: '5px', marginBottom: '10px' }}>Přidat událost</button>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {udalosti.map((udalost, index) => (
            <li key={index}>{udalost.nazev} - {udalost.datum} - {udalost.cas}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default EventForm;
