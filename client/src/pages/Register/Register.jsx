import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { registerWithEmailePassword } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const { state } = useLocation();
    event.preventDefault();
    // handle login logic here
    const { email, password } = event.target;
    registerWithEmailePassword(email.value, password.value);
    setEmail("");
    setPassword("");
    navigate(state?.from ? state?.from?.pathname : "/");
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
