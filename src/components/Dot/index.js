import React, { useState } from 'react';
import './styles.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import SimpleForm from '../SimpleForm';

const Dot = ({number, position}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  console.log(number)
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button 
        id={"Popover-" + number}
        type="span"
        className='dot'
        onClick={toggle}
        // onMouseOver={toggle}
        // onMouseLeave={toggle}
        style={{ top: position.y, left: position.x}}
      >
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target={"Popover-" + number}>
        {/* <PopoverHeader>Popover Title</PopoverHeader> */}
        {/* <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody> */}
        <PopoverBody>
          <SimpleForm number={number}/>
        </PopoverBody>
      </Popover>
    </div>
  );
}


export default Dot;