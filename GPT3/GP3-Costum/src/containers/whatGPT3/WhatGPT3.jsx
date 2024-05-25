import React from 'react'
import { Feature } from '../../components'
import './whatGP3.css'

const WhatGPT3 = () => {

  return (
    <section className=' container m-auto flex flex-col bg-white p-3 sec1' id='what'>
      <div className=' mt-2 mb-2 flex'>
        <Feature title= "What is GPT3" text= "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className=' flex md:flex-row md:justify-between md:items-center justify-between items-center flex-col '>
        <h1 className=' text-center md:text-start gradient__text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nostrum.</h1>
        <p className=' mt-2 md:mt-0 text-white'>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className=' mt-2 mb-2 md:flex md:flex-col'>
      <Feature title= "Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title= "Knowledgebase" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title= "Education" text= "We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      </div>

    </section>
  )
}

export default WhatGPT3