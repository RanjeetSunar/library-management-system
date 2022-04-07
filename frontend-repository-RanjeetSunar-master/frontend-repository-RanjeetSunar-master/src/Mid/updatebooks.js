import axios from "axios";
import { Component } from "react";
import {NavLink} from 'react-router-dom'
import { NavBtnLink } from "../Header/NavbarElements";

class updatebooks extends Component{
  
state = {
    bookname : "",
    isbnno : "",
    authors : "",
    categories : "",
    id : this.props.match.params.id
}

componentDidMount(){
    axios.get("http://localhost:90/show/books/"+ this.state.id)
    .then(res=>{
        console.log(res.data)
        this.setState({
            bookname : res.data.data.bookname,
            isbnno : res.data.data.isbnno,
            authors : res.data.data.authors,
            categories : res.data.data.categories,
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
    bookname : this.state.bookname,
    isbnno : this.state.isbnno,
    authors : this.state.authors,
    categories : this.state.categories,
}


//axios.put("http://localhost:90/product/update", data)
axios.put("http://localhost:90/update/books", data)
.then(res=>{
   console.log("test")
   alert("updated sucessfully")
   window.location.href ='/books'
})
.catch()


}
    render(){
        return(
            <>
            <div>
            <NavBtnLink to ='/books'>BACK</NavBtnLink>
          </div>  
            <div class="container4">
 
            <form>
              <div class="field" tabindex="1">
                <label for="Bookname">
                  <i class="far fa-book"></i>Book Name
                </label>
                <input name="book" type="text" placeholder="Enter book Name"  name="bookname"
                         value={this.state.bookname} onChange={this.rename} required/>
              </div>
              <div class="field" tabindex="2">
                <label for="isbnno">
                  <i class="far fa-envelope"></i>ISBN_NO
                </label>
                <input name="isbn" type="text" placeholder="e.g. 1234" name="isbnno"
                         value={this.state.isbnno} onChange={this.rename} required/>
              </div>
              <div class="field" tabindex="3">
                <label for="authors">
                  <i class="far fa-envelope"></i>Authors
                </label>
                <input name="authors" type="text" placeholder="Enter authors Name" name="authors"
                         value={this.state.authors} onChange={this.rename} required/>
              </div>
              <div class="field" tabindex="4">
                <label for="categories">
                  <i class="far fa-envelope"></i>Categories
                </label>
                <input name="categories" type="text" placeholder="Enter categories name" name="categories"
                         value={this.state.categories} onChange={this.rename} required/>
              </div>
              
              <button onClick={this.updateProduct}>Update</button>
            
            </form>
            </div>
            </>
        )
    }
}

export default updatebooks;