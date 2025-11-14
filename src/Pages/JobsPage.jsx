import React from 'react'
import Joblistings from '../component/Joblistings'

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6 '>
        <Joblistings showAll={true}/>
    </section>
  )
}

export default JobsPage