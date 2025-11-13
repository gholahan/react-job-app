import React from 'react'

import Hero from '../component/Hero.jsx'
import HomeCards from '../component/HomeCards.jsx'
import Joblistings from '../component/Joblistings.jsx'
import ViewAll from '../component/ViewAll.jsx'
const HomePage = () => {
  return (
    <>
     <Hero  title = "Become a React Dev" subtitle = "Find the React job that fits your skills and needs"/> 
     <HomeCards/>
     <Joblistings/>
     <ViewAll/> 
    </>
  )
}

export default HomePage