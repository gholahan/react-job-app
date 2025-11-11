import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/Hero.jsx'
import HomeCards from './component/HomeCards.jsx'
import Joblistings from './component/Joblistings.jsx'

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero  title = "Become a React Dev" subtitle = "Find the React job that fits your skills and needs"/> 
     <HomeCards/>
     <Joblistings/>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
    </section>    
    </>
  )
}

export default App