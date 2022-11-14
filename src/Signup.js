import React from "react";
import axios from "axios";
import Constants from "./Constants";
import Encryption from "./Encryption";

import { Navigate, Link } from "react-router-dom";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      passwordHash: "",
      email: "",
      dataLoaded: false,
      data: "",
      statusCode: "",
      passwordMatch: false,
      confirmPasswordDirty: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.matchPassword = this.matchPassword.bind(this);
    this.signup = this.signup.bind(this);
    this.flagDirty = this.flagDirty.bind(this);
  }

  handleChange(event) {
    this.setState({
      userId:
        event.target.type === "text" ? event.target.value : this.state.userId,
      passwordHash:
        event.target.type === "password"
          ? event.target.value
          : this.state.passwordHash,
      email:
        event.target.type === "email" ? event.target.value : this.state.email,
    });
  }

  handleSubmit(event) {
    this.signup();
    event.preventDefault();
  }

  matchPassword(event) {
    if (event.target.value === this.state.passwordHash) {
      this.setState({
        passwordMatch: true,
      });
    } else {
      this.setState({
        passwordMatch: false,
      });
    }
  }

  async signup() {
    axios
      .post(Constants.BASE_API_URL + "/signup", {
        userId: this.state.userId,
        passwordHash: await Encryption.encryptPassword(this.state.passwordHash),
        email: this.state.email,
      })
      .then(
        (response) => {
          this.setState({
            dataLoaded: true,
            data: response.data,
            statusCode: 204,
          });
        },
        (err) => {
          if (err.response == null) {
            this.setState({
              dataLoaded: true,
              data: "Failed to Connect",
              statusCode: 500,
            });
          } else {
            this.setState({
              dataLoaded: true,
              data:
                "{ status: " +
                err.response.status +
                ",\n message: " +
                err.response.data +
                " }",
              statusCode: err.response.status,
            });
          }
        }
      )
      .catch((err) => {
        this.setState({
          dataLoaded: true,
          data: "Failed to connect",
          statusCode: 500,
        });
      });
  }

  flagDirty(event) {
    if (event.target.value === "") {
      this.setState({
        confirmPasswordDirty: false,
      });
    } else {
      this.setState({
        confirmPasswordDirty: true,
      });
    }
  }

  render() {
    if (this.state.dataLoaded) {
      this.props.handleDataLoad(this.state.data, this.state.statusCode);
      return <Navigate push to="/home" />;
    }
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
