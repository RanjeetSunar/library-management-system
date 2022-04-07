import axios from "axios";
import { Component } from "react";
import {NavLink} from 'react-router-dom'
import { NavBtnLink } from "../Header/NavbarElements";
class updatestudent extends Component{
  
state = {
    studentname : "",
    studentid : "",
    batch : "",
    programmes : "",
    id : this.props.match.params.id
}

componentDidMount(){
    axios.get("http://localhost:90/show/students/"+ this.state.id)
    .then(res=>{
        console.log(res.data.data)
        this.setState({
            studentname : res.data.data.studentname,
            studentid : res.data.data.studentid,
            batch : res.data.data.batch,
            programmes : res.data.data.programmes,
        })
      
    })
    .catch()
}

rename=(e)=>{
  this.setState({
      [e.target.name] : e.target.value
  })  
}

updateProduct=(e)=>{
e.preventDefault();
const data = {
    id: this.state.id,
    studentname : this.state.studentname,
    studentid : this.state.studentid,
    batch : this.state.batch,
    programmes : this.state.programmes,
}


//axios.put("http://localhost:90/product/update", data)
axios.put("http://localhost:90/update/students", data)
.then(res=>{
   console.log("test")
   alert("updated sucessfully")
   window.location.href ='/students'
})
.catch()


}
    render(){
        return(
            <>
          <div>
            <NavBtnLink to ='/students'>BACK</NavBtnLink>
          </div>  
<div class="container4">
<form>
  <div class="field" tabindex="1">
    <label for="studentname">
      <i class="far fa-book"></i>Student Name
    </label>
    <input name="student" type="text" placeholder="Enter Student Name"  name="studentname"
             value={this.state.studentname} onChange={this.rename} required/>
  </div>
  <div class="field" tabindex="2">
    <label for="Studentid">
      <i class="far fa-envelope"></i>Student ID
    </label>
    <input name="Student ID" type="text" placeholder="190026" name="studentid"
             value={this.state.studentid} onChange={this.rename} required/>
  </div>
  <div class="field" tabindex="3">
    <label for="Batch">
      <i class="far fa-envelope"></i>Batch
    </label>
    <input name="Batch" type="text" placeholder="Enter batch Number" name="batch"
             value={this.state.batch} onChange={this.rename} required/>
  </div>
  <div class="field" tabindex="4">
    <label for="Programmes">
      <i class="far fa-envelope"></i>Programmes
    </label>
    <input name="programmes" type="text" placeholder="Enter Programmes name" name="programmes"
             value={this.state.programmes} onChange={this.rename} required/>
  </div>
  
  <button onClick={this.updateProduct}>Update</button>

</form>
</div>
            </>

        )
    }
}

export default updatestudent;