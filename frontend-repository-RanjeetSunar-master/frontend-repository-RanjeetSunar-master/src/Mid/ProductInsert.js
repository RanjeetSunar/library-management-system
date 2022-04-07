import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";

class ProductInsert extends Component{
    state = {
        price : "",
        filename : null
    }
    textChangeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    changeFileHandler=(e)=>{
        this.setState({
            filename : e.target.files[0]
        })
    }

    sendData = (e)=>{
        e.preventDefault();
        const data =  new FormData();

        data.append('price', this.state.price)
      //  data.append('title', this.state.title)
        data.append('product_image', this.state.filename)
        axios.post("http://localhost:90/product/insert", data)
        .then((result)=>{
            console.log(result)
        })
        .catch()
    }
    render(){
        if(!localStorage.getItem('token')){
            return <Redirect to='/login' />
        }
        return(
            <section id="three" class="wrapper">
                <div class="inner">
                <header class="align-center">
                    <h2>Insert your product</h2>
                    <p>Get what you want in a single click!</p>
                </header>
                <form>
                    <input type="text" name="price" 
                    onChange={this.textChangeHandler}
                    value={this.state.price}
                    />


                    <input type="file" name="files" 
                    onChange={this.changeFileHandler}
                    />

                    <button onClick={this.sendData}>INSERT</button>
                </form>

                </div>

            </section>
        )
    }


}

export default ProductInsert