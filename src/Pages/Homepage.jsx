import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import Card from './Card';
import axios from 'axios';
import Carosal from './Carosal';
import { ContextStore } from '../context/CartContext';


const Homepage = ({fun}) => {

// const [isLoading,setIsLoading]=useState(true)
const [info,setInfo]=useState([])
const[text,setText]=useState('')
const[loading,setLoading]=useState(true)
// const[cart,setCart]=useState([])



// const API='https://fakestoreapi.com/products'

const sortArry=[];


// const newData=[];

// const demo = (item)=>{
//   newData.push(item)
//   fun(newData)

// }


const {cartData} = ContextStore()

 const handelClick =(info)=>{
  sortArry.push(info)
  // console.log(sortArry)
  cartData(info)
 }

  

useEffect(()=>{


  setLoading(false)

  axios 
  .get("https://fakestoreapi.com/products")
  .then((res)=>setInfo(res.data))

  
},[])


const stateLift=(text)=>{
  
  setText(text)
}



if(loading){
  return <div class="spinner-border d-flex justify-content-around" role="status">
  <span class="sr-only ">Loading...</span>
</div>
}else{
  
  return (
    <>

     
      <Navbar stateLift={stateLift}/>
      <Carosal/>
      
     
      <div className='d-flex flex-wrap'>
      
      {
        
        info.filter((info)=>{
          if(text==''){
            return info
          }else if(info.title.toLowerCase().includes(text.toLowerCase())){
            return info
          }
        }).map((elem,id)=>{

         
          return(<Card key={id} elem={elem} handelClick={handelClick}/>)

        })
      }
      </div>  
      
    </>
    

  );

}



}

export default Homepage;
