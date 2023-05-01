import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="login-page d-flex align-items-center justify-content-center"
    >
      <Form
        style={{ background: "lightgray" }}
        className="p-3"
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p>
          alrady have an account <Link to="/login">Log in</Link>
        </p>
        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
