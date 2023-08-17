
import React from "react";
import Image from "next/image";
import { cartContext } from "@/global/Context";
import Link from "next/link";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";




const SubComp = () => {
  let { userData, LogOut,loading, sendEmailVerificationCode,updateUserNamePhoto } = useContext(cartContext)
  const [isSideProfileOpen, setIsSideProfileOpen] = useState(false)
  return ( 
    <div className="overflow-hidden">
    {userData ? 
     <div onClick={() => setIsSideProfileOpen(true)} className="cursor-pointer mr-4 md:mr-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-700 bg-white">
      {
        userData.photoUrl ?
        <Image className="object-cover" height={300} width={300} src={userData.photoUrl} alt={userData.displayName}/>
        : userData.displayName ?
        <p className="text-sm">{userData.displayName.slice(0,1)}</p>
        :
         <p className="text-sm">A</p>
      }

     </div>
      :
        <div className='flex gap-2'>
        <Link href={"/signup"} className='text-white border border-gray-400 px-4 py-1'>SignUp</Link>
        <Link href={"/signin"} className='text-white border border-gray-400 px-4 py-1'>SignIn</Link>
        </div>
      }

      {/* drop Down bar  */}
      <div className={`${isSideProfileOpen ? "visible translate-y-0" : "invisible translate-y-full"} duration-500 py-4 px-4 w-72 md:w-80 bg-gray-600 h-full absolute right-0 top-0 bottom-0 z-50`}>
      <div className="flex justify-between py-2 items-center">
            <h6 className="font-semibold text-xl">Profile</h6>
            <div className="cursor-pointer" 
            onClick={() => setIsSideProfileOpen(false)}
            >
            <RxCross2 size={26}/>
          </div>
          </div>
          <button className="w-full border rounded-lg p-2" onClick={LogOut}>Log Out</button>
      </div>




      </div>
  )
};

export default SubComp;
