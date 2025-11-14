import React from 'react'
import { useState } from 'react'
import {FaMapMarker}  from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Joblisting = ({job}) => {

  const [click, setClick] = useState(false);
  const description = job.description
  const shortDescription = job.description.substring(0,90) + "....."
  return (
    <>
     <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>
              <div className="mb-5">
                {click ? description : shortDescription}
                <button 
                onClick={()=>{setClick(!click)}}
                className='ml-2.5 text-blue-500 cursor-pointer hover:text-blue-900'>{click ? 'show less': 'show more'}</button>
              </div>

              <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className="inline mr-2" />
                  {job.location}
                </div>
                <Link
                  to={`/jobs/${job.id}`}
                  className="h-9 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
        </div>
    </>
  )
}

export default Joblisting