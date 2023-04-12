import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import AppliedJobs from './components/AppliedJobs'
import JobDetails from './components/JobDetails'
import Statistics from './components/Statistics'
import ErrorPage from './components/ErrorPage'


const router = createBrowserRouter([

  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/featuredData.json')
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/AppliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        
      },

      {
        path: "/jobDetails/:jobID",
        element: <JobDetails></JobDetails>,
        loader: async({params}) => {
          const res = await fetch(`/featuredData.json`)
          const data = await res.json()
          const single = data.find(job => job.id == params.jobID)
          return single;
        }

      },

      {
        path: '/blog',
        element: <Blog></Blog>,
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
