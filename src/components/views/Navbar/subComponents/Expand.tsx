
import { NavbarItemType } from '@/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import React, { FC } from 'react'
import { useState } from "react"
import {HiOutlineChevronDown} from "react-icons/hi"

const Expand: FC<{item:NavbarItemType}> = ({ item }) => {
    const [isExpended,setExpended] = useState(false)
    // time duration ko set krne k liye jn main heading pe click ho ga to state bnyen gy neche wali
    const [isTimeOut,setTimeOut] = useState<boolean>(false)
    // click krne pe half second k delay se show ho dropdown arrow ka data us k liye function
    function handelExpand(){
        setExpended(!isExpended);
        setTimeout(() => {
            setTimeOut(!isTimeOut);
        }, 100);  
    }
  return (
    <li className={`${isExpended?"h-48":"h-12"} list-none duration-300`}>
    <div onClick={handelExpand} className='flex py-2 px-3 items-center rounded-md duration-300 hover:bg-orange-100  justify-between'>
    <Link href={item.href}>{item.label}</Link>
    {item.isDropDown?<HiOutlineChevronDown className='-rotate-180 mt-1 group-hover:rotate-0 duration-300' size={12}  />:""}
    </div>

    <div className='flex flex-col space-y-1 mt-2'>
     {isTimeOut && item.dropDownData?.map((subItem:NavbarItemType,index:number)=>(
        <Link className='hover:bg-gray-50 px-5 py-1 rounded-md duration-300' href={subItem.href} key={index}>
            {subItem.label}
            </Link>
    ))}
    </div>
    </li>
  )
}

export default Expand