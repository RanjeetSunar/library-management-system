import React, { useState } from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router';

import './Navbar.css';
import './Dashboard.css'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
// import { Redirect, Router } from 'react-router';

function logout(){
  localStorage.clear();
  window.location.href='/'
}

class Navbar extends Component{
  
  render(){
    if(!localStorage.getItem('token')){
      return <Redirect to='/login' />
  }
    return(
      <>
      <div class="right_area">
        <button class="logout_btn" onClick={logout}>Logout</button>
      </div>
      <div class="sidebar">
        <center>
          <img  class="profile_image"/>
          <h4>Hello! Admin</h4>
        </center>
        <a href="/"><i class="fas fa-desktop"></i><span>Home</span></a>
        <a href="/students"><i class="fas fa-cogs"></i><span>Students</span></a>
        <a href="/books"><i class="fas fa-table"></i><span>Books</span></a>
        <a href="/addstudent"><i class="fas fa-th"></i><span>Add Students</span></a>
        <a href="/addbooks"><i class="fas fa-info-circle"></i><span>Add Books</span></a>
        <a href="/bookissued"><i class="fas fa-sliders-h"></i><span>Books Issued</span></a>
        <a href="/message"><i class="fas fa-sliders-h"></i><span>Message</span></a>
        
      </div>
      <div className='content11'></div>
      
  
      
      </>
    )
  }
}

export default Navbar;

