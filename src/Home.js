import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    if(this.props.statusCode === 200) {
      return (
        <div>
          <p>{this.props.data}</p>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
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
