import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './css/user.css'



const UserLogin= (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/login", {
      method: "POST",

      body: JSON.stringify({ email: userEmail, password: password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        props.updateToken(json.sessionToken);
      });
  };

  return (
    <div className="wrapper">
      <h1 className="textHeader">Login</h1>
     
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <div className="labelSpace">
          <Label
          style={{
           
           
          }}
          htmlFor="email">Email</Label>
          </div>
          <Input
          style={{
            textAlign: 'center'
          }}
          placeholder="Enter Email"
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </FormGroup>
        
        <FormGroup
        style={{
          margin:'1.5rem'
        }}
        
        >
          <div>
          <Label htmlFor="password">Password</Label>
          </div>
          <Input
          style={{
            textAlign: 'center'
          }}
          placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
      
        <Button className="btn" type="submit">Login</Button>
      </Form>
      
    </div>
  );
};

export default UserLogin;
