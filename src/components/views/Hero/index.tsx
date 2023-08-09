import Image from 'next/image'
import { herogirl } from "@/components/assets"
import { brand1 } from "@/components/assets"
import { brand2 } from "@/components/assets"
import { brand3 } from "@/components/assets"
import { brand4 } from "@/components/assets"
import React from 'react'
import {CgShoppingCart} from "react-icons/cg"
// import herocard from "@/components/views/Herodata"
const Hero = () => {
    const btnText="Start\n Shopping";
  return (
    <div className='py-5 flex justify-between items-center px-2'>
        {/* Right side */}
        <div className='max-w-sm space-y-5'>
            <button
            aria-label="redirect the user sale page"
            className='mb-8 bg-[#E1EDFF] text-[#2517FF] font-sans font-semibold rounded-md text-xl px-6 py-2'>Sale 70%</button>
            {/* {herocard.map((data:any,index:number)=>( */}
                <div>
            <h1 className='font-sans font-bold text-5xl md:text-6xl'>An Industrial Take on Streetwear</h1>
            <p className='text-[#BCBCBC] py-4'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            </div>
            {/* ))} */}
            <button
            aria-label="redirect the user sale page"
            className='bg-[#212121] flex gap-3 items-center justify-center text-lg ring-1 ring-neutral-400 font-semibold font-sans py-3 px-5 text-white'>
                <CgShoppingCart/>
                {/* whitespace pre lgne se line break ho gey ni to ni ho gey */}
                <p className='whitespace-pre leading-5'>{btnText}</p>
                </button>
                <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-x-5'>
                <div>
                    <Image src={brand1} alt='bazaar' height={35} width={100}/>
                </div>
                <div>
                    <Image src={brand2} alt='bustle' height={35} width={100}/>
                </div>
                <div>
                    <Image src={brand3} alt='versace' height={35} width={100}/>
                </div>
                <div>
                    <Image src={brand4} alt='instyle' height={35} width={100}/>
                </div>
                </div>
        </div>





        {/* Left side */}
        <div className='bg-[#ffece3] rounded-full basis-1/2 hidden md:flex'>
            <Image src={herogirl} alt='herogirl' height={600} width={600} />
        </div>
    </div>
  )
}

export default Hero