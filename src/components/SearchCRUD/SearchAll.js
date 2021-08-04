import React from "react";
import { Table, Button, Container } from "reactstrap";
import APIURL from '../../helpers/environment'


const SearchAll = (props) => {
    const deleteDestination = (place) => {
      fetch(`${APIURL}/save/${place.id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application.json",
          Authorization: props.token,
        }),
      }).then(() => {
          props.getSaved();
      });
    };
  const Mapper = () => {
    return props.places.map((place, index) => {
      return (
        <tr key={index}>
          <th scope="row">{place.id}</th>
          <td>{place.rating}</td>
          <td>{place.description}</td>
          <td>{place.destination}</td>
          <td>{place.name}</td>
          <td>{place.attractions}</td>
          <td><Button  
          style={{
            marginTop: '1.9em',
            padding: '10px 50px',
            fontSize:'18px',
            backgroundColor: '#7fbfbf',
            color: '#e7ecee',
            border: 'none',
            borderRadius: '20px',
            fontWeight: '700'
          }}
          onClick={() => { props.editUpdateDest(place); props.updateOn() }}>Update</Button>
          </td>
          <td><Button 
          style={{
            marginTop: '1.9em',
            padding: '10px 50px',
            fontSize:'18px',
            backgroundColor: '#7fbfbf',
            color: '#e7ecee',
            border: 'none',
            borderRadius: '20px',
            fontWeight: '700'
          }}
          onClick={() => { deleteDestination(place) }}>Delete</Button></td>
        </tr>
      );
    });
  };
  return (
    <Container>
      <h3 
      style={{
        color: '#fff'
      }}
      >Saved Places</h3>
      <hr />
      <Table striped
      size="sm">
        <thead>
          <tr>
            <th >#</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Destination</th>
            <th>Name</th>
            <th
            >Attractions</th>
          </tr>
        </thead>
        <tbody>{Mapper()}</tbody>
      </Table>
    </Container>
  );
};

export default SearchAll;
