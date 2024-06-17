import React from 'react'
import Navbar from "./component/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
const App = () => {
  return (
   <BrowserRouter>
    <div className='bg-black w-full '>
      <Navbar/>
    </div>
   </BrowserRouter>
  )
}

export default App
