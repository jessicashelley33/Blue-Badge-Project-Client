import React, { useState, useEffect } from "react";
import SavedTable from "./SaveSearch";
import OpenMap from "../SearchApi/TravelAPI";
import SearchAll from "./SearchAll";
import UpdateSearch from "./UpdateSearch";
import { Container, Row, Col } from "reactstrap";

const SearchIndex = (props) => {
  const [places, setPlaces] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [updateDest, setUpdateDest] = useState({});

  const getSaved = () => {
    fetch("http://localhost:5000/save/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData.save);
        setPlaces(logData.save);
      });
  };
  const editUpdateDest = (place) => {
    setUpdateDest(place);
    console.log(place);
  };
  const updateOn = () => {
    setUpdateActive(true);
  };
  const updateOff = () => {
    setUpdateActive(false);
  };
  useEffect(() => {
    getSaved();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="4">
          <SavedTable getSaved={getSaved} token={props.token} />
        </Col>
        <Col md="4">
          <SearchAll
            places={places}
            getSaved={getSaved}
            updateOn={updateOn}
            editUpdateDest={editUpdateDest}
            token={props.token}
          />
        </Col>
        <Col md="4">
          {updateActive ? (
            <UpdateSearch
            updateDest={updateDest}
              updateOff={updateOff}
              getSaved={getSaved}
              token={props.token}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Col>
        <OpenMap />
      </Col>

    </Container>
  );
};

export default SearchIndex;
