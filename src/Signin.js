import React from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import Constants from "./Constants";
import Encryption from "./Encryption";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      dataLoaded: false,
      statusCode: "",
      data: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    this.setState({
      username:
        event.target.type === "text" ? event.target.value : this.state.username,
      password:
        event.target.type === "password"
          ? event.target.value
          : this.state.password,
    });
  }

  handleSubmit(event) {
    this.login();
    event.preventDefault();
  }

  handleDataLoad(dataObj) {
    this.setState({
      dataLoaded: true,
      data: dataObj,
    });
    console.log(this.state);
  }

  async login() {
    axios
      .post(Constants.BASE_API_URL + "/login", {
        username: this.state.username,
        password: await Encryption.encryptPassword(this.state.password),
      })
      .then(
        (response) => {
          this.setState({
            dataLoaded: true,
            data: response.data,
            statusCode: response.status,
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

  render() {
    if (this.state.dataLoaded) {
      this.props.handleDataLoad(this.state.data, this.state.statusCode);
      return <Navigate push to="/home" />;
    }
    return (
      <div className="App" style={{ height: "330px" }}>
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={this.handleSubmit}>
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
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={this.handleChange}
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
      </div>
    );
  }
}

export default Signin;
