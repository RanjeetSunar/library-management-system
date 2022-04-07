import { Component } from "react";
import axios from "axios";
import { ThemeConsumer } from "styled-components";
import { NavLink } from "react-router-dom";
import { NavBtnLink } from "../Header/NavbarElements";
import '../css/books.css'
import Swal from "sweetalert2";
import { FaWindows } from "react-icons/fa";
class addbooks extends Component{
  state = {
    books: []

  }

  addbook=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submit=(e)=>{
    e.preventDefault();
  
    const data22 = {
      bookname : this.state.bookname,
      studentid : this.state.studentid,
      start : this.state.start,
      end : this.state.end,
    }
    console.log(data22)
    axios.post("http://localhost:90/admin/bookissued", data22)
    .then((res)=>{
      alert("Susessfully added")
      window.location.href ='/bookissued'
     

    })
    .catch((err)=>{
      
    })
    
  }
  componentDidMount() {
    axios.get("http://localhost:90/show/issuedbooks/")
    .then((res)=>{
      console.log(res)
      this.setState({
        books:res.data.data
      })

    })
      
      .catch((e)=>{

      })
  }
  delete = (id) => {
    // pro_id.preventDefault();
    axios.delete("http://localhost:90/bookissued/delete/" + id)
        .then((res) => {
            Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' })
            .then((result) => { if (result.isConfirmed) 
                { Swal.fire('Deleted!', 'Your file has been deleted.', 'success') }
            window.location.href='/bookissued'
             })

            
        })
        .catch((e) => {
            console.log(e)
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
      <i class="far fa-envelope"></i>Student Id
    </label>
    <input name="studentid" type="text" placeholder="Enter Student ID" name="studentid"
             value={this.state.studentid} onChange={this.addbook} required/>
  </div>
  <div class="field" tabindex="3">
    <label for="authors">
      <i class="far fa-envelope"></i>Start Date
    </label>
    <input name="start" type="date" placeholder="mm/dd/yyyy" name="start"
             value={this.state.start} onChange={this.addbook} required/>
  </div>
  <div class="field" tabindex="4">
    <label for="categories">
      <i class="far fa-envelope"></i>End Date
    </label>
    <input name="end" type="date" placeholder="mm/dd/yyyy" name="end"
             value={this.state.end} onChange={this.addbook} required/>
  </div>
  
  <button onClick={this.submit}>Submit</button>

</form>
</div>
<div className="container">
        <div className="py-4">
          <h1>Issued Details</h1>
          
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                     
                      <th scope="col">BookName</th>
                      <th scope="col">Issued to Student ID</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {
            this.state.books.map(book => {
              return (
                  <tbody>
                   
                    <tr>
                      
                      <td>{book.bookname}</td>
                      <td>{book.studentid}</td>
                      <td>{book.start}</td>
                      <td>{book.end}</td>
                      <td>
                    
                        <button onClick={() => this.delete(book._id)}>Delete</button>
                      
                      </td>
                    </tr>
                    {/* ))} */}
                  </tbody>
            

              )
            })


          }
              </table>

        </div>
      </div>
            </>

        )
    }
}
export default addbooks;

