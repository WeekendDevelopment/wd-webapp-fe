import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
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
