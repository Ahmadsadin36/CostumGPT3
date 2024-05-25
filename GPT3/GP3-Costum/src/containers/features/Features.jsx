import React from 'react'
import { Feature } from '../../components'

const Features = () => {
  const featuresData = [
    {
      id:0,
      title: 'Feature 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quam.',
    },
    {
      id:1,
      title: 'Feature 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quam.',
    },
    {
      id:2,
      title: 'Feature 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quam.',
    },
    {
      id:3,
      title: 'Feature 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quam.',
    },
  ]
  return (
    <section className=' container m-auto p- mt-3 flex md:flex-row flex-col'>
      <div className=' w-full md:w-1/2 h-full flex flex-col md:items-start md:justify-between justify-center items-center p-2'>
        <h1 className='gradient__text text-center md:text-start mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quam.</h1>
        <p className=' text-white'>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className=' w-full md:w-1/2 h-full'>
        {featuresData.map((feature) => (
          <Feature key={feature.id} title={feature.title} text={feature.text} />
        )
        )}
        
      </div>
    </section>
  )
}

export default Features