import axios from "axios";
import { Component } from "react";
import {NavLink, Redirect} from 'react-router-dom'

class Products extends Component{
    state = {
        myproducts : [],
        con : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
    }



componentDidMount(){
    axios.get("http://localhost:90/product/showall", this.state.con)
    .then((res)=>{
        this.setState({
            myproducts : res.data
        })
        console.log(res.data)
    })
    .catch((err)=>{
        // error area
    })
}

// delete product funtion
deleteProduct=(pro_idd)=>{
    axios.delete("http://localhost:90/product/delete/"+pro_idd, this.state.con)
    .then()
    .catch()
    //alert(pro_idd)
}



    render(){
        if(!localStorage.getItem('token')){
            return <Redirect to='login' />
        }
        return(
            <section id="three" class="wrapper">
            <div class="inner">
                <header class="align-center">
                    <h2>MY SHOP</h2>
                    <p>Get what you want in a single click!</p>
                </header>
                <div class="flex flex-2">

                {
                    this.state.myproducts.map(product=>{
                        return(
                            <article>
                            <div class="image fit">
                                
                                <img src={"http://localhost:90/" + product.pimage} alt={product.pprice} />
                            </div>
                            <header>
                                <h3>{product.pname}</h3>
                            </header>
                            <p>{product.pdesc}</p>
                         
                            <footer>
                                <a href="#" className="button special">More</a>
                                <button onClick={()=>this.deleteProduct(product._id)}>Delete</button>
                                <NavLink to={"/update/"+product._id}  className="button special">Update</NavLink>
                               
              
                            </footer>
                        </article>
                        )
                    })
                }












                








                </div>
            </div>
        </section>
        )
    }
}

export default Products;