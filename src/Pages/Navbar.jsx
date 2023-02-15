import React,{useState} from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'
import { ContextStore } from '../context/CartContext';


const Navbar = ({stateLift}) => {



const {Data} = ContextStore()

  const [text,setText]=useState('')


  stateLift(text)


const Navigate=useNavigate();
const handelClilck = ()=>{
  Navigate('/summary')

}


const inputEvent =(e)=>{
  
  setText(e.target.value)
// console.log(e.target.value);

}


console.log(Data);


  return (
    <>
<nav  className= "navbar navbar-expand-lg "style={{backgroundColor:'rgb(48, 202, 191)'}}>
  <a className="navbar-brand" href="#"><span className='fw-bold' style={{fontSize:'30px',color:'black'}}>Shop</span> <span style={{fontSize:'30px',color:'white'}}>Mart</span></a>
  <button className="navbar-toggler bg-light text-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon  "></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link fw-bold" style={{fontSize:'25px',color:'wheat'}}href="#">Home <span  className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link fw-bolder" href="#" style={{fontSize:'25px',color:'wheat'}}> About <span className="sr-only">(current)</span></a>
      </li>
     
      
      
    </ul>
    <form className="form-inline mx-auto d-flex my-lg-0">
      <input onChange={inputEvent} value={text} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-0 bg-dark" type="submit">Search</button>
    </form>




    <Badge badgeContent={1} color="primary" className='mx-auto'>
      <a onClick={handelClilck} style={{cursor:"pointer",color:'white'}}> <ShoppingCartIcon className='mx-2 text-light' color="action" /> </a>

     </Badge>

 

  </div>
</nav> 
      
    </>
  );
}

export default Navbar;
