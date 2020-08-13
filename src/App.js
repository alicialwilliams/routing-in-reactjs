import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome.js';
import Clock from './components/clock/Clock.js';
import Contact from './components/contact/Contact.js'

function App() {
  return (
    <div className="App">
      <Welcome name="Alicia" />
      <Clock />
      <Contact />
    </div>
  );
}

export default App;