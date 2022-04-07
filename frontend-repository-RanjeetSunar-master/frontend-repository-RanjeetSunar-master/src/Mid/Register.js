import { Component } from "react";
import axios from "axios";
import { ThemeConsumer } from "styled-components";

class Register extends Component{
  state = {
    username : '',
    password : '',
    email : ''
  }

  registration=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submit=(e)=>{
    e.preventDefault();
    //send data to our api 
    const data22 = {
      username : this.state.username,
      password : this.state.password,
      email : this.state.email
    }
    console.log(data22)
    axios.post("http://localhost:90/admin/register", data22)
    .then((res)=>{
      alert("Susessfully Registered")
      window.location.href ="/login"

    })
    .catch((err)=>{
      alert('please insert correct value')
      
    })
    
  }

    render(){
        return(
            <section id="three" class="wrapper">
            <div class="inner">
            <div class="login-page">
          <div class="form">
            <div class="login">
              <div class="login-header">
                <h3>SIGN UP</h3>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form class="login-form">
              <input type="text" placeholder="username" name="username"
               value={this.state.username} onChange={this.registration} required/>
              <input type="text" placeholder="mail@gmail.com" name="email"
               value={this.state.email} onChange={this.registration} required/>
              <input type="password" placeholder="password" name="password"
              value={this.state.password} onChange={this.registration} required/>
              <button onClick={this.submit}>SIGN UP</button>
              <p class="message">Already Sign Up <a href="/Login">Login</a></p>
            </form>
          </div>
        </div>
          </div>
          </section>

        )
    }
}

export default Register;