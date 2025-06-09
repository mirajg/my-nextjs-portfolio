
import React from 'react'
import Navbar from '@/components/Navbar'
import AboutPage from './about/page'
import Contact from './contact/page' 
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import SendMeMessage from '@/components/SendMeMessage'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutPage />
      <SendMeMessage /> 
      <Contact />
      <Footer /> 
    </div>
  )
}

export default page
