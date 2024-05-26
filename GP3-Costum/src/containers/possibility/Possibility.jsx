import React from 'react'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <section className=' container m-auto mt-2 p-2 flex md:flex-row flex-col  justify-center items-end'>
      <div className=' md:w-1/2 w-full flex items-center justify-center flex-col h-full'>
        <img width={300} src= {possibilityImage} alt="" />
      </div>
      <div className=' md:w-1/2 w-full h-full flex flex-col items-start justify-center mt-10 md:mt-0'>
        <h4 className=' text-white'>Lorem ipsum dolor sit amet.</h4>
        <h2 className='gradient__text mt-3 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur maxime nam aut architecto amet.</h2>
        <p className=' text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, cum delectus quas laudantium harum blanditiis nesciunt accusantium voluptate adipisci nulla officiis molestias praesentium cupiditate numquam.</p>
        <h5 className=' text-yellow-700'>Lorem ipsum dolor sit.</h5>
      </div>
    </section>
  )
}

export default Possibility