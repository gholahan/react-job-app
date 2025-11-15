import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../component/Spinner';
const JobPage = () => {
  const {id} = useParams()
   const [job,setJob] = useState(null);
   const [loading, SetLoading] = useState(true)

    useEffect(()=>{
        const fetchJob = async() => {
          try {
            const res =await fetch(`/api/jobs/${id}`)
            const data =await res.json()
            setJob(data)
          } catch (error) {
            console.log("Error fecthing data", error)
          } finally{
            SetLoading(false)
          }
        }
          fetchJob()
         },[])
  return (
    loading ? <Spinner/> :(<>{job.id}</>)
  )
    
}

export default JobPage