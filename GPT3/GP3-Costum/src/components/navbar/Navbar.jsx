import React from 'react'
import logo from "../../assets/logo.svg"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className=' container m-auto flex flex-row justify-start items-center pt-4  md:pt-2'>
      <div className=' flex justify-start items-start md:w-[10%] w-1/2 ml-5'>
        <img width={60} height={60} src= {logo} alt="Logo" />
      </div>
      <div className=' md:flex justify-start items-start ml-2 nav_center hidden md:w-[60%] lg:w-[70%]'>
        <ul className=' flex justify-start items-start flex-row text-white text-sm md:text-lg'>
          <li className=' m-2 lg:m-4 '><a href="#home">Home</a></li>
          <li className=' m-2 lg:m-4'><a href="">What is GPT3</a></li>
          <li className=' m-2 lg:m-4'><a href="">Open Ai</a></li>
          <li className=' m-2 lg:m-4'><a href="">Case Study</a></li>
          <li className=' m-2 lg:m-4'><a href="">Library</a></li>
        </ul>
      </div>
      <div className='md:flex justify-end items-center md:w-[20%] hidden'>
        <button className='bg-white text-black p-2 rounded-lg'>Sign In</button>
        <button className='bg-black text-white p-2 rounded-lg ml-2'>Sign Up</button>
      </div>
      <div className=' w-1/2 md:hidden flex justify-end items-end mr-5'>
        <div>
         {show ? <RiCloseLine color='#fff' size={30} onClick={() => setShow(!show)} /> : <RiMenu3Line color='#fff' size={30} onClick={() => setShow(!show)} />}
         {show && (
            <div className=' w-1/2 absolute top-15 right-2 bg-white rounded-lg'>
            <ul className=' flex justify-center items-center flex-col text-black'>
              <li className=' p-2 border-b border-black'><a href="#home">Home</a></li>
              <li className=' p-2'><a href="#what">What is GPT3</a></li>
              <li className=' p-2'><a href="#open">Open Ai</a></li>
              <li className=' p-2'><a href="#case">Case Study</a></li>
              <li className=' p-2'><a href="#library">Library</a></li>
              <li className=' p-2'>
                <button className=' bg-cyan-300 text-black p-2 rounded-lg'>Sign In</button>
                <button className='bg-black text-white p-2 rounded-lg ml-2'>Sign Up</button>
              </li>
            </ul>
          </div>
          )
         }
        </div>


      </div>
    </nav>
  )
}

export default Navbar