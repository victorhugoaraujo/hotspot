import React, {useState, useEffect} from 'react';
// import Tooltip from './components/Tooltip';
import useHover from './components/Hooks/use-hover';
import './App.css';

function App() {
  const [hotSpot, setHotSpot] = useState([]);
  const [hoverRef] = useHover();

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

  const getElementId = (event) => {

  }

  const handleRemoveHotSpot = (name) => {
    setHotSpot(hotSpot.filter(item => item !== name));
  }

  console.log(hotSpot)
  return (
      <div className="App">
      <header className="App-header">
      <p>Logo</p>
        <nav>
          <ul>
            <li>
              <a href='#' id='1' onFocus={event => addHotSpot(event.target)}>
                Link fake 1
                
              </a> 
            </li>
            <li>
              <a href='#' id='2' ref={hoverRef}>
                Link fake 2
                {/* <Tooltip elementId={} /> */}
              </a> 
            </li>
            <li id='3'>Link fake 3</li>
            <li id='4'>Link fake 4</li>
          </ul>
        </nav>
      </header>

      <div className='containerList'>
        <button 
          className='btn_hotspot'
          onClick={() => handleCreateHotSpot()}
        >
          Create Hotspot
        </button>
          <span className='title'>List of hotspots</span>
          <ul className='list'>
            {[...hotSpot].map((item, index) => (
              <li key={index} className='item' name={item}>
                <span>
                  {`Hotspot#${item}`}
                </span>
                <a href='#' onClick={() => handleRemoveHotSpot(item)}>Delete</a>
              </li>
            ))}
          </ul>
      <div>

      </div>
      </div>
    </div>
  );
}

export default App;
