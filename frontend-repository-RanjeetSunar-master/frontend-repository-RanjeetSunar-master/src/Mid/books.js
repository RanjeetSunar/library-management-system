import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Component } from "react";
import {NavBtnLink} from '../Header/NavbarElements'
import Swal from "sweetalert2";
class retrieve extends Component {

  state = {
    books: []

  }

  componentDidMount() {
    axios.get("http://localhost:90/show/books/")
    .then((res)=>{
      console.log(res)
      this.setState({
        books:res.data.data
      })

    })
      
      .catch((e)=>{

      })
  }

  mychangeAAA = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  delete = (id) => {
    // pro_id.preventDefault();
    axios.delete("http://localhost:90/book/delete/" + id)
        .then((res) => {
            Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' })
            .then((result) => { if (result.isConfirmed) 
                { Swal.fire('Deleted!', 'Your file has been deleted.', 'success') }
            window.location.href='/books'
             })

            
        })
        .catch((e) => {
            console.log(e)
        })

}


  render() {
    return (
      <>
      <div>
        <NavBtnLink to ='/dashboard'>BACK</NavBtnLink>
      </div>
      <div className="container">
        <div className="py-4">
          <h1>Books</h1>
          
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                     
                      <th scope="col">BookName</th>
                      <th scope="col">ISBN</th>
                      <th scope="col">Author</th>
                      <th scope="col">Categories</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {
            this.state.books.map(book => {
              return (
                  <tbody>
                   
                    <tr>
                      
                      <td>{book.bookname}</td>
                      <td>{book.isbnno}</td>
                      <td>{book.authors}</td>
                      <td>{book.categories}</td>
                      <td>
                        {/* <Link class="btn btn-primary mr-2" to={`/users/${this.state.id}`}>
                          View
                        </Link> */}
                        <NavBtnLink to ={'/updatebooks/'+ book._id}>Edit</NavBtnLink>
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
    );
  }
};

export default retrieve;
