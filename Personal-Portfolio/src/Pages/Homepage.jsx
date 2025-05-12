import React from 'react'

import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'

const Homepage = () => {
  return (
    <div className='bg-black'>
      <div className='h-fit w-full'>
        <Navbar />
      </div>
      <div className='h-[90vh] w-full bg-black'>
        <Hero />
      </div>
    </div>
  )
}

export default Homepage
