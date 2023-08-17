"use client";
import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducer";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';

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
  let router = useRouter()
  const [userData, setUserData] = useState<any>()
  const [loading,setLoading] = useState(false)   //loading as liye k user ak dfa click kre or wait kre ye na ho user bar bar click he krta jae or request jti jyn. by defult false ka mtlb k start mai ni ho ri click krne pe ho gey
  
 
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
  // console.log(user,"user data : ", userData)
  // page jb load ho ga tb ye chle ga
  useEffect(() => {
    // agr user login hwa to if use ho ga ni to else ye user k liye bnya h function(onAuthStateChanged) firebase ka function h ye
    onAuthStateChanged(auth,(user:any)=>{
      if(user){
        setUserData({
          displayName:user.displayName,
          email:user.email,
          uuid:user.uid,
          photoUrl: user.photoUrl,
          emailVerified: user.emailVarified
        })
      } else{
        setUserData(null)
      }
    })
  }, [])
  // console.log(userData)
  

  let provider = new GoogleAuthProvider()

  function signUpViaGoogle(){
    setLoading(true)
    return signInWithPopup(auth,provider).then((userData:any)=>{
      if(userData){
        setUserData({
          displayName:userData.user.displayName,
          email:userData.user.email,
          uuid:userData.user.uid,
          photoUrl:userData.user.photoUrl,
          emailVerified: userData.user.emailVarified,
        })
        router.push("/")
      }
      setLoading(false)

    })
  }

  function signUpUser(email:string,password:string){
    setLoading(true) // user jse he click kre ga loading true ho gey 
    createUserWithEmailAndPassword(auth,email,password).then((res:any) =>{
      setLoading(false) // promis jb fulfil ho ga to false ho jae gy
      router.push("/")
    }).catch((res:any)=>{

    })
    setLoading(false)
  }

  

  function signInUser(email:string,password:string){
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password).then((res:any) =>{
      setLoading(false)
      router.push("/")
      }).catch((res:any)=>{

      })
  }

  function LogOut(){
    setLoading(true)
    signOut(auth)
    setLoading(false)
    window.location.reload() // logout hne pe sara page reload ho
  }


  /* 
    name k variable mai jo stor h wo neche cartcontext.provider k value mai dia h or as ka output productDetail
     k (useContext) mai ae ga
     */
  // const name = "adeel"
  return (
    // as mai do cheze hai value provider or value consume yha hm provider use kren gy

    <cartContext.Provider value={{ state, userData, dispatch, signUpUser, signUpViaGoogle, LogOut, signInUser, loading }}>
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
signInWithPopup()


*/