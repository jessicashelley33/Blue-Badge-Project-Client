import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from '../../helpers/environment'

const Register = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/user/register`, {
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
      <h1 className="textHeader"
      style={{
        marginLeft: '-35%',
        marginBottom: '0.7em'
      }}
      >SignUp</h1>
      <Form onSubmit={handleSubmit}
      style={{
        width: '450px'
      }}
      >
        <FormGroup>
          <div>
          <Label htmlFor="email">Email</Label>
          </div>
          <Input
          style={{
            textAlign: 'center',
            width: '425px'
          }}
           placeholder="Enter Email"
          
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
        type="submit"
        >SignUp</Button>
      </Form>
    </div>
  );
};
export default Register;
