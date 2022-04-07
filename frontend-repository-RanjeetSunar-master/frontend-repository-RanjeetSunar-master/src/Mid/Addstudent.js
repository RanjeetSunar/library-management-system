import { Component } from "react";
import axios from "axios";
import { ThemeConsumer } from "styled-components";
import {NavBtnLink} from '../Header/NavbarElements'
import { FaWindowRestore, FaWindows } from "react-icons/fa";
class Register extends Component{
  state = {
    studentname : '',
    studentid : '',
    batch : '',
    programmes : '',

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
      studentname : this.state.studentname,
      studentid : this.state.studentid,
      batch : this.state.batch,
      programmes : this.state.programmes,
    }
    console.log(data22)
    axios.post("http://localhost:90/admin/addstudents", data22)
    .then((res)=>{
      alert("Susessfully Registered")
      window.location.href ='/students'

    })
    .catch((err)=>{
      
    })
    
  }

    render(){
        return(
          <>
          <div>
            <NavBtnLink to ='/dashboard'>BACK</NavBtnLink>
          </div>  
<div class="container4">
<form>
  <div class="field" tabindex="1">
    <label for="Bookname">
      <i class="far fa-book"></i>Student Name
    </label>
    <input name="student" type="text" placeholder="Enter Student Name"  name="studentname"
             value={this.state.studentname} onChange={this.registration} required/>
  </div>
  <div class="field" tabindex="2">
    <label for="Studentid">
      <i class="far fa-envelope"></i>Student ID
    </label>
    <input name="Student ID" type="text" placeholder="190026" name="studentid"
             value={this.state.studentid} onChange={this.registration} required/>
  </div>
  <div class="field" tabindex="3">
    <label for="Batch">
      <i class="far fa-envelope"></i>Batch
    </label>
    <input name="Batch" type="text" placeholder="Enter batch Number" name="batch"
             value={this.state.batch} onChange={this.registration} required/>
  </div>
  <div class="field" tabindex="4">
    <label for="Programmes">
      <i class="far fa-envelope"></i>Programmes
    </label>
    <input name="categories" type="text" placeholder="Enter Programmes name" name="programmes"
             value={this.state.programmes} onChange={this.registration} required/>
  </div>
  
  <button onClick={this.submit}>Add Student</button>

</form>
</div>
            </>

        )
    }
}

export default Register;

// export default Navbar;



