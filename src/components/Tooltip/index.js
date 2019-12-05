import React from 'react';
import './styles.css';

const Tooltip = element => {
return (<h1 style={{position: 'absolute', top: element.elementItemPositionX, left: element.elementItemPositionY}}>ola{element.name} {element.id}</h1>)
}

export default Tooltip;