import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <section className=' container m-auto flex md:flex-row flex-col' id='home'>
      <div className=' md:w-1/2 flex justify-center items-start flex-col'>
        <h1 className='gradient__text p-2 md:text-5xl'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, reiciendis!</h1>
        <p className=' text-white p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus tempora odio distinctio nam perspiciatis amet voluptatibus voluptatum doloribus voluptates minus!</p>
        <div className=' flex justify-center items-center w-full lg:w-auto flex-row p-2'>
        <input className=' mt-2 mb-2 p-1' type="text" />
        <button className=' bg-cyan-300 rounded-r-md p-1 '>Get Started</button>
        </div>
        <div className=' flex flex-row p-2 gap-2 items-center justify-center'>
        <img width={150} height={150} src= {people} alt="" />
        <p className=' text-white'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className=' md:w-1/2 flex justify-center items-center'>
        <img className='' src= {ai} alt="" />
      </div>
    </section>
  )
}

export default Header