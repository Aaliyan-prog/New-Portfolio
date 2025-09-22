import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Skill } from '../Data/Skill';

const Resume = () => {
  return (
    <div className="w-[100%] min-h-[100vh] p-[20px] flex justify-center items-center">
      <div className="w-[80%] flex justify-center items-center flex-col">
        <div className="w-[100%] h-[100px] flex justify-between items-center padding-1">
          <h2 className="text-[38px] text-theme font-bold font-[Righteous] my-heading">My Resume</h2>
          <Link to="/Resume" className="min-w-[100px] h-[40px] flex justify-content items-center border border-white rounded-[10px] font-[Righteous] text-white text-[15px] hover:bg-theme hover:border-none transition duration-1000 padding Explore-All">Explore All
            <div className="svg-margin">
              <svg width="12px" height="12px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z" fill="#fff"></path> </g></svg>
            </div>
          </Link>
        </div>
        <div className="w-[100%] skill justify-items-center">
          {Skill.slice(0, 12).map((skills) => (
            <div className='w-[300px] h-[130px] border border-white rounded-[20px] resume-margin shadow-box src-skill-resume'>
              <div className="w-[100%] flex justify-between flex-row">
                <p className='text-white text-[20px] font-[Righteous] font-normal src-skill-title'>{skills.skill}</p>
                <div className="flex flex-col items-center">
                  <p className='text-white text-[18px] font-[Righteous] font-normal src-skill-experience'>{skills.Experience}</p>
                  <p className="text-white text-[12px] font-libertinus font-normal">Years Experience</p>
                </div>
              </div>
              <div className="flex justify-between items-center flex-row margin-top">
                <p className='font-[Righteous] font-normal text-white text-[12px]'>Beginner</p>
                <p className='font-[Righteous] font-normal text-white text-[12px]'>Intermediate</p>
                <p className='font-[Righteous] font-normal text-white text-[12px]'>Pro</p>
              </div>
              <div className="w-[100%] h-[10px] bg-white margin-top rounded-[999px] overflow-hidden">
                {
                  skills.Level === "Pro" ? (
                    <div className="w-[100%] h-[100%] bg-theme"></div>
                  ) : skills.Level === "Intermediate" ? (
                      <div className="w-[50%] h-[100%] bg-theme"></div>
                  ) : (
                    <div className="w-0 h-0"></div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume