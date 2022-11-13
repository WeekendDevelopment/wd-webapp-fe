import React from "react";
import { Link } from "react-router-dom";

class LoginNavBar extends React.Component {
  render() {
    return (
      <table id="navTable">
        <tbody>
          <tr id="navbar">
            <td className="navbar-elements">
              <Link to="/login">
                <button type="submit" id="loginRedirect" className="redirect">
                  Login
                </button>
              </Link>
            </td>
            <td className="navbar-elements">
              <Link to="/signup">
                <button type="submit" id="signupRedirect" className="redirect">
                  Signup
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default LoginNavBar;
