import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Constants } from "../constants/Constants";
import Encryption from "../security/Encryption";
import { Link } from "react-router-dom";
import { ErrorHandler } from "../error/ErrorHandler";
import { Loader } from "../loader/Loader";
import "./Signup.css";

export function Signup() {
  const [fullname, setFullname] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(event: any) {
    if (event.target.type === "text") {
      setFullname(event.target.value);
    }
    if (event.target.type === "password") {
      setPasswordHash(event.target.value);
    }
    if (event.target.type === "email") {
      setEmail(event.target.value);
    }
  }
  function handleSubmit(event: any) {
    setLoading(true);
    signup();
    event.preventDefault();
  }

  async function signup() {
    axios
      .post(Constants.BASE_API_URL + "/signup", {
        fullName: fullname,
        passwordHash: await Encryption(passwordHash),
        email: email,
      })
      .then(
        () => {
          navigate("/login");
        },
        (err) => {
          navigate("/error", {
            state: ErrorHandler.getErrorMessage(err),
          });
        }
      )
      .catch((err) => {
        navigate("/error", {
          state: ErrorHandler.getErrorMessage(err),
        });
      });
  }
  return (
    <div className="Auth-form-container">
      {loading ? (
        <Loader />
      ) : (
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to="/login">
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
