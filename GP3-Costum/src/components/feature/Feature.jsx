import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <section className=' flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start w-[100%] mt-3 mb-3 '>
      <div className=' flex flex-col md:justify-start md:items-start justify-center items-center md:max-w-44 md:flex-1'>
        <div className='brt w-9 h-1 mb-1'></div>
        <h1 className=' text-cyan-300'>{title}</h1>
      </div>
      <div className=' md:max-w-96 flex flex-auto'>
        <p className=' text-center md:text-start text-white'>{text}</p>
      </div>
    </section>
  )
}

export default Feature