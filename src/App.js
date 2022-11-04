import './App.css';
import React from 'react';
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      dataLoaded: false,
      data: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.type === 'text' ? event.target.value : this.state.username,
      password: event.target.type === 'password' ? event.target.value : this.state.password
    });
  }

  handleSubmit(event) {
    console.log('Form was submitted: ' + this.state.username + " and " + this.state.password);
    this.login()
    event.preventDefault()
  }

  login() {
    axios.post('/api/login', {
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      this.setState({
        dataLoaded: true,
        data: response.data
      })
    }, (err) => {
      this.setState({
        dataLoaded: true,
        data: "{ status: " + err.response.status + ",\n message: " + err.response.data +" }"
      })
    })
  }

  render() {
    if(this.state.dataLoaded) {
      return (
        <p>{this.state.data}</p>
      );
    }
    return (
      <div className="App">
        <form className='login'>
          <input data-ref="loginUsername.container" className='textBox' type="text" placeholder='Enter your Email' onChange={this.handleChange} />
          <input data-ref="loginPassword.container" className='textBox' type="password" placeholder='Enter your Password' onChange={this.handleChange} />
          <button data-ref="loginButton" className='button' type='submit' onClick={this.handleSubmit} onSubmit={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

export default App;
