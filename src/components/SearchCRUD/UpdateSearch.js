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
    <Modal isOpen={true}>
      <ModalHeader>Update</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          
          <FormGroup>
            <Label htmlFor="destination" />
            <Input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description" />
            <Input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name" />
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="attractions" />
            <Input
              type="text"
              name="attractions"
              value={attractions}
              onChange={(e) => setAttractions(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rating" />
            <Input
              type="number"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Update</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default UpdateSearch;
