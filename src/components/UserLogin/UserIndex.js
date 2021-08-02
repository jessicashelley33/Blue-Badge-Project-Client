import React from "react";
import Register from "./Register";
import UserLogin from "./UserLogin";
import { Container, Row, Col } from "reactstrap";

const UserIndex = (props) => {
  return (
    <Container className="container">
      <Row>
        <Col md="6">
          <Register updateToken={props.updateToken} />
        </Col>

        <Col md="6" className="login-col">
          <UserLogin updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserIndex;
