import "./App.css";
import React from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Profile from "./Profile.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "login",
      dataLoaded: false,
      data: "",
    };

    this.updateData = this.updateData.bind(this);
    this.handleDataLoad = this.handleDataLoad.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  updateData(event) {
    if (event.target.id === "loginRedirect") {
      this.setState({ page: "login" });
    } else {
      this.setState({ page: "signup" });
    }
  }

  handleDataLoad(dataObj) {
    this.setState({
      dataLoaded: true,
      data: dataObj,
    });
  }

  goHome(event) {
    this.setState({
      dataLoaded: false
    });
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <div>
          <p>{this.state.data}</p>
          <button type="submit" onClick={this.goHome}>Home</button>
        </div>
      );
    }
    if (this.state.page === "login") {
      return (
        <div
          className="App"
          style={{
            height: "330px",
          }}
        >
          <table id="navTable">
            <tbody>
              <tr id="navbar">
                <td className="navbar-elements">
                  <button
                    type="submit"
                    id="loginRedirect"
                    className="redirect"
                    onClick={this.updateData}
                  >
                    Login
                  </button>
                </td>
                <td className="navbar-elements">
                  <button
                    type="submit"
                    id="signupRedirect"
                    className="redirect"
                    onClick={this.updateData}
                  >
                    Signup
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Login handleDataLoad={this.handleDataLoad.bind(this)} />
        </div>
      );
    } 
    else if (this.state.page === "signup") {
      return (
        <div
          className="App"
          style={{
            height: "480px",
          }}
        >
          <table id="navTable">
            <tbody>
              <tr id="navbar">
                <td className="navbar-elements">
                  <button
                    type="submit"
                    id="loginRedirect"
                    className="redirect"
                    onClick={this.updateData}
                  >
                    Login
                  </button>
                </td>
                <td className="navbar-elements">
                  <button
                    type="submit"
                    id="signupRedirect"
                    className="redirect"
                    onClick={this.updateData}
                  >
                    Signup
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Signup handleDataLoad={this.handleDataLoad.bind(this)} />
        </div>
      );
    }
    else if (this.state.page === "profile") {
      return (
        <div
          className="App"
          style={{
            height: "480px",
          }}
        >
        <Profile handleDataLoad={this.handleDataLoad.bind(this)} />  
        </div>  
      );    
    }
  }
}

export default App;
