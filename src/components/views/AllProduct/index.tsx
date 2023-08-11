"use client"
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { Component } from "react"

interface PropsType {
    productArray: Array<oneProductType>;
  }

export default class AllProductsCompo extends Component<{ ProdutcData:PropsType }> {
    getData = ()=>{
        // console.log(this.props.ProdutcData.productArray[0].price)
    }
    render() {
        return (
            <div onClick={this.getData}>HI</div>
        )
    }}
