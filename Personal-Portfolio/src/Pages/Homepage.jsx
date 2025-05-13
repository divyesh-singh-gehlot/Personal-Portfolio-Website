import React from 'react'

import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'

const Homepage = () => {
  return (
    <div className='bg-black text-white'>
      <div className='h-fit w-full'>
        <Navbar />
      </div>
      <div className='h-fit w-full'>
        <Hero />
      </div>
      <div className='h-fit w-full'>
        About
      </div>
      <div className='h-fit w-full'>
        Skills
      </div>
      <div className='h-fit w-full'>
        Projects
      </div>
      <div className='h-fit w-full'>
        Contact
      </div>
    </div>
  )
}

export default Homepage
