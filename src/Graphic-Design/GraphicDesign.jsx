import React from 'react'
import { Designes } from '../Data/Graphic-design'

const GraphicDesign = () => {
  return (
    <div className="w-[100%] min-h-[100%] flex justify-center items-center flex-col">
      <h1 className='font-[Righteous] font-bold text-[40px] text-theme email-margin-top margin-bottom-1'>Graphic Design</h1>
      <hr className='w-[60%] text-white margin-2' />
      <div className='w-[100%] min-h-[100%] padding-1 columns-5 design'>
        {Designes.map((design) => (
          <img src={design.image} alt="" />
        ))}
      </div>
    </div>
  )
}

export default GraphicDesign