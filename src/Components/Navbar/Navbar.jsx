import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { NavbarContext } from '../../Context/NavContext.jsx';
// import "../assets/Responsive/midPhoneResponsive.css"

const Navbar = () => {
  const { active, HandleActive, sidebar, setSidebar } = useContext(NavbarContext);


  return (
    <div className='flex justify-around items-center flex-row w-[100%] h-[80px] bg-background navbar'>
      <div>
        <h1 className='text-[28px] text-white font-[pacifico]'>aaliyan</h1>
      </div>
      <div className={`lg:flex justify-around items-center lg:w-[450px] md:w-[450px]`}>
        <ul
          className={`hidden md:flex flex-row justify-between items-center lg:w-[450px] md:w-[450px]`}>
          <li className='navbar-list'>
            <Link 
              className={`navbar-link hover:rounded-[999px] hover:bg-theme 
              ${active === "home" ? "home" : ""}`}
              onClick={() => HandleActive("home")}
            >Home</Link>
          </li>
          <li className='navbar-list'>
            <Link
              className={`navbar-link hover:rounded-[999px] hover:bg-theme 
              ${active === "project" ? "project" : ""}`}
              onClick={() => HandleActive("project")}
            >Project</Link>
          </li>
          <li className='navbar-list'>
            <Link
              className={`navbar-link hover:rounded-[999px] hover:bg-theme 
              ${active === "resume" ? "resume" : ""}`}
              onClick={() => HandleActive("resume")}
            >Resume</Link>
          </li>
          <li className='navbar-list'>
            <Link
              className={`navbar-link hover:rounded-[999px] hover:bg-theme 
              ${active === "contact" ? "contact" : ""}`}
              onClick={() => HandleActive("contact")}
            >Contact me</Link>
          </li>
        </ul>

        {
          sidebar === true ? (
            <ul 
            className={`${sidebar === true ? "navbar-sidebar-options-bar" : "close-navbar-sidebar-options"}`}>
              <MdCancel 
              className='cancelIcon' 
                onClick={() => setSidebar(false)}/>
              <li className='navbar-list'>
                <Link 
                  className={`navbar-link hover:rounded-[999px] hover:bg-theme 
                  ${active === "home" ? "home" : ""}`} 
                  onClick={() => HandleActive("home")}
                >Home</Link>
              </li>
              <li className='navbar-list'>
                <Link 
                  className={`navbar-link hover:rounded-[999px] hover:bg-theme 
                  ${active === "project" ? "project" : ""}`} 
                  onClick={() => HandleActive("project")}
                >Project</Link>
              </li>
              <li className='navbar-list'>
                <Link 
                  className={`navbar-link hover:rounded-[999px] hover:bg-theme 
                  ${active === "resume" ? "resume" : ""}`} 
                  onClick={() => HandleActive("resume")}
                >Resume</Link>
              </li>
              <li className='navbar-list'>
                <Link 
                  className={`navbar-link hover:rounded-[999px] hover:bg-theme 
                  ${active === "contact" ? "contact" : ""}`} 
                  onClick={() => HandleActive("contact")}
                >Contact me</Link>
              </li>
            </ul>
          ) : (
            <FaBars
              className={`${sidebar === false ? "barIcon" : "hidden"} block md:hidden lg:hidden`} 
                onClick={() => { console.log("Clicked"); setSidebar(true)}}
            />
          )
        }
      </div>
    </div>
  )
}

export default Navbar