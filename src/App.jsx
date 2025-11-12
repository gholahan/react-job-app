import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/Hero.jsx'
import HomeCards from './component/HomeCards.jsx'
import Joblistings from './component/Joblistings.jsx'
import ViewAll from './component/ViewAll.jsx'

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero  title = "Become a React Dev" subtitle = "Find the React job that fits your skills and needs"/> 
     <HomeCards/>
     <Joblistings/>
     <ViewAll/>    
    </>
  )
}

export default App