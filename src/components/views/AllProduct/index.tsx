"use client";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card";

interface PropsType {
  productArray: Array<oneProductType>;
}

export default class AllProductsCompo extends Component<{
  ProdutcData: PropsType
}> {
  // as API mai 10 se 20 tk ka data fetch ho k samne ae ga
  start: number = 10;
  end: number = 20;

  // state by defult h as ho ga ye k (ProdutcData) ye peche se 10 item ayn gy
  // or 10 se 20 k sth mil k state k object mai show hn gy mtlb k dono ak sth yha
  // show hn gy pechle wale or mojoda
  state: { items: Array<oneProductType>, hasMore: boolean } = {
    items: [...this.props.ProdutcData.productArray],
    hasMore: true, // ye by default true ho ga
  };
  fetchDataFromApiGradully = async (start: number, end: number) => {
    const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`);
    const dataToCheckAndSend = await res.json();
    if (dataToCheckAndSend.productArray === "Not Found") {
      this.setState({ hasMore: false });
    }
    return dataToCheckAndSend;
  };
  getData = async () => {
    let allTogether = await this.fetchDataFromApiGradully(this.start, this.end);
    if (allTogether.productArray !== "Not Found") {
      this.setState({
        items: this.state.items.concat(allTogether.productArray),
      });
    }else{
        this.setState({
            hasMore: false
        })
    }
    this.start = this.start + 10;
    this.end = this.end + 10;
    // console.log(this.props.ProdutcData.productArray[0].price)
  };
  render() {
    return (
      <div onClick={this.getData}>
        <InfiniteScroll
          dataLength={this.state.items.length} //This is important field to render the next data
          next={this.getData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="content-center justify-center grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          
          {this.state.items.map((item:oneProductType,index:number) => (
            <Card key={index} singleProductData={item}/>
          ))}
        </InfiniteScroll>
        </div>
     
    );
  }
}

// https://www.npmjs.com/package/react-infinite-scroll-component
// InfiniteScroll ka sara data yha se copy kiya h or variable apne dale hai
// hm ne class use k hoe h as liye this. (this.dot) lga rhe
