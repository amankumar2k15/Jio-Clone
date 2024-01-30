import React from 'react'
import Services from '../../component/Services'
import FiveG_Poster from '../../component/FiveG_Poster'
import Slider from '../../component/Slider'
import Spotlight from '../../component/Spotlight'
import Device from '../../component/Device'
import MakeDiffrence from '../../component/MakeDiffrence'
import Hero from '../../Component/Hero'
import JioCinema from '../../Component/JioCinema'
import Footer from '../../Component/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <FiveG_Poster />
      <JioCinema />
      <Slider />
      <Spotlight />
      <Device />
      <MakeDiffrence />
      <Footer />
    </>
  )
}

export default Home
