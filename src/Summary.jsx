import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


const Summary = () => {


const Navigate=useNavigate();

const handelClick=()=>{
  Navigate('/payment')
}

const backHome=()=>{
  Navigate('/')
}

  return (
    <>
    <h1 className='text-center mt-5'>Product Summary</h1>
      <table className="table table-bordered container border mt-5">
  <thead className='bg-primary text-light'>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Product</th>
      <th scope="col">Quntity</th>
      <th scope="col">Price</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Shirt</td>
      <td>
      <button className='btn btn-light'>+</button>
      <input style={{width:'20px'}} type='' />

      <button className= 'btn btn-light'>-</button>
    
      </td>
      <td>200</td>
      <td style={{color:'red'}} >

     <a style={{cursor:'pointer'}}> <DeleteIcon/></a>

      </td>
    </tr>

    <tr>
      <th scope="row" colSpan={4}  className="mx-4">
    
      </th>
      <td > 
      <Button className='bg-danger text-light' variant="outlined" startIcon={<DeleteIcon />}>
        Reset All
      </Button></td>  
    </tr>
    
   
    
  </tbody>
</table> 

<div className="container mt-4 ">
  <div className="row">
    <div className="col text-center">
    <Button onClick={handelClick} className='mt-5 mx-4 ' variant="contained">Procced To Checkout</Button>
     <Button onClick={backHome}  className='mt-5 bg-danger' variant="contained">Continue Shoping</Button>
    </div>
  </div>
</div>

    

    </>
  );
}

export default Summary;
