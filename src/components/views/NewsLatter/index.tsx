import React from 'react'

const NewsLatter = () => {
  return (
    <div className=' relative text-center space-y-4 min-h-[40vh] md:h-[70vh] lg:min-h-[50rem] flex flex-col justify-center items-center'>
      
      
    <div className='absolute inset-0 -z-10 flex items-center justify-center'>
    <h6 className='text-5xl md:text-9xl leading-[6rem] font-extrabold text-[#ECEDEF]'>Newsletter</h6>
     </div>
    
    <h6 className='text-3xl md:text-4xl font-bold'>Subscribe Our Newsletter</h6>
    <p className='text-lg'>Get the latest information and promo offers directly</p>
    
    <div className='flex gap-4 flex-wrap items-center justify-center'>
      <input type='text' className='border border-gray-500 py-1 px-2 md:px-4 flex flex-grow w-52 md:w-80' placeholder='input email address' />
      <button className='text-white bg-black border border-gray-800 font-bold px-4 py-1'>Get Started</button>

    </div>
  </div>
  )
}

export default NewsLatter