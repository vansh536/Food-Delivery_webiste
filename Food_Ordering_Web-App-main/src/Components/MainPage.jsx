import React, { Component } from 'react'
import burger from '../Components/burger.jpeg'
// import Button from '@mui/material/Button'
import { Button } from '@mui/material'
import Navbaar from './Navbaar'
import axios from 'axios'
export default class MainPage extends Component {

 


  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
    
    
      product: {
        name: 'pizza',
        price: '90',
        disc: 'special',
        extra:'nothing'
      },
    };
    

  }
componentDidMount(){
  this.setState(prevState => ({
    product: {
      ...prevState.product,
      name: 'lizza',
      price: '80',
      disc: 'kkpecial',
      extra:'othing'
    },
  }));
}
  
  onSubmitHandler= async()=>{
    
    try{
      console.log(this.state.product)

      await axios.post('http://localhost:8080/saveProduct',this.state.product)
    }catch(e){
      console.log(e)
    }
    this.setState({
      count:this.state.count+1,
  })
  }
  
  
  render() {
    const { product } = this.state.product;
    
    return (

      <div>
      <Navbaar count={this.state.count}/>
        
      
      
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title  name" >Burger</h5>
            <img src={burger}></img>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pri"  id="p">$999</li>
            <li className="list-group-item disc" >Rating:4.4</li>
          </ul>
          <div className="card-body">
            <Button variant="outlined" onClick={this.onSubmitHandler}>Add Cart</Button>
          </div>
        </div>

      </div>
      
      </div>
    )
  }
}

    

    