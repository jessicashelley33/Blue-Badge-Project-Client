import React from "react";
import Register from "./Register";
import UserLogin from "./UserLogin";
import { Container, Row, Col } from "reactstrap";

const UserIndex = (props) => {
  return (
    <Container className="container">
      <div 
      style={{
        color: '#fff',
        marginTop: '4em'
      }}>
      <h1>Travel Agency</h1>
      <p>Your Next Destination is Just a Click away</p>
      </div>
      
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Register updateToken={props.updateToken} />
        </Col>

        <Col sm="12" md={{ size: 6, offset: 3 }} className="login-col">
          <UserLogin updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserIndex;
