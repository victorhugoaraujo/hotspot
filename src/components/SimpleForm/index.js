import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addHotSpotInfoAction } from '../../redux/actions/hotSpot';



const SimpleForm = ({props, number}) => {
  const dispatch = useDispatch();
  const hotspot = useSelector(state => state.hotSpot);

  console.log(number)

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
    )
    console.log(hotSpotTitle);
    console.log(hotSpotText);
  }
  
  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <FormGroup>
      <Label for="first_name">First Name</Label>
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
        <Button color="primary" 
        // disabled={pristine || submitting}
        >
          Submit
        </Button>{" "}
        <Button
          color="primary"
          // disabled={pristine || submitting}
          // onClick={reset}
        >
          Clear
        </Button>
      </div>
    </Form>
  );
};

// const WrappedForm = reduxForm({
//   form: "simple" // a unique identifier for this form
// })(SimpleForm);

// const mapStateToProps = state => ({
//   initialValues: {
//     firstName: "My name"
//   }
// });

export default SimpleForm;
