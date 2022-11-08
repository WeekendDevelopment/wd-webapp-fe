import React from "react";
import axios from "axios";
import bcrypt from "bcryptjs"

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      passwordHash: "",
      email: "",
      dataLoaded: false,
      data: "",
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

  signup() {
    const BASE_API_URL = "https://e-paratext-367610.el.r.appspot.com";
    axios
      .post(BASE_API_URL + "/signup", {
        userId: this.state.userId,
        passwordHash: bcrypt.hashSync(this.state.passwordHash),
        email: this.state.email
      })
      .then(
        (response) => {
          this.setState({
            dataLoaded: true,
            data: response.data,
          });
        },
        (err) => {
          if (err.response == null) {
            this.setState({
              dataLoaded: true,
              data: "Failed to Connect",
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
      this.props.handleDataLoad(this.state.data);
    }
    return (
      <div className="login-container">
        <form className="login">
          <input
            data-ref="loginUsername.container"
            className="textBox"
            type="text"
            placeholder="Enter your username"
            onChange={this.handleChange}
          />
          <input
            data-ref="loginEmail.container"
            className="textBox"
            type="email"
            placeholder="Enter your Email"
            onChange={this.handleChange}
          />
          <input
            data-ref="loginPassword.container"
            className="textBox"
            type="password"
            placeholder="Enter your Password"
            onChange={this.handleChange}
          />
          <input
            data-ref="confirmPassword.container"
            className="textBox"
            type="password"
            placeholder="Confirm your Password"
            style={{
              borderColor: this.state.confirmPasswordDirty ? this.state.passwordMatch ? 'royalblue' : 'red' : 'gray'
            }}
            onKeyUp={this.flagDirty}
            onChange={this.matchPassword}
          />
          <button
            data-ref="signupButton"
            className="button"
            type="submit"
            onClick={this.handleSubmit}
            onSubmit={this.handleSubmit}
            disabled={!this.state.passwordMatch}
            style={{
                backgroundColor: this.state.passwordMatch ? 'royalblue' : 'grey',
                cursor: this.state.passwordMatch ? 'pointer' : 'not-allowed'
            }}
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
