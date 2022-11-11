import React from "react";
import axios from "axios";
import Constants from "./Constants";
import Encryption from "./Encryption";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      dataLoaded: false,
      data: ""
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
          });
        },
        (err) => {
          if(err.response == null) {
            this.setState({
                dataLoaded: true,
                data:
                  "Failed to Connect",
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
              });
          }
        }
      )
      .catch((err) => {
        this.setState({
          dataLoaded: true,
          data: "Failed to connect",
        });
      });
  }

  render() {
    if (this.state.dataLoaded) {
      this.props.handleDataLoad(this.state.data);
    }
    return (
      <div className="login-container">
        <form className="login">
          <input
            data-ref="loginUsername.container"
            id="loginUsername.container"
            className="textBox"
            type="text"
            placeholder="Enter your Username"
            onChange={this.handleChange}
          />
          <input
            data-ref="loginPassword.container"
            id="loginPassword.container"
            className="textBox"
            type="password"
            placeholder="Enter your Password"
            onChange={this.handleChange}
          />
          <button
            data-ref="loginButton"
            id="loginButton"
            className="button"
            type="submit"
            onClick={this.handleSubmit}
            onSubmit={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
