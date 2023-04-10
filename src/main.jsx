import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import AppliedJobs from './components/AppliedJobs'


const router = createBrowserRouter([

  {
    path:'/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/AppliedJobs',
        element:<AppliedJobs></AppliedJobs>,
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
