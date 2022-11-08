import './App.css';
import React from 'react';
import Login from './Login.js'
import Signup from './Signup.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "login"
    }

    this.updateData = this.updateData.bind(this);
  }

  updateData(event) {
    if(event.target.id === 'loginRedirect') {
      this.setState({page: "login"})
    } else {
      this.setState({page: "signup"})
    }
  }

  render() {
    if(this.state.page === "login") {
      return (
        <div className='App' style={{
          height: '330px'
        }}>
          <table id='navTable'>
            <tbody>
            <tr id='navbar'>
              <td className='navbar-elements'><button type='submit' id='loginRedirect' className='redirect' onClick={this.updateData}>Login</button></td>
              <td className='navbar-elements'><button type='submit' id='signupRedirect' className='redirect' onClick={this.updateData}>Signup</button></td>
            </tr>
            </tbody>
          </table>
          <Login />
        </div>
      );
    } else {
      return(
        <div className='App' style={{
          height: '480px'
        }}>
          <table id='navTable'>
            <tbody>
            <tr id='navbar'>
              <td className='navbar-elements'><button type='submit' id='loginRedirect' className='redirect' onClick={this.updateData}>Login</button></td>
              <td className='navbar-elements'><button type='submit' id='signupRedirect' className='redirect' onClick={this.updateData}>Signup</button></td>
            </tr>
            </tbody>
          </table>
          <Signup />
        </div>
      );
    }
  }
}

export default App;
