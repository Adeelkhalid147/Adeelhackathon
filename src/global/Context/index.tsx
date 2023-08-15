"use client";
import { ReactNode, createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer";

{
  /* 
 firebase mai context ko use kren gy.pori app mai jo chez zyda chle gy wo 
 as mai store kren gy
 */
}
{
  /* 
jse hm useState ko use krte hai wse he createContext b ak hook h productDetail ko hm ne 
return se le k end tk wrap kr dia h 
*/
}
{
  /* 
context consume ko hm use kren gy productDetail mai ContextVal as variable ko hm
productDetail mai jha use kren gy waha argument mai dy dn gy
*/
}
export const cartContext = createContext<any>(null);

interface indexForError {
  [key: string]: string;
}

const ContextWrapper = ({ children }: { children: ReactNode }) => {
 
  const iniatizilerOfCart = {
    cart: [],
  };

  // old product and new products quantity add hte jyn gy.dispatch se valus set or state se value get krte
  const [state, dispatch] = useReducer(cartReducer, iniatizilerOfCart);
  // console.log("want to be update: ",state)
  useEffect(()=>{
    let cart = localStorage.getItem("cart") as string;
    if(cart === null){
      localStorage.setItem("cart",JSON.stringify(state.cart))
    }else{
      iniatizilerOfCart.cart =JSON.parse(cart)
    }
  })

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart))
  },[state.cart])
  /* 
    name k variable mai jo stor h wo neche cartcontext.provider k value mai dia h or as ka output productDetail
     k (useContext) mai ae ga
     */
  // const name = "adeel"
  return (
    // as mai do cheze hai value provider or value consume yha hm provider use kren gy

    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;
