import { cartContext } from '@/global/Context'
import { useContext } from 'react'
import { CgShoppingCart } from "react-icons/cg"

const Cartstate = () => {
    let {state} = useContext(cartContext)
    console.log("adeel state :",state)
  return (
    <div className='flex-shrink bg-[#F1F1F1] relative rounded-full h-10 w-10 flex justify-center items-center'>
    <div className='absolute bg-[#c86062] h-3 w-3 text-xs rounded-full flex justify-center items-center top-1 right-1'>
      {state.cart.length}
    </div>
    <CgShoppingCart size={25}/>
    </div>
  )
}

export default Cartstate