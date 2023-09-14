import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

import PropTypes from "prop-types";

import videoBg from "../assets/videoBg.mp4";

const LoginPage = ({ setIsAuth }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const login = () => {
    navigate("/home");
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <Form className="form-bg" onSubmit={login}>
        <Form.Group controlId="username">
          <Form.Label>User name</Form.Label>
          <Form.Control
            value={user.username}
            onChange={handleUser}
            required
            type="text"
            placeholder="username"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={user.password}
            onChange={handleUser}
            required
            type="password"
            placeholder="password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button className="mt-3" type="submit" onClick={login}>
          Submit Form
        </Button>
        <div className="log">
          <h4>Login: rustam</h4>
          <h4> Password: 2005</h4>
        </div>
      </Form>
    </div>
  );
};

LoginPage.propTypes = {
  setIsAuth: PropTypes.func,
};

export default LoginPage;
