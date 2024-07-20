"client side"


import React from 'react'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'
import Features from './Components/Features'
import Component5 from './Components/Component5'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div className='w-5/11'>
      <Component1 />
      <Component2 />
      <Component3 />
      <Features />
      <Component5 />
      <Testimonials />
      <Footer/>
    
    </div>
  )
}

export default page