import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Register = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/user/register', {
      method: "POST",

      body: JSON.stringify({ email: userEmail, password: password, firstName:firstName, lastName: lastName, address: address }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };
  return (
    <div>
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            onChange={(e) => setUserEmail(e.target.value)}
            required
            value={userEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </FormGroup>
        <Button type="submit">SignUp</Button>
      </Form>
    </div>
  );
};
export default Register;
