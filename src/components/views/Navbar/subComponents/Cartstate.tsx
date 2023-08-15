import { cartContext } from "@/global/Context";
import { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";

const Cartstate = () => {
  const [quantity, setQuantity] = useState(0)
  const isBrowser = () => typeof window !== undefined
  useEffect(()=> {
    let data = localStorage.getItem("Cart") as string;
    setQuantity(JSON.parse(data).length)
  },[])

  if (isBrowser()) {
  return (
    <div className="flex-shrink bg-[#F1F1F1] relative rounded-full h-10 w-10 flex justify-center items-center">
      <div className="absolute bg-[#c86062] h-3 w-3 text-xs rounded-full flex justify-center items-center top-1 right-1">
        {quantity}
      </div>
      <CgShoppingCart size={25} />
    </div>
  );
} else {
  return <p>loading</p>
}
}
export default Cartstate;
