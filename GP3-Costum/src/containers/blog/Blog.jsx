import React from 'react'
import Article from '../../components/article/Article'
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Blog = () => {
  return (
    <section className=' container m-auto p-2 mt-5 flex flex-col items-center justify-center'>
      <div className=' w-full flex justify-center items-center flex-wrap'>
        <h1 className=' w-full text-left gradient__text mt-5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, earum.</h1>
      </div>
      <div className=' w-full flex md:flex-row flex-col-reverse'>
        <div className=' flex-1 flex md:mr-5'>
          <Article imgURL={blog01} title= "sum dolor sit amet, cons" />
        </div>
        <div className=' flex-1 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-5'>
        <Article imgURL={blog02} title= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, earum."  />
        <Article imgURL={blog03} title= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, earum." />
        <Article imgURL={blog04} title= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, earum." />
        <Article imgURL={blog05} title= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, earum." />
        </div>
      </div>
    </section>
  )
}

export default Blog