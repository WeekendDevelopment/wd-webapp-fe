import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Constants } from "../constants/Constants";
import Encryption from "../security/Encryption";
import { Loader } from "../loader/Loader";
import { ErrorHandler } from "../error/ErrorHandler";
import "./Login.css";
import { LoginRequest } from "./LoginRequest";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    }
    if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event: any) => {
    setLoading(true);
    login();
    event.preventDefault();
  };

  async function login() {
    let loginRequest: LoginRequest = new LoginRequest()
      .setEmail(email)
      .setPassword(await Encryption(password));
    axios
      .post(Constants.BASE_API_URL + "/login", loginRequest)
      .then(
        (response) => {
          window.sessionStorage.setItem(
            "access-token",
            response.data.signedJwtToken
          );
          window.sessionStorage.setItem("user-email", email);
          navigate("/home", {
            state: response,
          });
        },
        (err) => {
          navigate("/error", {
            state: ErrorHandler.getErrorMessage(err),
          });
        }
      )
      .catch((err) => {
        navigate("/error", {
          state: "Failed to Connect",
        });
      });
  }
  return (
    <div className="App" style={{ height: "330px" }}>
      {loading ? (
        <Loader />
      ) : (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <Link to="/signup">
                  <span id="loginRedirect" className="redirect">
                    Signup
                  </span>
                </Link>
              </div>
              <div className="form-group mt-3">
                <label>Email ID</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                <a href="./youtube.com">Forgot password?</a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
