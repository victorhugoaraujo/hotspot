import React, { useState } from 'react';
import './styles.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Dot = ({number, position}) => {
  console.log(position)
  console.log(number)
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button 
        id={"Popover-" + number}
        type="span"
        className='dot'
        onMouseOver={toggle}
        onMouseLeave={toggle}
        style={{ top: position[1], left: position[0]}}
      >
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target={"Popover-" + number}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
    </div>
  );
}

export default Dot;