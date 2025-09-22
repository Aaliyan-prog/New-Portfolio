import React from 'react'
import { Link } from 'react-router-dom'

const Copywriting = () => {
  const Emails = [
    {
      id: "Diet-1",
      Diet: "Diet"
    },
    {
      id: "Fitness-&-health-1",
      Diet: "Fitness & health"
    },
    {
      id: "Fitness-Product-1",
      Diet: "Fitness product"
    },
    {
      id: "Money-1",
      Diet: "Money"
    }
  ]

  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='font-[Righteous] font-bold text-[40px] text-theme email-margin-top margin-bottom-1'>Copywriting Emails</h1>
      <hr className='w-[60%] text-white'/>
      <div className="w-[80%] h-[90%] flex flex-row justify-center items-center flex-wrap">
        {Emails.map((email, i) => (
          <Link to={`/email/${email.id}`} key={i} className="w-[250px] h-[140px] flex justify-center items-center border border-white rounded-[20px] email-margin shadow-box">
            <h2 className='font-[Righteous] font-bold text-[16px] text-white'>{email.Diet}</h2>
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default Copywriting