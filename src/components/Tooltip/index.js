import React from 'react';
import './styles.css';

const Tooltip = element => {
return (
  <div className='tooltiptext'
  style={{ top: element.elementItemPositionX, left: element.elementItemPositionY}}>
    <p>
      <span className='tagName'>
        {element.tagName}
      </span>
      <span className='element'>
        #{element.id}
      </span>
      </p>
  </div>
  )
}

export default Tooltip;