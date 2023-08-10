import React from 'react'

const ProductCarousel = ({ProductData}:any) => {
    
  return (
    <div>{ProductData[0].productName}</div>
  )
}

export default ProductCarousel