import React from 'react'
import { useLocation } from 'react-router-dom'
import { emailArray } from '../Data/Email';

const Email = () => {
  const pathname = useLocation();
  const email = emailArray
  const filter = email.filter((val) => val.url === pathname.pathname)
  console.log(pathname, filter);
  
  return (
    <div className='w-[100%] min-h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='font-[Righteous] font-bold text-[40px] text-theme email-margin-top margin-1'>Email.</h1>
      <hr className='w-[60%] text-white margin-2' />
      <div className="w-[80%] min-h-[800px] flex justify-center items-center">
        {filter.map((filemail) => (
          <div className="w-[60%] min-h-[100%] flex justify-center items-center border border-white rounded-[20px] margin-2 email-container shadow-box">
            <p className='font-lobster font-bold text-[14px] text-white whitespace-pre-wrap padding-3 email-writing'>{filemail.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Email