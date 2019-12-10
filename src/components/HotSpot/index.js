import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '../Tooltip';
import Dot from '../Dot';
import './styles.css';
import classnames from 'classnames'
import { addHotSpotAction, removeHotSpotAction } from '../../redux/actions/hotSpot';

const HotSpot = () => {
  const [hovered, setHovered] = useState();
  const [element, setElement] = useState({});
  const [create, setCreate] = useState(false);

	const dispatch = useDispatch();
	const hotspot = useSelector(state => state.hotSpot);
	console.log(hotspot)

  const handleDispatch = (event) => {
    if(create) {
      dispatch(
        addHotSpotAction({
          id: event.target.id,
          position: {
            x: event.clientX,
            y: event.clientY,
          },
          number: hotspot.length,
        }))
        setCreate(false)
      }
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
      setHovered(
        target.id,
      )
    }  
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
                className={classnames({
                  'hovered': hovered === '1'
                })}
                onClick={(event) => handleDispatch(event)}
                onMouseEnter={event => getElementId(event.target)}
                onMouseLeave={event => setHovered(null)}
              >
                Link fake 1
                
              </a>  
            </li>
            <li>
              <a 
                id='2' 
                href='#'
                data-name='hotspot#2'
                className={classnames({
                  'hovered': hovered === '2'
                })}
                onClick={(event) => handleDispatch(event)}
                onMouseEnter={event => getElementId(event.target)}
                onMouseLeave={event => setHovered(null)}
              >
                Link fake 2
                
              </a> 
            </li>
						<li>
              <a 
                id='3' 
                href='#'
                data-name='hotspot#3'
                className={classnames({
                  'hovered': hovered === '3'
                })}
                  onClick={(event) => handleDispatch(event)}
                  onMouseEnter={event => getElementId(event.target)}
                  onMouseLeave={event => setHovered(null)}
              >
                Link fake 3
              </a> 
            </li>
          </ul>
        </nav>
        
      </header>

      {/* Show hotspot information */}
      <ul className='dotList'>
          {hotspot.map(item => <Dot key={item.number} number={item.number} position={item.position}/>)}
        </ul>

      {hovered && (
        <Tooltip {...element} className='tooltip'></Tooltip>
      )}

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
            {hotspot.map((item, index) => (
              <li key={index} className='item' name={item}>
                <span>
                  {`Hotspot#${item.number}`}
                </span>
                <a href='#' onClick={() => dispatch(
                  removeHotSpotAction(item.number)
                )}>Delete</a>
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
