import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <section className=' container m-auto p-2 bg-sec flex flex-col md:flex-row items-center justify-between mt-5 rounded-lg'>
      <div className=' flex-auto flex items-start justify-center flex-col'>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h1 className=' font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, totam.</h1>
      </div>
      <div className=' flex flex-1 items-center justify-center mt-5 md:mt-0'>
        <button className=' bg-white p-4 rounded-2xl shadow-md shadow-black transition active:shadow-none'>Get Started</button>
      </div>
    </section>
  )
}

export default CTA