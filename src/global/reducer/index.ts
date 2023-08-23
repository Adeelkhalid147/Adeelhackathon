function checkerAndReturner(orgnalData:any, newData:any){
  for(let index = 0; index <orgnalData.length; index++){
      const element = orgnalData[index]
      if(element.productId == newData.productId){
          return element
      }
  }
}




export function cartReducer(state: any, action: any) {
  if (action.payload === "addToCart") {
    let response = checkerAndReturner(state.cart,action.data)
    // console.log(action.data)
    if(!response) {
      // console.log("empty added one :",action.data)
    return {
      // new data add krna h or sth mai phle wala data b add krna h
      cart: [...state.cart, action.data],
    };
  } else {
    let dataToStoreAgain = state.cart.filter((item:any)=> item.productId !== response.productId)
    // console.log("again store data : ", dataToStoreAgain,action.data)
    return {
        cart: [...dataToStoreAgain,action.data]
    }
}
  } else if (action.payload === "removeToCart") {
    return " ";
  }else if(action.payload === "updateToCart") {
    return state
  }
  return state
}
