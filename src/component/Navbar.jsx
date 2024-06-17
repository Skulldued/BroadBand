import React from 'react'
import {navLink} from "../constant/index";
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [menu ,setmenu] = useState(false);
    const handle = ()=>{
        setmenu(!menu);
    }
  return (
    <div className='text-white px-10 py-5'>
     <div>
        <div className='flex justify-between items-center'>
            <img src={logo} width="150px" alt="" />
            <div>
                
               <ul className=' hidden lg:flex gap-8'>
                {
                    navLink.map((item,index)=>(
                        <li className='text-white' key={index}>
                           <NavLink to={item.path}>
                              {item.name}
                           </NavLink>
                        </li>
                    ))
                }
               </ul>
            </div>
            <div className='lg:hidden flex' onClick={handle}>
               {
                menu ?<IoMdClose className="text-3xl font-bold"/> :<RiMenu2Fill size="25px"
                /> 
               }
                </div>
               
        </div>
        <div className=' '>
                
                <ul className={menu?' flex bg-red-500 duration-300 ease-in-out flex-col w-full absolute left-0 top-24  lg:hidden gap-2':'absolute left-[-100%]'}>
                 {
                     navLink.map((item,index)=>(
                         <li className='text-black py-1 px-4' key={index}>
                            <NavLink to={item.path}>
                               {item.name}
                            </NavLink>
                         </li>
                     ))
                 }
                </ul>
             </div>
     </div>
    </div>
  )
}

export default Navbar
