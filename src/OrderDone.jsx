import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderDone = () => {


    const Navigate=useNavigate();


const handelClick=()=>{
    Navigate('/')

}


  return (
    <>
      <img style={{height:'80vh', marginLeft:'440px',}} src='./images/Capture2.PNG'/>

      <h2 style={{color:'green',marginLeft:'520px'}} >Order Successfully Done.</h2>
      {/* <div className='row justify-content-center p-5'>
      <button onClick={handleClick} className="btn btn-success ">Home</button>


      </div> */}

      <div className="container mt-4 ">
  <div className="row">
    <div className="col text-center">
      <button  onClick={handelClick} className="btn btn-warning btn-outline-dark">Home</button>
    </div>
  </div>
</div>

    </>
  );
}

export default OrderDone;
