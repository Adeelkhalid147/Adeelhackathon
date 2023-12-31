import BASE_PATH_FORAPI from '@/components/shared/BasePath'
import AllProductsCompo from '@/components/views/AllProduct'
import React from 'react'

async function fetchAllProductData(){
let res =await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`,{
  next:{
    revalidate:60
  }
})
if(!res.ok){
  throw new Error("failed to fetch")
}
return res.json()
}

const Products = async () => {
  const ProdutcData = await fetchAllProductData()

  return (
    <div>
      <AllProductsCompo ProdutcData={ProdutcData}/>
    </div>
  )
}

export default Products