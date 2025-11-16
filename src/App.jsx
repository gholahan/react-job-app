import React from 'react'
import Navbar from './component/navbar'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layout/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage from './Pages/Jobpage'
import {jobLoader} from './Loaders/loader'


const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<MainLayout/>}>
     <Route index element={<HomePage/>}/>
     <Route path= "/jobs" element={<JobsPage/>}/>
     <Route path= "/jobs/:id" element={<JobPage/>} loader= {jobLoader}/>
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