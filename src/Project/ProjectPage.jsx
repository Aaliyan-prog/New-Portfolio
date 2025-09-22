import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ProjectData } from '../Data/Project';

const ProjectPage = () => {
  const [projectCategory, setProjectCategory] = useState("All");
  const pathname = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])

  const filterProjects = ProjectData.filter((filItems) => filItems.category === projectCategory)

  const displayProject = 
  projectCategory === "All" ? 
  ProjectData : 
  projectCategory === "Frontend" ? 
  filterProjects :
  projectCategory === "Backend" ? 
  filterProjects :
  projectCategory === "Fullstack" ? 
  filterProjects :
  projectCategory === "Copywriting" ? 
  filterProjects :
  projectCategory === "Author" ? 
  filterProjects :
  projectCategory === "SEO" ? 
  filterProjects :
  projectCategory === "Graphic design" ? 
  filterProjects : 
  filterProjects

  return (
    <div className="w-[100%] min-h-[100vh] p-[20px] flex justify-center items-center">
      <div className="w-[80%] flex justify-center items-center flex-col">
        <div className="w-[100%] h-[100px] flex justify-between items-center padding-1">
          <h2 className="lg:text-[38px] text-theme font-bold font-[Righteous] src-pro-heading">My Projects</h2>
          <Link to="/" className="min-w-[100px] h-[40px] flex justify-content items-center border border-white rounded-[10px] font-[Righteous] text-white lg:text-[15px] hover:bg-theme hover:border-none transition duration-1000 padding sm:text-[12px] xs:text-[12px] xss:text-[12px]">Get Back
            <div className="svg-margin">
              <svg width="12px" height="12px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z" fill="#fff"></path> </g></svg>
            </div>
          </Link>
        </div>
        <div className="w-[100%] margin-1">
          <ul className="flex flex-row justify-between items-center flex-wrap w-[100%] h-[140px] border border-white rounded-[10px] padding transition duration-1000 shadow-box">
            <li className="project-navbar-options" onClick={() => setProjectCategory("All")}>All</li>
            <li className="project-navbar-options" onClick={() => setProjectCategory("Frontend")}>Frontend</li>
            <li className="project-navbar-options" onClick={() => setProjectCategory("Backend")}>Backend</li>
            <li className="project-navbar-options" onClick={() => setProjectCategory("Fullstack")}>Full stack</li>
            <li className="project-navbar-options" onClick={() => setProjectCategory("copywriting")}>copywriting</li>
            <li className="project-navbar-options" onClick={() => setProjectCategory("SEO")}>SEO</li>
            <li className="project-navbar-options" onClick={() => setProjectCategory("Author")}>Author</li>
            <li className="project-navbar-options" onClick={() => setProjectCategory("graphic designer")}>graphic designer</li>
          </ul>
        </div>
        <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {displayProject.map((items) => (
            <div className="w-[300px] min-h-[300px] border border-white flex flex-col justify-between items-center rounded-[10px] project-page-project margin-bottom-1 shadow-box">
              <div className="w-[100%] h-[120px] bg-light flex justify-center items-center rounded-tr-[10px] rounded-tl-[10px] border-b border-b-white">
                <h2 className="font-[Righteous] text-[16px] font-bold text-white">{items.title}</h2>
              </div>
              <div className="padding-2 w-[100%]">
                <p className="text-[15px] font-bold text-white font-libertinus">{items.desc}</p>
                <div className="flex flex-row justify-between items-center flex-wrap w-[100%] tags-container">
                  <div className="tags">{items.tags.tag_01}</div>
                  <div className="tags">{items.tags.tag_02}</div>
                  <div className="tags">{items.tags.tag_03}</div>
                </div>
                <div className="w-[100%] flex flex-row justify-around items-center project-button-margin">
                  <Link to={items.Link} className="projects-button hover:bg-theme hover:border-none transition duration-1000">{items.button_val}</Link>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectPage