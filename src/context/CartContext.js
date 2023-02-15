import React ,{createContext , useContext, useReducer, useState} from 'react';

const Card = createContext();

const CartContext = ({children}) => {
   const [data , setData] = useState([]);
  var Data = [];

  
  const cartData = (data)=>{
    Data.push(data)
    // setData(Data )
}
console.log(Data);

//    const cardreducer = ()=>{
    
//    }
//     const [state , dispatch] = useReducer(cardreducer , {
//         data: data,cart : data
//     })


  return (
    <Card.Provider value={{cartData, Data }}>
        {children}
    </Card.Provider>
  );
}
export {Card}
export const ContextStore = ()=> {
    return useContext(Card)
}

export default CartContext;
