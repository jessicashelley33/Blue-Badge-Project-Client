import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SavedTable = (props) => {

  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [attractions, setAttractions] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/save/create", {
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
    <>
      <h3>Save Destination</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup
        style={{
          padding: '0.4em',
          textAlign: 'center'
        }}
        >
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
         style={{
          padding: '0.4em',
          textAlign: 'center'
        }}
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
        <FormGroup
        
        style={{
          padding: '0.4em',
          textAlign: 'center'
        }}>
          <Label htmlFor="result"></Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup
        
        style={{
          padding: '0.4em',
          textAlign: 'center'
        }}>
          <Label htmlFor="result"></Label>
          <Input
            type="text"
            name="attractions"
            placeholder="Attractions"
            value={attractions}
            onChange={(e) => setAttractions(e.target.value)}
          />
        </FormGroup>
        <FormGroup
        style={{
          padding: '0.4em',
          textAlign: 'center'
        }}>
          <Label htmlFor="rating"></Label>
          <Input
            type="text"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </FormGroup>
        <Button type="Submit">Submit</Button>
      </Form>
    </>
  );
};

export default SavedTable;
