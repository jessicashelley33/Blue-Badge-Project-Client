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
      <h1 className="textHeader"
      style={{
        marginLeft: '-35%',
        marginBottom: '0.7em'
      }}
      >Login</h1>
     
      <Form onSubmit={handleSubmit}
      style={{
        width: '450px'
      }}
      >
      
        <FormGroup>
          <div className="labelSpace">
          <Label
          htmlFor="email">Email</Label>
          </div>
          <Input
          style={{
            textAlign: 'center',
            }}
          placeholder="Enter Email"
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </FormGroup>
        
        <FormGroup>
          <div>
          <Label
          style={{
            marginTop: '1em'
          }}
          htmlFor="password">Password</Label>
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
      
        <Button
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
        className="btn" type="submit">Login</Button>
      </Form>
      
    </div>
  );
};

export default UserLogin;
