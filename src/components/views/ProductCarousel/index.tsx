import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import React, { FC } from "react";
import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



// slider use kiya h neche jo sare function hai mbl or desktop device k liye
const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}) => {
  
  return (
    <div className="space-y-4">
      <div className="text-center space-y-3">
        <p className="text-[#0062F5] text-xs font-bold">PRODUCTS</p>
        <h3 className="text-3xl font-extrabold pb-10">
        Check What We Have
        </h3>
      </div>
      <div>
        {ProductData.map((item: oneProductType, index: number) => (
          <Card key={index} singleProductData={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;


