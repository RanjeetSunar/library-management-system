import axios from "axios";
import { Component } from "react";
import {NavLink} from 'react-router-dom'

class Update extends Component{
  
state = {
    pname : "",
    id : this.props.match.params.id
}

componentDidMount(){
    axios.get("http://localhost:90/product/single/"+this.state.id)
    .then(res=>{
        this.setState({
            pname : res.data.pname
        })
      //  console.log(res.data.pname)
    })
    .catch()
}

mychangeAAA=(e)=>{
  this.setState({
      [e.target.name] : e.target.value
  })  
}

updateProduct=(e)=>{
e.preventDefault();
// data = {
//     pname : this.state.pname,
//     id : this.state.id
// }


//axios.put("http://localhost:90/product/update", data)
axios.put("http://localhost:90/product/update", this.state)
.then(res=>{
    console.log("testtesttest")
})
.catch()


}
    render(){
        return(
            <section id="three" class="wrapper">
            <div class="inner">
                <header class="align-center">
                    <h2>Update</h2>
                    <p>  {this.state.pname}</p>
                </header>
                <div class="flex flex-2">

                  
                     

                <form className="form-inline" action="">

                    <div className="form-group">

                    <input type="text" className="form-control" name="pname"
                    onChange={this.mychangeAAA}
                    value={this.state.pname}
                    />
                    </div>

                    <div className="form-group">
                        <button onClick={this.updateProduct}>UPDATE</button>
                    </div>


                </form>





                </div>
            </div>
        </section>
        )
    }
}

export default Update;