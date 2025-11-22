import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layout/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage from './Pages/Jobpage'
import {jobLoader} from './Loaders/loader'
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage'



const App = () => {

const submitJob = async (jobData) => {
  //add new job
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'content-type': 'applicaion/json'
    } ,
    body: JSON.stringify(jobData)
   })
   return;
}


// delete a job
const deleteJob = async (jobId) => {
  const res = await fetch(`/api/jobs/${jobId}`, {
    method: 'DELETE',   
   })
   return;
}
// update job

const updateJob =async (updateData) => {
  const res = await fetch(`/api/jobs/${updateData.id}`,{
    method : "PUT",
    headers : {
      'content-type':'applications/json'
    },
    body : JSON.stringify (updateData)
  })
}


  const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<MainLayout/>}>
     <Route index element={<HomePage/>}/>
     <Route path= "/jobs" element={<JobsPage/>}/>
     <Route path= "/jobs/:id" element={<JobPage deleteJob = {deleteJob}/>} loader= {jobLoader}/>
     <Route path= "/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader= {jobLoader}/>
     <Route path= "/add-job" element={<AddJobPage addJobSubmit = {submitJob}/>} />
     <Route path= "*" element={<NotFoundPage/>}/>    
   </Route>
  )) 
  return (
    <>
    <RouterProvider router={router}/>   
    </>
  )
}

export default App