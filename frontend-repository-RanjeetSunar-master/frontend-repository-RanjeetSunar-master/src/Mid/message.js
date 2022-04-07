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
    axios.get("http://localhost:90/show/message/")
    .then((res)=>{
      console.log(res)
      this.setState({
        books:res.data.data
      })

    })
      
      .catch((e)=>{

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
                     
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Message</th>
                      
                      <th>Action</th>
                    </tr>
                  </thead>
                  {
            this.state.books.map(book => {
              return (
                  <tbody>
                   
                    <tr>
                      
                      <td>{book.name}</td>
                      <td>{book.email}</td>
                      <td>{book.message}</td>
                      
                      <td>
                        
                        <button>Respond</button>
                      
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
