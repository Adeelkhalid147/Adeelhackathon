
import BASE_PATH_FORAPI from '@/components/shared/BasePath'
import { oneProductType, responseType } from '@/components/utils/ProductsDataArrayAndType'
import ProductDetail from '@/components/views/ProductDetail'
import ContextWrapper from '@/global/Context'
import React from 'react'


// browser k top pe jo product open ho us ka name show krne k liye generateMetadata ye function
export async function generateMetadata({ params }:{ params: { slug: string}}){
  const slug = params.slug;

  // fetch data
  const product = await fetch(`https://plngufud.api.sanity.io/v2023-08-09/data/query/production?query=*[_type == 'products']`).then((res:any)=> res.json())
  // find() array pe lgta h or object return krta h 
  const titleToSet:oneProductType = product.result.find((item:oneProductType)=> item.slug.current === slug)
  // console.log(titleToSet.productName)

  return {
    title:titleToSet.productName,
    description:titleToSet.description,
  }
}
// fetch data of product using slug
async function fetchPreviewData(slug:string){
  let res = await fetch(`https://plngufud.api.sanity.io/v2023-08-09/data/query/production?query=*%5B_type+%3D%3D%22products%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D`)
  return res.json()
}


/*
static pages of every product
multiple page bnane k liye getStaticProps (genrateStaticParams) ye function bnya h or return mai array
lga k object mai jo slug likha h wo page ka name h catalog\[slug].  {slug: "american"}
jitni dfa ye likhen gy uthne page bnyn g. jha jha b slug likha h wo as liye k folder
mai page ka name slug h
 */
export async function generateStaticParams(){
  let res = await fetch(`https://plngufud.api.sanity.io/v2023-08-09/data/query/production?query=*[_type == 'products']`,{
    next: {
      revalidate:60
    }
    }).then((res:any)=> res.json())
  // console.log("Res Adeel Khalid :", res)
  return res.result.map((item:oneProductType)=>{slug:item.slug})
   
}


const Catalog = async ({ params }:{params:{slug:string} }) => {
  let data:responseType = await fetchPreviewData(params.slug)
  // console.log("adeel :",data.result)
  return (
    <ContextWrapper>
      <ProductDetail item={data.result[0]}/>
    </ContextWrapper>
  )
}

export default Catalog