import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const { loginWithEmailPass } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
    const { email, password } = event.target;
    loginWithEmailPass(email.value, password.value);
    setEmail("");
    setPassword("");
    navigate(from);
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
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <p>
          don't have an account <Link to="/register">register</Link>
        </p>
        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
