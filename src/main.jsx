import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import { HelmetProvider } from 'react-helmet-async';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/project-details/:id',
        element: <ProjectDetails></ProjectDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-roboto'>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
