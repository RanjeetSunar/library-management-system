import { Component } from "react";
import {Route} from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Products from "./Products";
import updatestudent from "./updatestudentsRoute";
import updatebooks from "./updatebooks";
import Dashboard from "./Dashboard"
import ProductInsert from "./ProductInsert";
import Aboutus from "./Aboutus";
import books from "./books";
import Addstudent from "./Addstudent"
import Students from "./Students"
import Contactus from "./Contactus";
import Addbooks from "./Addbooks"
import bookissued from "./booksissued"
import message from "./message";

class Mid extends Component{
    render(){
        return(
            
            <>
           <Route path='/' exact component={Home} />
           <Route path='/register' component={Register} />
           <Route path="/login" component={Login} />
           <Route path='/dashboard' component={Dashboard} />
           <Route path='/updatebooks/:id' component={updatebooks} />
           <Route path='/updatestudents/:id' component={updatestudent} />
           <Route path='/productinsert' component={ProductInsert} />
           <Route path='/Aboutus' component={Aboutus} />
           <Route path='/books' component={books} />
           <Route path='/addbooks' component={Addbooks} />
           <Route path='/addstudent' component={Addstudent} />
           <Route path='/students' component={Students} />
           <Route path='/contactus' component={Contactus} />
           <Route path='/bookissued' component={bookissued} />
           <Route path='/message' component={message} />
           
           
</>

        )
    }
}

export default Mid;