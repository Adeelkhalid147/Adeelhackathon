import CartComp from '@/components/views/CartParent/cartChild'
import ContextWrapper from '@/global/Context'
import React from 'react'


 async function fatchAllStoreProducts(){
  let res = await fetch(`https://plngufud.api.sanity.io/v2023-08-09/data/query/production?query=*[_type == 'products']`,{
    cache: "no-store",
    })
    
  return res.json()
}


const Cart = async () => {
  let allProductsOfStore = await fatchAllStoreProducts()
  // console.log("abc:",allProductsOfStore)
  return (
    <div>
      {/* @ts-ignore */}
      <CartComp allProductsOfStore={allProductsOfStore.result}/>
      </div>
  )
}

export default Cart