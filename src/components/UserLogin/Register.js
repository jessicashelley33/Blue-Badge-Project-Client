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
    <div className="wrapper">
      <h1 className="textHeader">SignUp</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <div>
          <Label htmlFor="email">Email</Label>
          </div>
          <Input
          style={{
            textAlign: 'center'
          }}
           placeholder="Enter Email"
          className="inputValue"
            type="text"
            onChange={(e) => setUserEmail(e.target.value)}
            required
            value={userEmail}
          />
        </FormGroup>
        <FormGroup
        
        style={{
          margin:'1rem'
        }}>
        <div>
        <Label htmlFor="password">Password</Label>
            </div>
          
          <Input
          style={{
            textAlign: 'center'
          }}
           placeholder="MyPassword2021"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <FormGroup
        style={{
          margin:'1rem'
        }}>
        <div>
        <Label htmlFor="firstName">First Name</Label>
            </div>
          
          <Input
          style={{
            textAlign: 'center'
          }}
           placeholder="John"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </FormGroup>
        <FormGroup
        style={{
          margin:'1rem'
        }}
        >
        <div>
        <Label htmlFor="lastName">Last Name</Label>
            </div>
          
          <Input
          style={{
            textAlign: 'center'
          }}
           placeholder="Smith"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </FormGroup>
        <FormGroup
        style={{
          margin:'1rem'
        }}
        >
        <div>
        <Label htmlFor="address">Address</Label>
            </div>
           <Input
           style={{
            textAlign: 'center'
          }}
          placeholder="3568 Lee Way"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </FormGroup>
        <Button type="submit"
        className="btn"
        >SignUp</Button>
      </Form>
    </div>
  );
};
export default Register;
