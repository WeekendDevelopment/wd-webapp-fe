import React, { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import Constants from "./Constants";
import Encryption from "./Encryption";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [statusCode, setStatusCode] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    }
    if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    setLoading(true);
    login();
    event.preventDefault();
  };

  async function login() {
    axios
      .post(Constants.BASE_API_URL + "/login", {
        email: email,
        password: await Encryption(password),
      })
      .then(
        (response) => {
          setDataLoaded(true);
          setData(response.data);
          setLoading(false);
          setStatusCode(response.status);
        },
        (err) => {
          if (err.response == null) {
            setDataLoaded(true);
            setData("Failed to Connect");
            setStatusCode(500);
          } else {
            setDataLoaded(true);
            setData(
              "{ status: " +
                err.response.status +
                ",\n message: " +
                err.response.data +
                " }"
            );
            setStatusCode(err.response.status);
          }
        }
      )
      .catch((err) => {
        setDataLoaded(true);
        setData("Failed to connect");
        setStatusCode(500);
      });
  }
  if (dataLoaded) {
    props.handleDataLoad(data, statusCode);
    return <Navigate push to="/home" />;
  }
  return (
    <div className="App" style={{ height: "330px" }}>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
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

export default Signin;
