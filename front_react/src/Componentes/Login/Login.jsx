import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";



const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (credentials) => {
    const {data} = await axios.post(
        process.env.REACT_APP_BACK + "api/login",
      credentials
    )
    console.log(data);
    setToken(data);
  };

  const handleSubmit = async (elem) => {
    elem.preventDefault();
    await loginUser({
      username,
      password,
    });

  };

  return (
    <header className="py-5">
      <Container className="bg-light rounded-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="input"
              placeholder="Ingresa tu Usuario"
              onChange={(elem) => setUserName(elem.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(elem) => setPassword(elem.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Container>
    </header>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
