import React from 'react'
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

const Brand = () => {
  return (
    <section className=' container m-auto flex flex-wrap items-center justify-center md:gap-5 gap-1 p-10'>
      <div>
        <img src= {google} alt="" />
      </div>
      <div>
      <img src= {slack} alt="" />
      </div>
      <div>
      <img src= {atlassian} alt="" />
      </div>
      <div>
      <img src= {dropbox} alt="" />
      </div>

    </section>
  )
}

export default Brand