import React from "react";
import { Link } from "react-router-dom";
import { SlUser, SlLogout, SlHome } from "react-icons/sl";

class Home extends React.Component {
  render() {
    if (this.props.statusCode != 200) {
      return (
        <div class="home">
          <div class="navbar">
            <Link to="/home">
              <SlHome size={28} />
            </Link>
            <Link to="/profile">
              <SlUser size={28} />
            </Link>
            <Link to="/">
              <SlLogout size={28} />
            </Link>
          </div>

          <div class="homecontent">
            <h1>{this.props.data}</h1>
          </div>
        </div>
      );
    }
    return (
      <div>
        <p>{this.props.data}</p>
        <Link to="/">
          <button type="submit">Go Back to Login</button>
        </Link>
      </div>
    );
  }
}

export default Home;
