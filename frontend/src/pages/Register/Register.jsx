import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Register.css";

function Register() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmitRegister(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify({
          userName: user.userName,
          email: user.email,
          password: user.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (response.status === 400) {
        setError(data.message ? data.message.split("length").join("") : data);
      }
      console.log(data, "data");
    } catch (err) {
      console.log(err, "err");
    }
    setUser({ userName: "", email: "", password: "" });
  }

  return (
    <div className="register-container">
      <div className="register-form-container">
        <h1 className="register-header">Sign Up</h1>
        <form onSubmit={handleSubmitRegister} className="register-form">
          <div className="register-input-container">
            <label htmlFor="username" className="register-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.userName}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
              className="register-input"
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="email" className="register-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              className="register-input"
            />
          </div>
          <div className="register-input-container">
            <label htmlFor="password" className="register-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              className="register-input"
            />
          </div>
          <div className="register-error-container">
            <span className="register-error">{error && error}</span>
          </div>
          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
        <div className="register-login-link-container">
          <span className="register-login-link-text">
            Already have an account?
          </span>
          <button
            onClick={() => navigate("/login")}
            className="register-login-link"
          >
              Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
