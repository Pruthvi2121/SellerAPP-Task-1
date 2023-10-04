import React from 'react';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';



function App() {
  
  return (
<>
   <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/page/:pageNumber' element={<Home/>}/> 
  </Routes>
   
   </>
  );

  
}

export default App;
