import React from 'react'
import { useMediaQuery } from 'react-responsive';
const Offer = ({key,service,content}) => {
  
  const isSmallDevice = useMediaQuery({ maxWidth: 767 })
  return (
    <div 
    data-aos={isSmallDevice ? undefined : "fade-up"} 
    data-aos-delay="200"
    className='flex flex-col justify-between h-full bg-blue-100 p-6 shadow-xl hover:shadow-md hover:shadow-blue-600 rounded-xl cursor-pointer hover:bg-white transition-all duration-200 ease-in hover:scale-95 ml-6 md:ml-0 m-3' 
    key={key}
  >
    <h2 className='text-center text-xl md:text-3xl font-semibold pt-5'>
      {service}
    </h2>
    <span className='text-center text-sm md:text-lg pt-8 text-slate-700'>
      {content}
    </span>
  </div>
  )
}

export default Offer