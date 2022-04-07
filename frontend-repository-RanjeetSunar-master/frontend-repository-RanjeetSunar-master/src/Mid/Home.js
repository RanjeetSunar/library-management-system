import { Component } from "react";
import './home.css'
class Home extends Component{
    render(){
        return(
            <>
           <div className='home'>
               {/* <h1>Library Management System</h1> */}
               <h1 class="text-white aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">Library Management system</h1>
               <h2 class="text-white aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">MAKES YOUR WORK EASY</h2>
               
           </div>
       
           

          
           <div className='newhome1'>
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
                <p>If you have any types of queries, you can send me message from here. It's my pleasure to help you.</p>
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name"/>
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email"/>
                </div>
                <div class="input-box message-box">
                <input type="text" placeholder="Enter your message"/>
                </div>
                <div class="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
            </div>
          </div>            
           </div>
           
           </>
           
           
                    
        )
    }
}

export default Home;