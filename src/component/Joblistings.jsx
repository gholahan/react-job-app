import React from 'react'
import { useState, useEffect } from 'react'
import Joblisting from './Joblisting'
import Spinner from './Spinner'
const Joblistings = ({showAll = false}) => {
  const [jobs,setJobs] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const FetchJobs = async() => {
      try {
        const res = await fetch('http://localhost:4000/jobs');
        const data = await res.json()
        setJobs(data) 
      } catch (err) {
        console.log(`Error fetching data; ${err}`)
      }finally{
        setLoading(false)
      }
    }

    FetchJobs()
  }, [])


   const Jobs = showAll ?  jobs : jobs.slice(0,3)
  return (
    <div>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {showAll ? 'Browse Jobs' : 'Recent jobs'}
        </h2>
          {loading ? (<Spinner loading={loading}/>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Jobs.map((job)=>(
             <Joblisting key={job.id} job = {job}/>
            ))}
          </div>
        )}
      </div>
    </section>
    </div>
  )
}

export default Joblistings