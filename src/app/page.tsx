import BASE_PATH_FORAPI from '@/components/shared/BasePath'
import { responseType } from '@/components/utils/ProductsDataArrayAndType'
import Hero from '@/components/views/Hero'
import Jewellery from '@/components/views/Jewellery'
import NewsLatter from '@/components/views/NewsLatter'
import ProductCarousel from '@/components/views/ProductCarousel'
import ProductsType from '@/components/views/ProductTypes'
import Image from 'next/image'

async function fetchAllProductsData(){
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-09/data/query/production?query=*[_type == "products"]`,
  {
    next:{
    revalidate:60,
  }}
  )
  if(!res.ok){
    throw new Error("Failed to fetch")
  }

  return res.json()
  
}


export default async function Home() {
  let { result }: responseType = await fetchAllProductsData()
  
  return (
    <div>
      <Hero/>
      <ProductsType/>
      <ProductCarousel ProductData={result} />
      <Jewellery/>
      <NewsLatter/>
    </div>
  )
}
