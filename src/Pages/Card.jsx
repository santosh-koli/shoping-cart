import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css'

const Card = ({elem,handelClick}) => {


  const Navigate=useNavigate();

  const view = ()=>{
    
    Navigate('/details')

  
  }


  const {image,title,price}=elem


  return (
    <>
    <div style={{}} className=' card d-flex flex-wrap border m-2 text-center mx-auto mt-5 '>
    <div className="card-row mt-2 p-3" style={{width: "18rem",height:"auto" }}>
  <img className="card-img-top " style={{height:'30vh',width:'18vw'}} src={image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,18)}</h5>
    <p className="card-text">INR:{price}</p>
    <div className='d-flex justify-content-between'>
    <button  onClick={()=>handelClick(elem)} className="btn btn-info ">Add To Cart</button>
    <button onClick={view}  className="btn btn-info ">View Details</button>

    {/* <a  href="#" className="btn btn-warning">Add To Cart</a> */}
    {/* <a href="#" className="btn btn-warning">View Deatails</a> */}
    </div>
   
  </div>
</div>
    </div>
    
    </>
  );
}

export default Card;
