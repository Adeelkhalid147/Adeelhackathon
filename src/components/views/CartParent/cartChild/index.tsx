"use client"
import { oneProductType } from '@/components/utils/ProductsDataArrayAndType'
import { cartContext } from '@/global/Context'
import Image from 'next/image'
import {  useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { RiDeleteBinLine } from 'react-icons/ri'



const CartComp =  ({allProductsOfStore}:{allProductsOfStore:Array<oneProductType>}) => {
 const [allProductsForCart, setAllProductsForCart] = useState<any>()

 useEffect(() => {
    let stateStorage:any = localStorage.getItem("cart") as string
    stateStorage = JSON.parse(stateStorage)
    if(stateStorage){
        let data = allProductsOfStore.filter((item:oneProductType) => {
            for (let index = 0; index < stateStorage.length; index++) {
                const element = stateStorage[index];
                if(element.productId === item._id){
                    return true
                }
            }
        })
        setAllProductsForCart(data)
    }

 }, [])
 
  
  return (
    <div className='py-10 px-4 md:px-10'>
        {/* <Toaster/> */}
         {/* first */}
    <div className='py-6'>
      <h1 className='text-xl font-semibold text-gray-800'>Shopping Cart</h1>
    </div>
    {/* second  */}
    <div className='flex flex-col lg:flex-row gap-6'>
    <div className='flex flex-col basis-[69%] gap-2'>

    {allProductsForCart && allProductsForCart.map((item:oneProductType,index:number) => (
    <div key={index}  className='flex flex-shrink-0 gap-6'>
    <div className='w-56 '>
    
    <Image className='rounded-lg' src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png" alt="Nothing" height={1000} width={1000} />
  </div>

  <div className='space-x-3 space-y-1 md:space-y-3 w-full'>
    <div className='flex justify-between'>
    <h2 className='md:text-xl text-gray-700 font-light'>{item.productName}</h2>
    <div className='cursor-pointer'>
    <RiDeleteBinLine size={25}/>
    </div>

    </div>
    <p className='text-gray-400 font-medium'>{item.productTypes[0] ? item.productTypes[0] : "All"}</p>
    <h3 className='text-sm md:text-base'>Delivery Estimation</h3>
    <h4 className='text-yellow-400 font-semibold md:text-xl'>5 Working Days</h4>
      <div className='flex justify-between'>
      <p className='font-semibold md:text-lg'>${item.price}</p>
      <div className="flex gap-2 items-center text-lg">
        <button
        // onClick={()=>handleDecrementByOne(item._id,item.price)}
        className='select-none flex justify-center items-center w-9 h-9 rounded-full bg-gray-100 cursor-pointer'
        >
          -
          </button>
          <p>5</p>
          <button
        //   onClick={() => handleIncrementByOne(item._id,item.price)}
        //   disabled={loading}
          className='select-none flex justify-center items-center w-9 h-9 rounded-full border border-gray-700 cursor-pointer'
          >
            +
          </button>
        </div>
      </div>


  </div>
  </div> 
    ))
}
</div>
 
    





    <div className='basis-1/4 space-y-6 px-6'>
    <h6 className='font-semibold text-lg'>Order Summary</h6>
  <div className='flex justify-between'>
    <p className='text-lg font-light'>Quantity:</p>
    <p className=''> Products</p>
  </div>
  <div className='flex justify-between'>
    <p className='text-lg font-light'>Subtotal:</p>
    <p className=''>$ Total price</p>
  </div>
  <button 
//   onClick={handleProcessCheckout}
  className='text-white bg-black border border-gray-800 font-bold px-4 py-2 w-full'>
    Process to Checkout
    </button>
    </div>
    </div>







    </div>
  )
}

export default CartComp

let arrayForLoading = [1, 2, 3, 4]