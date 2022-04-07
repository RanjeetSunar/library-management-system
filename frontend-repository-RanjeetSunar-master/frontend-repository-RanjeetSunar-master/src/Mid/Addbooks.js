import { Component } from "react";
import axios from "axios";
import { ThemeConsumer } from "styled-components";
import { NavLink } from "react-router-dom";
import { NavBtnLink } from "../Header/NavbarElements";
import '../css/books.css'

class addbooks extends Component{
  state = {
    bookname : '',
    isbnno : '',
    authors : '',
    categories : '',

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
      bookname : this.state.bookname,
      isbnno : this.state.isbnno,
      authors : this.state.authors,
      categories : this.state.categories,
    }
    console.log(data22)
    axios.post("http://localhost:90/admin/addbooks", data22)
    .then((res)=>{
      alert("Susessfully added")
      window.location.href ='/books'
     

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
      <i class="far fa-book"></i>Book Name
    </label>
    <input name="book" type="text" placeholder="Enter book Name"  name="bookname"
             value={this.state.bookname} onChange={this.addbook} required/>
  </div>
  <div class="field" tabindex="2">
    <label for="isbnno">
      <i class="far fa-envelope"></i>ISBN_NO
    </label>
    <input name="isbn" type="text" placeholder="e.g. 1234" name="isbnno"
             value={this.state.isbnno} onChange={this.addbook} required/>
  </div>
  <div class="field" tabindex="3">
    <label for="authors">
      <i class="far fa-envelope"></i>Authors
    </label>
    <input name="authors" type="text" placeholder="Enter authors Name" name="authors"
             value={this.state.authors} onChange={this.addbook} required/>
  </div>
  <div class="field" tabindex="4">
    <label for="categories">
      <i class="far fa-envelope"></i>Categories
    </label>
    <input name="categories" type="text" placeholder="Enter categories name" name="categories"
             value={this.state.categories} onChange={this.addbook} required/>
  </div>
  
  <button onClick={this.submit}>Add Student</button>

</form>
</div>
            </>

        )
    }
}
export default addbooks;

