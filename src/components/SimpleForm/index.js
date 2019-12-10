import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addHotSpotInfoAction, createHotSpotAction } from '../../redux/actions/hotSpot';

const SimpleForm = ({number}) => {
  const dispatch = useDispatch();
  const [hotSpotTitle, setHotSpotTitle] = useState('');
  const [hotSpotText, setHotSpotText] = useState('');

  const handleChangeTitle = (event) => {
    setHotSpotTitle(event.value);
  }

  const handleChangeText = (event) => {
    setHotSpotText(event.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addHotSpotInfoAction({
        id: number,
        title: hotSpotTitle,
        text: hotSpotText,
      })
    );
    dispatch(createHotSpotAction(false))
  }
  
  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <FormGroup>
      <Label for="info">HotSpot</Label>
      <Input 
        type="text"
        id="popoverTitle"
        value={hotSpotTitle}
        onChange={event => handleChangeTitle(event.target)}
      />
      </FormGroup>
      <FormGroup>
      <Input 
        type="text"
        id="popoverText"
        value={hotSpotText}
        onChange={event => handleChangeText(event.target)}
      />
      </FormGroup>
      
      <div>
        <Button color="primary">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SimpleForm;
