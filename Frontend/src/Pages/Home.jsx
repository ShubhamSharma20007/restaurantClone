import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Menu from '../Components/Menu'
import WhoWeAre from '../Components/HowWeAre'
import Team from '../Components/Team'
import Reservation from '../Components/Reservation'
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <Qualities></Qualities>
      <Menu></Menu>
      <WhoWeAre></WhoWeAre>
      <Team></Team>
      <Reservation></Reservation>
    </div>
  )
}

export default Home
