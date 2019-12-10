import React, { useState } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import SimpleForm from '../SimpleForm';

const Dot = ({number, position}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const creating = useSelector(state => state.createHotSpot.creating);
  const hotspot = useSelector(state => state.hotSpot);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Button 
        id={"Popover-" + number}
        className='dot'
        onClick={toggle}
        onMouseOver={!creating ? toggle : null}
        onMouseLeave={!creating ? toggle : null}
        style={{ top: position.y, left: position.x}}
      >
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target={"Popover-" + number}>
        <PopoverBody>
          {creating
            ? <SimpleForm number={number}/>
            : hotspot.filter(item => item.number === number).map(item => 
            <div key={item.number}>
              <h1 className='popoverTitle'>{item.title}</h1>
              <p className='popoverText'>{item.text}</p>
            </div>)
          }
        </PopoverBody>
      </Popover>
    </>
  );
}


export default Dot;