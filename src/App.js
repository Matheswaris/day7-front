import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//  import Login from './Login';
//  import Signup from './Signup';
//  import Home from './Home'
// import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Payment from './Payment'

function App() {
  return (
//  <BrowserRouter>
//  <Routes>
//  <Route path="/" element={<Login/>}></Route>
//  <Route path="/Signup" element={<Signup/>}></Route>
//  <Route path="/Login" element={<Login/>}></Route>
//  <Route path="/Home" element={<Home/>}></Route>
//  </Routes>
// </BrowserRouter>
//<div><Home/></div>
// <div><Aboutus/></div>
// <div><Contactus/></div>
// <div><Home/></div>
<div><Payment/></div>

  );
}

export default App;