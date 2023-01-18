import React from 'react';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <h1>SPAssssssss!</h1>
      {/* consume components here*/}
      <Home />
      <Animals />
      <Plants />
    </div>
  );
}

export default App;
