import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Logo</p>
        <nav>
          <ul>
            <li>Link fake 1</li>
            <li>Link fake 2</li>
            <li>Link fake 3</li>
            <li>Link fake 4</li>
          </ul>
        </nav>
      </header>

      <div className='container'>
        <button className='btn_hotspot'>Create Hotspot</button>
        <div className='list'>
          <span className='title'>List of hotspots</span>
          <span className='item'>Hotspot#1</span>
        </div>
      <div>

      </div>
      </div>
    </div>
  );
}

export default App;
