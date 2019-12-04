import React, {useState, useEffect} from 'react';
import Tooltip from './components/Tooltip';
import useHover from './components/Hooks/use-hover';
import './App.css';

function App() {
  const [hotSpot, setHotSpot] = useState([]);
  // const [hoverRef] = useHover();
  const [element, setElement] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

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
    setHotSpot([
      ...setElement,
      event.id
    ]);
  }

  const handleRemoveHotSpot = (name) => {
    setHotSpot(hotSpot.filter(item => item !== name));
  }

  handleMouseEnter = (index) => {
    document.getElementById(`group-${index}`).classList.add('show');
  }

  handleMouseLeave = (index) => {
    document.getElementById(`group-${index}`).classList.remove('show');
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
              <a
                href='#'
                id='2'
                // onMouseEnter={() => setShowTooltip(true)}
                onMouseEnter={event => getElementId(event.target)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                Link fake 2
              </a> 
            </li>
            <li id='3'>Link fake 3</li>
            <li id='4'>Link fake 4</li>
          </ul>
        </nav>
        {showTooltip && (
          <Tooltip element={...element} />
        )}
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
