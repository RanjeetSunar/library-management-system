import { Component } from "react";
import './aboutus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Aboutus extends Component{
    render(){
        return(
           
            <div class="section">
            <div class="container123">
                <div class="content-section">
                    <div class="title">
                        <h1>About Us</h1>
                    </div>
                    <div class="content">
                        <h3>Why?</h3>
                        <p>We always wanna make the work easy and fast. So, we have introduced Library Management System. This system is 
                            developed by the developer or programmer Mr.Ranjeet. This system helps you manage books and students in library.
                            If you have any queries you can message me by clicking Contact us button.</p>
                      
              
                        <div class="button">
                            <a href="/contactus">Contact Us</a>
                        </div>
                    </div>
                   
                </div>
                
            </div>
        </div>          
   
                        
        )
    }
}

export default Aboutus;