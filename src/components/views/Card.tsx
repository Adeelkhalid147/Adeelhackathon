import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import Image from 'next/image'
import imageUrlBuilder from "@sanity/image-url" //function builtin h
import { client } from '../../../sanity/lib/client'
import Link from "next/link";


const builder = imageUrlBuilder(client)   //sanity k sth connection bnane k liye

function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({singleProductData}) => {
  // urlFor(singleProductData.image[0]).width(500).url()
  return (
    <Link href={`/catalog/${singleProductData.slug.current}`}>
    <div className="max-w-sm min-w-[24rem] space-y-3 select-none  hover:scale-110 duration-300">
      <div className="w-full relative">
      <div className="absolute inset-0 z-10" />
        {/* inset-0 charo side se bilkul sth mila de ga  */}
        <Image src={(urlFor(singleProductData.image[0]).width(1000).height(1000).url())} alt={singleProductData.image[0].alt} height={1000} width={1000}/>
      </div>
      <div className="space-y-2 text-gray-600 font-semibold text-lg select-none">
          <h6>{singleProductData.productName}</h6>
          <p>${singleProductData.price}</p>
      </div>
    </div>
     </Link>
  )
}

export default Card


// react slick slider se slider bnta h jis se image move hti h left or right dono trf