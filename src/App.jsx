import React, { useState } from 'react';
import './App.css';
import EventForm from './EventForm';

function App() {
  const [udalosti, setUdalosti] = useState([]);

  const handleAddEvent = (novaUdalost) => {
    setUdalosti([...udalosti, novaUdalost]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kalendář</h1>
        <EventForm onAddEvent={handleAddEvent} />
      </header>
    </div>
  );
}

export default App;
