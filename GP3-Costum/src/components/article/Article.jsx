import React from 'react'
import './article.css'

const Article = ({imgURL, title}) => {
  // give random date
  const date = Math.floor(Math.random() * 30) + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  const year = Math.floor(Math.random() * 10) + 2010;
  const randomDate = `${date}/${month}/${year}`;

  return (
    <div className=' w-full h-full flex flex-col items-center justify-center article-bg'>
      <div className=' w-full flex items-center justify-center'>
        <img src= {imgURL} alt="" />
      </div>
      <div className=' w-full flex-1 flex flex-col items-start justify-between p-2'>
        <span className=' text-yellow-700'>{randomDate}</span>
        <h1 className=' text-white'>{title}</h1>
        <p className=' text-white mt-10 cursor-pointer transition hover:text-yellow-700'>click for more...</p>
      </div>
    </div>
  )
}

export default Article