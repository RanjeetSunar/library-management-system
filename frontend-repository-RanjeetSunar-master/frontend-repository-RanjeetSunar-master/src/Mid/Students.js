import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; 


import { Component } from "react";
import {NavBtnLink} from '../Header/NavbarElements'
class retrieve extends Component {

  state = {
    students: []

  }

  componentDidMount() {
    axios.get("http://localhost:90/show/students/")
    .then((res)=>{
      console.log(res)
      this.setState({
        students:res.data.data
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
    axios.delete("http://localhost:90/student/delete/" + id)
        .then((res) => {
            Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' })
            .then((result) => { if (result.isConfirmed) 
                { Swal.fire('Deleted!', 'Your file has been deleted.', 'success') }
                window.location.href='/students'
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
          <h1>Students</h1>
          
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                     
                      <th scope="col">studentname</th>
                      <th scope="col">ID</th>
                      <th scope="col">Batch</th>
                      <th scope="col">Programmes</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {
            this.state.students.map(book => {
              return (
                  <tbody>
                   
                    <tr>
                      
                      <td>{book.studentname}</td>
                      <td>{book.studentid}</td>
                      <td>{book.batch}</td>
                      <td>{book.programmes}</td>
                      <td>
                        {/* <Link class="btn btn-primary mr-2" to={`/users/${this.state.id}`}>
                          View
                        </Link> */}
                          <NavBtnLink to ={'/updatestudents/'+ book._id}>Edit</NavBtnLink>

                        
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
