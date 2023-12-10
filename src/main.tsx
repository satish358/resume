import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:'/',
        element: <Home />,
        index: true
      },
      // {
      //   path: '/about',
      //   element: <App/>
      // },
      // {
      //   path: '/project',
      //   element: <App/>
      // },
      // {
      //   path: '/resume',
      //   element: <App/>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
