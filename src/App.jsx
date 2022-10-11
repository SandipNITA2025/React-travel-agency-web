import React from 'react'
import Destination from './components/Destination'
import Download from './components/Download'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Tours from './components/Tours'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Destination/>
      <Offer/>
      <Tours/>
      <Testimonial/>
      <Download/>
      <Footer/>
    </>
  )
}

export default App
