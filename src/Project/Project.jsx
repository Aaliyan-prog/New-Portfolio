import { useState } from "react"
import { ProjectData } from "../Data/Project"
import { Link } from "react-router-dom"
import ProjectPage from "./ProjectPage";

const Project = () => {
  const [projectCategory, setProjectCategory] = useState("All");

  const filterProjects = ProjectData.filter((filItems) => filItems.category === projectCategory)

  const displayProject = 
  projectCategory === "All" ? 
  ProjectData.slice(0, 3) : 
  projectCategory === "Frontend" ? 
  filterProjects.slice(0, 3) :
  projectCategory === "Backend" ? 
  filterProjects.slice(0, 3) :
  projectCategory === "Fullstack" ? 
  filterProjects.slice(0, 3) :
  projectCategory === "Copywriting" ? 
  filterProjects.slice(0, 3) :
  projectCategory === "Author" ? 
  filterProjects.slice(0, 3) :
  projectCategory === "SEO" ? 
  filterProjects.slice(0, 3) :
  projectCategory === "Graphic design" ? 
  filterProjects.slice(0, 3) : 
  filterProjects



  return (
    <div className="w-[100%] min-h-[100%] p-[20px] flex justify-center items-center">
      <div className="w-[80%] flex justify-center items-center flex-col">
        <div className="w-[100%] h-[100px] flex justify-between items-center padding-1">
          <h2 className="text-[38px] text-theme font-bold font-[Righteous] my-heading">My Projects</h2>
          <Link to="/projects" className="min-w-[100px] h-[40px] flex justify-content items-center border border-white rounded-[10px] font-[Righteous] text-white text-[15px] hover:bg-theme hover:border-none transition duration-1000 padding Explore-All">Explore All 
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
            <li className="project-navbar-options" onClick={() => setProjectCategory("Graphic design")}>graphic designer</li>
          </ul>
        </div>
        <div className="w-[100%] flex justify-between items-center flex-wrap">
          {displayProject.slice(0, 3).map((items) => (
              <div className="w-[300px] min-h-[300px] border border-white flex flex-col justify-start items-center rounded-[10px] shadow-box src-project margin-bottom-1">
                <div className="w-[100%] h-[120px] bg-light flex justify-center items-center rounded-tr-[10px] rounded-tl-[10px] border-b border-b-white src-project-title-container">
                <h2 className="font-[Righteous] lg:text-[16px] font-bold text-white src-project-title">{items.title}</h2>
                </div>
                <div className="padding-2 w-[100%] src-project-content">
                  <p className="lg:text-[15px] font-bold text-white font-libertinus desc">{items.desc}</p>
                  <div className="flex flex-row justify-between items-center flex-wrap w-[100%] tags-container">
                    <div className="tags">{items.tags.tag_01}</div>
                    <div className="tags">{items.tags.tag_02}</div>
                    <div className="tags">{items.tags.tag_03}</div>
                  </div>
                  <div className="w-[100%] flex flex-row justify-center items-center project-button-margin">
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

export default Project