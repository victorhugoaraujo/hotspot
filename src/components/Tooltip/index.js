import React from 'react';
import './styles.css';

const Tooltip = element => {
return (
  <div className='tooltiptext'
  style={{ top: element.elementItemPositionX, left: element.elementItemPositionY}}>
    <p>{element.tagName}#{element.id}</p>
  </div>
  )
}

export default Tooltip;