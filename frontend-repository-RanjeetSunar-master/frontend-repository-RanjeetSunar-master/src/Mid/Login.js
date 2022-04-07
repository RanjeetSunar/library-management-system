import { Component } from "react";
import axios from "axios";
import './login.css'

class Login extends Component{
    state ={
      username : '',
      password : ''
    }
    adddata=(e)=>{
      this.setState({
        [e.target.name] : e.target.value
      })
    }


submit=(e)=>{
  // do not reload the page on clicking the submit button
  e.preventDefault();
  // we need to send username and password to the api
  const loginData ={
    username : this.state.username,
    password : this.state.password
  }

  console.log(loginData)
  axios.post("http://localhost:90/admin/login", loginData )
  .then((res)=>{
    console.log(res.data.token)
    // saves the token so that you can get it anywhere in your website...........
    // the token generated at the backend, is sent to the frontend and now saved in token
    localStorage.setItem('token', res.data.token);
    
    window.location.href ="/Dashboard"
    })
  .catch((err)=>{
    alert('Incorrect Credentials')
    console.log(err)
  })
}
    render(){
        return(
        
          <div class="login-page">
          <div class="form">
            <div class="login">
              <div class="login-header">
                <h3>SIGN IN</h3>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form class="login-form">
              <input type="text" placeholder="username" name='username'
              value={this.state.username}
              onChange={this.adddata} required/>
              <input type="password" placeholder="password" name='password'
              value={this.state.password}
              onChange={this.adddata} required/>
              <button  onClick={this.submit}>SIGN IN</button>
              <p class="message">Not registered? <a href="/Register">Create an account</a></p>
            </form>
          </div>
        </div>
        
       
        )
    }
}

export default Login;