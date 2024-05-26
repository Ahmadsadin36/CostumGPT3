import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  //current date
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const date = `${day}/${month}/${year}`;
  
  return (
    <footer className=' w-full footer-bg flex flex-col items-center justify-center mt-5 p-2'>
      <div className=' w-full flex justify-center items-center flex-col mb-5'>
        <h1 className=' text-center gradient__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, id?</h1>
        <button className=' bg-transparent border border-white p-2 mt-5 text-white transition hover:border-yellow-700'>Lorem, ipsum dolor.</button>
      </div>
      <div className=' hidden w-full sm:flex flex-col md:flex-row justify-center items-center gap-1'>
        <div className=' flex flex-col items-center justify-center flex-1 mt-5 mb-5 md:mb-0 md:mt-0'>
          <img src={logo} alt="" />
          <p className=' mt-2 text-white'>Lorem ipsum dolor sit amet.</p>
        </div>
        <ul className=' flex flex-col flex-1 items-start justify-start gap-1'>
          <h4 className=' text-white font-semibold mb-2'>Lorem, ipsum dolor.</h4>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
          <li className=' text-white'><a href=""></a></li>
        </ul>
        <ul className=' flex flex-col flex-1 items-start justify-start gap-1'>
          <h4 className=' text-white font-semibold mb-2'>Lorem, ipsum dolor.</h4>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
        </ul>
        <ul className=' flex flex-col flex-1 items-start justify-start gap-1'>
          <h4 className=' text-white font-semibold mb-2'>Lorem, ipsum dolor.</h4>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
          <li className=' text-white'><a href="">Lorem, ipsum.</a></li>
        </ul>
      </div>
      <div className=' flex flex-col justify-center items-center mt-5'>
        <h4 className=' text-white text-center md:text-left mb-5'>
          &copy; {date} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo.
        </h4>
        <p className=' gradient__text font-bold'>
          Developed by <a href="https://github.com/Ahmadsadin36">Ahmad Sadin</a>
        </p>
      </div>

    </footer>
  )
}

export default Footer