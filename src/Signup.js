import React, { useState } from "react";
import axios from "axios";
import Constants from "./Constants";
import Encryption from "./Encryption";

import { Navigate, Link } from "react-router-dom";
function Signup(props) {
  const [userId, setUserId] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [email, setEmail] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [statusCode, setStatusCode] = useState("");
  const [data, setData] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    if (event.target.type === "text") {
      setUserId(event.target.value);
    }
    if (event.target.type === "password") {
      setPasswordHash(event.target.value);
    }
    if (event.target.type === "email") {
      setEmail(event.target.value);
    }
  }
  function handleSubmit(event) {
    setLoading(true);
    signup();
    event.preventDefault();
  }

  function matchPassword(event) {
    if (event.target.value === passwordHash) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }

  async function signup() {
    axios
      .post(Constants.BASE_API_URL + "/signup", {
        userId: userId,
        passwordHash: await Encryption(passwordHash),
        email: email,
      })
      .then(
        (response) => {
          setDataLoaded(true);
          setData(response.data);
          setStatusCode(204);
          setLoading(true);
        },
        (err) => {
          if (err.response == null) {
            setDataLoaded(true);
            setData("Failed to connect");
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

  function flagDirty(event) {
    if (event.target.value === "") {
      setConfirmPasswordDirty(false);
    } else {
      setConfirmPasswordDirty(true);
    }
  }

  if (dataLoaded) {
    props.handleDataLoad(data, statusCode);
    return <Navigate push to="/home" />;
  }
  return (
    <div className="Auth-form-container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to="/signin">
                <span id="loginRedirect" className="redirect">
                  Signin
                </span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Signup;
