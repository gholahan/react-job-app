import React from 'react'
import Navbar from './component/navbar'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import HomePage from './Pages/Homepage'
import MainLayout from './Layout/MainLayout'
import JobsPage from './Pages/JobsPage'


const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<MainLayout/>}>
     <Route index element={<HomePage/>}/>
     <Route path= "/jobs" element={<JobsPage/>}/>
    </Route>
  )) 
  return (
    <>
    <RouterProvider router={router}/>   
    </>
  )
}

export default App