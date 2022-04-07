import { Component } from "react";
import './footer.css'

class Footer extends Component{
    render(){
        return(
            <div class="container1">
                <div class="address details">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="topic"><>Address</></div>
                  <div class="text-one">Nayapati, Kathmandu</div>
                  
                </div>
                <div class="phone details">
                  <i class="fas fa-phone-alt"></i>
                  <div class="topic"><>Phone</></div>
                  <div class="text-one">+98 9893 5647</div>
                
                </div>
                <div class="email details">
                  <i class="fas fa-envelope"></i>
                  <div class="topic"><>Email</></div>
                  <div class="text-one">Hello@gmail.com</div>
                  
                </div>
                </div>
           
        )
    }
}

export default Footer;