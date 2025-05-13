import React from 'react'

import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import Skills from '../Sections/Skills'

const Homepage = () => {
  return (
    <div className='bg-black text-white'>
      <section className='h-fit w-full'>
        <Navbar />
      </section>
      <section className='h-fit w-full'>
        <Hero />
      </section>
      <section className='h-fit w-full'>
        <About />
      </section>
      <section className='h-fit w-full'>
        <Skills />
      </section>
      <section className='h-fit w-full'>
        Projects
      </section>
      <section className='h-fit w-full'>
        Contact
      </section>
    </div>
  )
}

export default Homepage
