import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import './App.css'
import Home from './Home/Home'
import ProjectPage from './Project/ProjectPage'
import ResumePage from './Resume/ResumePage'
import Copywriting from './Copywriting/Copywriting'
import Email from './Copywriting/Email'
import Ebook from './Ebook/Ebook'
import GraphicDesign from './Graphic-Design/GraphicDesign'
import EbookDownload from './Ebook/EbookDownload'

const AppOutlet = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppOutlet/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/projects",
        element: <ProjectPage/>
      },
      {
        path: "/Resume",
        element: <ResumePage/>
      },
      {
        path: "/Email",
        element: <Copywriting/>
      },
      {
        path: "/Email/:id",
        element: <Email/>
      },
      {
        path: "/Ebook",
        element: <Ebook/>
      },
      {
        path: "/Ebook/:book/Download",
        element: <EbookDownload/>
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign/>
      }
    ]
  }
], {
  basename: "/"
})

function App() {
  return <RouterProvider router={router}/>
}

export default App
