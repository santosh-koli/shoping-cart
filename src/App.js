import React from 'react';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Card from './Pages/Card';
import Summary from './Summary';
import Payment from './Payment';
import OrderDone from './OrderDone';
import ViewDetails from './Pages/ViewDetails';


const App = () => {








// const str = ContextStore()

  // const sortedArry=[]

  const sortArry=[];
  // const newData=[];
  
  
  // const {cartData} = ContextStore()
  
   const fun =(info)=>{
    sortArry.push(info)
    // console.log(sortArry)
    // cartData(info)
   }



  
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path='/' element={<Homepage fun={fun}/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/orderdone' element={<OrderDone/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/details' element={<ViewDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
