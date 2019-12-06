import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '../Tooltip';
import './styles.css';
import { addHotSpotAction } from '../../redux/actions/hotSpot';


const HotSpot = () => {
  const [hotSpot, setHotSpot] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [element, setElement] = useState({});
  const [counter, setCounter] = useState(0);
  const [create, setCreate] = useState(false);

	const dispatch = useDispatch();
	const count = useSelector(state => state.hotSpot);
	console.log(count)

  const addHotSpot = hotSpot => {
		if (create){
			dispatch({
				type: 'ADD_HOTSPOT',
				hotSpot
			})
		}
    // if (create){
    //   setHotSpot([
    //     ...hotSpot,
    //   {
    //     hotSpotId: target.id,
    //     hotSpotItemPosition: counter,
    //   }    
    //   ]);
    //   setCounter(counter => counter + 1);
    // }
    // setCreate(false)
    // return false
  }

  const getElementId = (target) => {
    if (create){
      setElement({
        name: target.getAttribute('data-name'),
        id: target.id,
        tagName: target.localName,
        elementItemPositionX: target.offsetHeight + target.offsetTop,
        elementItemPositionY: target.offsetLeft,
      });
      setShowTooltip(
        true,
      )
    }  
  }

  const handleRemoveHotSpot = (value) => {
    setHotSpot(hotSpot.filter(item => item.hotSpotItemPosition !== value));
  }

  return (
      <div className="App">
      <header className="App-header">
      <p>Logo</p>
        <nav>
          <ul>
            <li>
            <a 
                id='1' 
                href='#'
                data-name='hotspot#1'
                onClick={event => addHotSpot(event.target)}
                onMouseEnter={event => getElementId(event.target)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                Link fake 1
                
              </a> 
            </li>
            <li>
              <a 
                id='2' 
                href='#'
                data-name='hotspot#2'
                onClick={event => addHotSpot(event.target.id)}
								// onClick={event => dispatch({
								// 	type: 'ADD_HOTSPOT',
								// 	hotSpot: event.target.id,
								// })}

                onMouseEnter={event => getElementId(event.target)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                Link fake 2
                
              </a> 
            </li>
						<li>
              <a 
                id='3' 
                href='#'
                data-name='hotspot#3'
                onClick={event => addHotSpot(event.target.id)}
                onMouseEnter={event => getElementId(event.target)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                Link fake 3
              </a> 
            </li>
            {/* <li>
              <a
                href='#'
                id='2'
                data-name='hotspot#2'
                // onMouseEnter={() => setShowTooltip(true)}
                onMouseEnter={event => getElementId(event.target)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                Link fake 2
              </a> 
            </li>
            <li 
              id='3'
              data-name='hotspot#3'
              onMouseEnter={event => getElementId(event.target.getAttribute('data-name'))}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Link fake 3</li>
            <li id='4' ref={hoverRef}>Link fake 4</li> */}
          </ul>
        </nav>
        
      </header>

      <div>{showTooltip && (
          <Tooltip {...element} className='tooltip'></Tooltip>
        )}</div>

      <div className='containerList'>
        <button 
          className='btn_hotspot'
          disabled={create}
          type="button"
          onClick={() => setCreate(true)}
        >
          Create Hotspot
        </button>
          <span className='title'>List of hotspots</span>
          <ul className='list'>
            {[...hotSpot].map((item, index) => (
              <li key={index} className='item' name={item}>
                <span>
                  {`Hotspot#${item.hotSpotItemPosition}`}
                </span>
                <a href='#' onClick={() => handleRemoveHotSpot(item.hotSpotItemPosition)}>Delete</a>
              </li>
            ))}
          </ul>
      <div>

      </div>
      </div>
    </div>
  );
}

export default HotSpot;
