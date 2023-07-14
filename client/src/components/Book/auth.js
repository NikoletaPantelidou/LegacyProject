import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="auth">
      <Login />
    </div>
  );
}
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });

      window.localStorage.setItem("userID", response.data.userID);
      alert("User logged in correctly!");
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
      />

      <p className="register-question">
        Don't you have an account? Please register{" "}
        <Link to={"/register/"}>
          <span className="underline">here!</span>
        </Link>
      </p>
    </div>
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>

        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="log-in-btn" type="submit">
          {label}
        </button>
      </form>
    </div>
  );
};
export default Auth;
