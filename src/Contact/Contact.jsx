import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Contact = () => {
  const onSubmitted = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    
    formData.append("access_key", "a1fbf6f4-aec2-465c-8db8-896c9571f70f");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())
  
      if(res.success) {
        console.log("Success: ", res);
        event.target.reset()
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-[100%] min-h-[100vh] flex justify-center items-center src-form-container'>
      <div className="w-[40%] min-h-[80%] flex flex-col padding-1 rounded-[10px] src-form">
        <h2 className='text-white font-[Righteous] text-[30px] font-bold margin-1'>Contact Us</h2>
        <form action="" onSubmit={onSubmitted} className="w-[100%] h-[100%] flex flex-col items-center justify-center padding border border-white rounded-[20px] shadow-box">
          <div className='w-[100%] margin-1'>
            <h3 className='margin-1 margin-top-1 text-[24px] font-bold font-[Righteous] text-white'>Get In Touch</h3>
            <hr className='text-white'/>
          </div>
          <div className='w-[100%] flex flex-row justify-between skill-margin-top'>
            <div className="w-[47%] flex flex-col padding-1">
              <label htmlFor="" className='text-[12px] margin-input text-white font-libertinus font-bold'>Name</label>
              <input type="text" name='name' id='name' className="text-[12px] padding-1 border border-white text-white rounded-[10px]" placeholder='Enter Your Name' required/>
            </div>
            <div className="w-[47%] flex flex-col padding-1">
              <label htmlFor="" className='text-[12px] margin-input text-white font-libertinus font-bold'>Phone</label>
              <input type="number" name="number" id="number" className="text-[12px] padding-1 border border-white text-white rounded-[10px]" placeholder='Enter Your Phone Number' required/>
            </div>
          </div>
          <div className='w-[100%] flex flex-col justify-baseline items-start skill-margin-top padding-1'>
            <label htmlFor="" className='text-white text-[12px] font-bold font-libertinus margin-input'>Email</label>
            <input type="email" name="email" id="email" className="w-[100%] text-white border border-white text-[12px] padding-1 rounded-[10px]" placeholder='Enter Your Email' required/>
          </div>
          <div className='w-[100%] flex flex-col justify-baseline items-start skill-margin-top padding-1'>
            <label htmlFor="" className='text-white text-[12px] font-libertinus font-bold margin-input'>Message</label>
            <textarea className="w-[100%] border border-white rounded-[10px] text-[12px] text-white padding-1" name="message" id="message" rows={5} placeholder='Enter Your Message' required></textarea>
          </div>
          <div className="w-[100%] skill-margin-top padding-1">
            <button type='submit' className="w-[100%] h-[40px] bg-theme text-white text-[14px] border-none rounded-[10px]">Submit</button>
          </div>
        </form>
      </div>
      <div className="w-[40%] min-h-[80%] src-contact-content">
        <h3 className='font-[Righteous] font-bold text-[14px] text-white margin-1'>If You have any questions feel free to ask us</h3>
        <div className="w-[100%] h-[20%] flex flex-row justify-around padding-2 border border-white rounded-[10px] margin-1 shadow-box">
          <div className="w-[50%] text-center border-r-2 border-white flex flex-row justify-center items-center gap-1.5">
            <FaPhoneAlt />
            <h2 className='font-[Righteous] font-bold text-[14px] text-white'>Phone: <span className='font-normal text-[14px] text-white'>+92 319 1084949</span></h2>
          </div>
          <div className="w-[50%] text-center flex flex-row justify-center items-center gap-1.5">
            <MdEmail />
            <h2 className='font-[Righteous] font-bold text-[14px] text-white'>Gmail: <span className='font-normal text-[14px] text-white'>aaliyandev786@gmail.com</span></h2>
          </div>
        </div>
        <div className="w-[100%] h-[20%] flex flex-row justify-around padding-2 border border-white rounded-[10px] shadow-box">
          <div className="w-[100%] h-[100%] flex justify-between items-center padding-1">
            <Link to={"https://github.com/Aaliyan-prog"}>
              <FaGithub className='text-[20px]'/>
            </Link>
            <Link to={"https://www.linkedin.com/in/aaliyan-ahmed-sheikh"}>
              <FaLinkedin className='text-[20px]' />
            </Link>
            <Link to={"https://www.facebook.com/share/169AfSniyH"}>
              <FaFacebook className='text-[20px]' />
            </Link>
            <Link to={"https://www.instagram.com/aaliyan_as786?igsh=MTNkc3U0djNoODdjbQ=="}>
              <FaInstagram className='text-[20px]' />
            </Link>
            <Link>
              <FaDiscord className='text-[20px]' />
            </Link>            
            <Link to={"https://x.com/Aaliyan_AShaikh?t=iw5gFa5NJB7yZB5_6nsgFA&s=09"}>
              <FaXTwitter className='text-[20px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact