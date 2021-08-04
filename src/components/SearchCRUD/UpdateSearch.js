import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
///////
///////
const UpdateSearch = (props) => {
  const [destination, setDestination] = useState(props.updateDest.destination);
  const [description, setDescription] = useState(props.updateDest.description);
  const [name, setName] = useState(props.updateDest.name);
  const [attractions, setAttractions] = useState(props.updateDest.attractions);
  const [rating, setRating] = useState(props.updateDest.rating);
  const [id, setId] = useState(props.updateDest.id);
  ///////
  //////
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/save/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        destination: destination,
        description: description,
        name: name,
        attractions: attractions,
        rating: rating,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => {
      props.getSaved();
      props.updateOff();
    });
    //   .then((data) => {
    //     console.log(data);
    //     // setDestination(data.destination);
    //     // setDescription(data.description);
    //     // setName(data.name);
    //     // setAttractions(data.attractions);
    //     // setRating(data.rating);
    //       props.savedPlaces();
    //   });
    console.log(id)
  };
  return (
    <Modal isOpen={true} style={{
      margin: '2rem'

    }}>
      <ModalHeader>
        <h3
        style={{
          fontSize: '34px',
          marginLeft: '8.5rem'
          
        }}
        >Update</h3>
        </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          
          <FormGroup
           style={{
            margin: '0.4em',
            
            
          }}
          >
            <Label htmlFor="destination" />
            <Input
            style={{
              textAlign:'center'
            }}
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </FormGroup>
          <FormGroup
           style={{
            margin: '0.4em',
            
          }}
          >
            <Label htmlFor="description" />
            <Input
            style={{
              textAlign:'center'
            }}
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup
          style={{
            margin: '0.4em',
            
          }}
          >
            <Label htmlFor="name" />
            <Input
            style={{
              textAlign:'center'
            }}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup >
          <FormGroup
           style={{
            padding: '0.4em',
            
          }}
          >
            <Label htmlFor="attractions" />
            <Input
            style={{
              textAlign:'center'
            }}
              type="text"
              name="attractions"
              value={attractions}
              onChange={(e) => setAttractions(e.target.value)}
            />
          </FormGroup>
          <FormGroup
           style={{
            margin: '0.4em',
            
          }}
          >
            <Label htmlFor="rating" />
            <Input
            style={{
              textAlign:'center'
            }}
              type="number"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </FormGroup>
          <div className="d-grip gap-2">
          <Button
          style={{
            marginLeft: '5rem',
            padding: '8px 90px ',
            backgroundColor: '#7fbfbf',
            color: '#e7ecee',
            border: 'none',
            borderRadius: '20px',
            fontWeight: '700'
          }}
           variant="outline-secondary" size="lg"
          type="submit">Update</Button>
          </div>
        
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default UpdateSearch;
