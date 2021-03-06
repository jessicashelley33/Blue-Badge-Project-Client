import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import APIURL from '../../helpers/environment'

const SavedTable = (props) => {

  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [attractions, setAttractions] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/save/create`, {
      method: "POST",
      body: JSON.stringify({
        destination:destination,
        description:description,
        name:name,
        attractions:attractions,
        rating:rating,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDestination("");
        setDescription("");
        setName("");
        setAttractions("");
        setRating("");
        props.getSaved();
      });
  };

  return (
    <Container>
      <h3
      style={{
        color: '#fff'
      }}
      >Save Destination</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="destination"></Label>
          <Input
          type="text"
            name="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
          </Input>
        </FormGroup>
        <FormGroup
        
        >
          <Label htmlFor="description"></Label>
          <Input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="result"></Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="result"></Label>
          <Input
            type="text"
            name="attractions"
            placeholder="Attractions"
            value={attractions}
            onChange={(e) => setAttractions(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="rating"></Label>
          <Input
            type="text"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </FormGroup>
        <Button
         style={{
          marginTop: '0.9em',
          padding: '8px 90px ',
          backgroundColor: '#7fbfbf',
          color: '#e7ecee',
          border: 'none',
          borderRadius: '20px',
          fontWeight: '700'
        }}
        type="Submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default SavedTable;
