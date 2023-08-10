import Image from 'next/image'
import React from 'react'

const ProductsType = () => {
  return (
    <div className="py-16 px-2 space-y-5">
        <div className="text-center space-y-3">
        <p className="text-[#0062F5] text-xs font-bold">PROMOTIONS</p>
        <h3 className="text-3xl font-extrabold pb-10">Our Promotions Events</h3>
      </div>
       {/* main grid of all boxs */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
        {/* div 1 girl */}
        <div className="w-full bg-cat1 flex flex-col items-center justify-between sm:flex-row md:col-span-2 col-span-1 px-12">
          <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className="text-xl">For the Summer Season</p>
          </div>
          <div className="w-64">
            <Image
              src={"/promotion1.webp"}
              alt="promotion1"
              height={1000}
              width={1000}
            />
          </div>
        </div>

         {/* div 2 man  */}
         <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center bg-cat3 h-full ">
          <div className="p-6  ">
            <p>Flex Sweatshirt</p>
            <p className="text-xl">
              <del> $100.00 </del> &nbsp;{" "}
              <ins className="no-underline font-bold">$75.00</ins>
            </p>
          </div>
          <div className="w-64">
            <Image
              src={"/promotion2.webp"}
              alt="promotion2"
              height={1000}
              width={1000}
            />
          </div>
        </div>

        {/* div 3 man  */}
        <div className="w-full bg-cat4 row-span-1 md:row-span-2 h-full flex flex-col items-center ">
          <div className="p-6">
            <p>FlexPush Button Bomber</p>
            <p className="text-xl">
              <del> $225.00 </del> &nbsp;{" "}
              <ins className="no-underline font-bold">$190.00</ins>
            </p>
          </div>
          <div className="w-64">
            <Image
              src={"/promotion3.webp"}
              alt="promotion2"
              height={1000}
              width={1000}
            />
          </div>
        </div>

         {/* div 4 text */}
         <div className="w-full py-9 bg-cat2 col-auto md:col-span-2 flex flex-col justify-center items-center text-white space-y-3">
          <h3 className="font-extrabold text-4xl">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button
            aria-label="Redirect user to Dine Week End Sale"
            className="bg-button py-1 px-8 rounded-lg font-medium text-lg tracking-widest"
          >
            DINEWEEKENDSALE
          </button>
        </div>

       </div>
    </div>
  )
}

export default ProductsType