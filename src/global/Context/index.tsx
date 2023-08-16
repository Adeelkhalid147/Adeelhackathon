"use client";
import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducer";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
  const [userData, setUserData] = useState<any>()
 
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
firebase work start from here
*/


  let user = auth.currentUser
  useEffect(() => {
    onAuthStateChanged(auth,(user:any)=>{
      
      if(user){
        setUserData({
          displayName:user.displayName,
          email:user.email,
          uuid:user.uid
        })
      } else{
        setUserData(null)
      }
    })
  }, [])
  console.log(userData)
  

  function signUpUser(email:string,password:string){
    return createUserWithEmailAndPassword(auth,email,password)
  }

  

  function signInUser(email:string,password:string){
    return signInWithEmailAndPassword(auth,email,password)
  }

  function LogOut(){
    signOut(auth)
  }


  /* 
    name k variable mai jo stor h wo neche cartcontext.provider k value mai dia h or as ka output productDetail
     k (useContext) mai ae ga
     */
  // const name = "adeel"
  return (
    // as mai do cheze hai value provider or value consume yha hm provider use kren gy

    <cartContext.Provider value={{ state, dispatch, signUpUser }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;





// firebase provided function
/* 
createUserWithEmailAndPassword()
signInWithEmailAndPassword()
signOut()
onAuthStateChanged()
sendEmailVerification()



*/