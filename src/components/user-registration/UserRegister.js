import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

function UserRegistration() {
  const [username, setUsername] = useState("");
  const [UserAddress, SetUserAdress] = useState("");
  const [Password, SetPassword] = useState("");
  function clearInput() {
    setUsername("");
    SetUserAdress("");
    SetPassword("");
  }
  async function userpost() {
    const userDetails = {
      username: username,
      email: UserAddress,
      password: Password,
    };
    console.log(userDetails);
    await axios.post('http://localhost:5000/user-register', userDetails)
    .then(()=>{
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
      clearInput();
    }).catch((err)=>{
      swal({
        title: "Error!",
        text:`${err}!`,
        icon: "warning",
        button: "Aww yiss!",
      });
    });
  }
  return (
    <div>
      <Container style={{ margin: "7%" }}>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={UserAddress} onChange={(e) => SetUserAdress(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={Password} onChange={(e) => SetPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" onClick={userpost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UserRegistration;