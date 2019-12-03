import React, {useState} from 'react';
import './App.css';

function App() {
  const [hotSpot, setHotSpot] = useState([]);
  const [createHotSpot, setCreateHotSpot] = useState('');

  const handleCreateHotSpot = () => {
    console.log('ola hotspot');
    // onMouseOver();
  }

  const addHotSpot = (event) => {
    console.log(event.id);
    setHotSpot([
      ...hotSpot,
      event.id
    ]);
  }

  console.log(hotSpot)
  return (
      <div className="App">
      <header className="App-header">
      <p>Logo</p>
        <nav>
          <ul>
            <li>
              <a href='#' id='link1' onFocus={event => addHotSpot(event.target)}>
                Link fake 1
              </a> 
            </li>
            <li>
              <a href='#' id='link2' onMouseOver={event => addHotSpot(event.target)}>
                Link fake 2
              </a> 
            </li>
            <li id='link3'>Link fake 3</li>
            <li id='link4'>Link fake 4</li>
          </ul>
        </nav>
      </header>

      <div className='container'>
        <button 
          className='btn_hotspot'
          onClick={() => handleCreateHotSpot()}
        >
          Create Hotspot
        </button>
          <span className='title'>List of hotspots</span>
        <ul className='list'>
          {[...hotSpot].map((item, index) => (
            <li key={index} className='item'>{item}</li>
          ))}
        </ul>
      <div>

      </div>
      </div>
    </div>
  );
}

export default App;
