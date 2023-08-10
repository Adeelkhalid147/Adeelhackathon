"use client"
import { NavbarArray,NavbarItemType } from "@/components/utils/NavbarArrayAndTypes";
import Image from "next/image";
import Link from "next/link";
import React,{ useState } from "react";
import { CiSearch } from "react-icons/ci"
import { CgShoppingCart } from "react-icons/cg"
import { HiOutlineChevronDown } from "react-icons/hi"
import DropDown from "./subComponents/DropDown";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosClose } from "react-icons/io"
import Expand from "./subComponents/Expand";

const Navbar = () => {
    const [isNavbarOpen,setNavbarOpen]=useState<boolean>(false)
    const [cartItemNumber,setcartItemNumber] = useState<number>(0)
  return (
     <div className=' sticky top-0 bg-opacityDownColor z-20 backdrop-blur-lg'>
    <div className='py-8 flex justify-between items-center space-x-12'>
        {/* image div */}
      <div className="w-36 flex-shrink-0">
        <Image src={"/Logo.webp"} alt="logo" height={500} width={500} />
      </div>

      <div className='hidden lg:flex justify-between items-center w-full'>
      {/* navbar item  */}
      <ul className="flex space-x-4 font-sans font-normal text-lg">
        {NavbarArray.map((item:NavbarItemType,index)=>(
            <li key={index} className="flex items-center relative rounded-md px-3 py-1 cursor-pointer group">
                <Link href={item.href}>{item.label}</Link>

                {/* dropdown conditions */}
                {item.isDropDown ? <HiOutlineChevronDown className='rotate-180 mt-1 group-hover:rotate-0 duration-300' size={12}  />:""}
                {item.isDropDown &&
                <div className='invisible group-hover:visible py-2 px-6 font-light min-w-[7rem] bg-[#F1F1F1] left-0 absolute top-8'>
                <DropDown item={item}/>
                </div>}
            </li>
        ))}
      </ul>

      {/* search bar */}
      <div className='border rounded-md flex items-center px-1 py-1'>
        <CiSearch/> 
        <input type='text' placeholder='What you looking for' className='ml-1 outline-none text-xs w-60 flex-grow'/>
    </div>

    {/* shopping cart */}
    <div className='flex-shrink bg-[#F1F1F1] relative rounded-full h-10 w-10 flex justify-center items-center'>
    <div className='absolute bg-[#F02D34] h-3 w-3 text-xs rounded-full flex justify-center items-center top-1 right-1'>
        3
    </div>
    <CgShoppingCart size={25}/>
    </div>
    </div>



    {/* navbar burger and cross close icon  */}
    <div onClick={()=>setNavbarOpen(!isNavbarOpen)}>
        {isNavbarOpen?
    <div className='flex lg:hidden'>
        <IoIosClose size={25}/>
    </div>
    :
    
    <div className='flex lg:hidden'>
    <GiHamburgerMenu size={20}/>
    </div>
    }
    </div>
    </div>
    {/* navbar open hwa to ye show kren de */}
    {
        isNavbarOpen && <MobileNavbar/>
    }
    </div>
  );
};

export default Navbar;




const MobileNavbar = () => {
    return (
     <div className='w-full px-6 py-4 bg-[#F1F1F1]'>
         {
         NavbarArray.map((item:NavbarItemType,index:number)=>{
             return (
                   
             <Expand key={index} item={item}/>
                        
             )
         })}
         </div>
    
   )
 }
