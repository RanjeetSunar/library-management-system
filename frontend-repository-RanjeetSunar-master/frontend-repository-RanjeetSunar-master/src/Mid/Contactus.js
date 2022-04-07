import { Component } from "react";
import './contactus.css'
import axios from "axios";

class Contactus extends Component{
  state = {
    name : '',
    email : '',
    message : ''

  }

  addbook=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submit=(e)=>{
    e.preventDefault();
    //send data to our api 
    const data22 = {
      name : this.state.name,
      email : this.state.email,
      message : this.state.message
      
    }
    console.log(data22)
    axios.post("http://localhost:90/admin/message", data22)
    .then((res)=>{
      alert("Thank You for the message")
      window.location.href ='/'
     

    })
    .catch((err)=>{
      
    })
    
  }
    render(){
        return(
           
            <div class="container">
            <div class="content">
              <div class="left-side">
                <div class="address details">
                  <i class="fas fa-map-marker-alt"></i>
                 
                </div>
                <div class="phone details">
                  <i class="fas fa-phone-alt"></i>
                 
                </div>
                <div class="email details">
                  <i class="fas fa-envelope"></i>
                  
                </div>
              </div>
              <div class="right-side">
                <div class="topic-text">Send us a message</div>
                <p>If you have any any types of queries, you can send me message from here. It's my pleasure to help you.</p>
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name" name="name"
             value={this.state.name} onChange={this.addbook}/>
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email" name="email"
             value={this.state.email} onChange={this.addbook}/>
                </div>
                <div class="input-box message-box">
                <input type="text" placeholder="Enter your message" 
                name="message"
                value={this.state.message} onChange={this.addbook}/>
                </div>
                <div class="button">
                <button onClick={this.submit}>Add Student</button>
                </div>
              </form>
            </div>
            </div>
          </div>            
   
                        
        )
    }
}

export default Contactus;