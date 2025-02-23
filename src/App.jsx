import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Facilities from './components/Facilities'
import Testimonials from './components/Testimonial'
import { Info } from 'lucide-react'
import IntroJim from './components/IntroJim'
import AboutHarikanta from './components/AboutHarikant'
import PeekInside from './components/PeekInside'
import Dine from './components/Dine'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import PetFriendlySection from './components/PetFriendlySection'

function App() {

  return (
    <>
      <Navbar/>
       <HeroSection/>
       <IntroJim/>
       <AboutHarikanta/>
       <PeekInside/>
       <Dine/>
       <Rooms/>
       <Amenities/>
       <PetFriendlySection/>
      {/* <Services/>
      <Facilities/>*/}
      
      <Testimonials/> 
      <Footer/> 
    </>
  )
}

export default App
