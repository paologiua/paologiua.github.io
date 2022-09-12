import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import PresentationCard from './components/presentation-card/presentation-card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PresentationCard />
    </div>
  );
}

export default App;
