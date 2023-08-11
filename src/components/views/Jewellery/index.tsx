import Image from 'next/image'
import React from 'react'

const Jewellery = () => {
  return (
    <div className='px-1'>
    {/* top */}
    
    <div className='text-3xl font-extrabold flex justify-start md:justify-end py-4'>
        <h6 className='max-w-lg text-5xl'>Unique and Authentic Vintage Designer Jewellery</h6>
        </div>

        {/* bottom */}
        
        <div className='flex flex-col md:flex-row justify-between py-4 mt-2 gap-5'>



        {/* left */}
            <div className='relative basis-1/2 gap-6 lg:gap-10 grid grid-cols-2 grid-rows-2'>
                <div className='absolute inset-0 -z-10'>
                    <h6 className='text-7xl md:text-9xl leading-[6rem] font-extrabold text-[#ECEDEF]'>Different from others</h6>
                </div>
                <div className='max-w-[11rem] space-y-3'>
                    <h6 className='font-semibold text-xl'>Using Good Quality Materials</h6>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                <div className='max-w-[11rem] space-y-3'>
                    <h6 className='font-semibold text-xl'>100% Handmade Products</h6>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                <div className='max-w-[11rem] space-y-3'>
                    <h6 className='font-semibold text-xl'>Modern Fashion Design</h6>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                <div className='max-w-[11rem] space-y-3'>
                    <h6 className='font-semibold text-xl'>Discount for Bulk Orders</h6>
                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                
                
            </div>




        {/* right */}
            <div className='flex flex-col lg:flex-row basis-1/2'>
                <div className='w-full px-4 lg:px-0 lg:w-80'>
                    <Image src={"/jewellery.webp"} alt='jewellary' height={1000} width={1000}/>
                </div>
                <div className='px-6 space-y-6 md:space-y-4'>
                    <p style={{wordSpacing:"0.6rem"}} className='text-xs md:text-lg lg:max-w-[15rem] h-[88%]'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <button className='text-white bg-black rounded-md py-2 px-6 font-bold'>See All Product</button>
                </div>
            </div>
        </div>
</div>
  )
}

export default Jewellery