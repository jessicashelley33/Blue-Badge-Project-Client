import React from "react";
import { Table, Button } from "reactstrap";


const SearchAll = (props) => {
    const deleteDestination = (place) => {
      fetch(`http://localhost:5000/save/${place.id}`, {
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
          <td><Button color="warning" onClick={() => { props.editUpdateDest(place); props.updateOn() }}>Update</Button>
          </td>
          <td><Button color="danger" onClick={() => { deleteDestination(place) }}>Delete</Button></td>
        </tr>
      );
    });
  };
  return (
    <>
      <h3>Saved Places</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Destination</th>
            <th>Name</th>
            <th>Attractions</th>
          </tr>
        </thead>
        <tbody>{Mapper()}</tbody>
      </Table>
    </>
  );
};

export default SearchAll;
