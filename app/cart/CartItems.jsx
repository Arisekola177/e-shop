'use client'
import Image from "next/image"
import { FaTimes } from "react-icons/fa"
import FormattedPrice from "../utils/FormattedPrice"
import { decreaseQty, deleteItem, increaseQty } from "../redux/eshopSlice"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import ResetCart from "./ResetCart"
import Link from "next/link"
import CartTotal from "./CartTotal"
const CartItems = ({currentUser}) => {
  const { productData } = useSelector((state) => state.eshop);
    const dispatch = useDispatch()
  return (
    <div className="py-8 grid grid-cols-1">
        <div className="hidden lg:grid grid-cols-4 items-center  font-semibold p-2">
                   <p className="">Product</p>
                   <p className="">Price</p>
                  <p className="">Quantity</p>
                  <p className="">Subtotal</p>
                   </div>
    
        {
            productData.map((item) => (
              <div key={item.id} className="">
                 
                 <div  className="grid grid-cols-4 items-center border-b border-t py-6 ">
                  <div className="flex items-center gap-4">
                  <Link href={`/product/${item.id}`}>
                  <Image 
                    src={item.images[0].image}
                    width={80}
                    height={80}
                    className="aspect-square" 
                   />
                  </Link>
                  
                   <div className="flex flex-col gap-2">
                        <p>{item.name.substring(0,15)}</p>
                        <p>black</p>
                    <FaTimes onClick={() => dispatch(deleteItem(item.id))}  className="text-red-500 cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    
                  <p className="font-bold"><FormattedPrice amount={item.price} /></p>
                  </div>
                  <div>
                      <div className="grid grid-cols-2 border-[1px] border-slate-800 w-[200px] mt-2">
                    <div>
                     <p className="p-2">Quantity</p>
                    </div>
                   <div className="flex items-center text-lg text-white justify-between bg-slate-700">
                   <span onClick={() => dispatch(decreaseQty(item))} className="cursor-pointer p-2  " > <FiChevronLeft className="hover:text-yellow-500" /> </span>
                   <span className="text-sm">{item.quantity}</span>
                  <span  onClick={() => dispatch(increaseQty(item))} className="cursor-pointer p-2"> <FiChevronRight className="hover:text-yellow-500" /></span>
                 </div>
                </div>
                  </div>
                  <div>
                  <p className="font-bold"><FormattedPrice amount={item.price * item.quantity} /></p>
                  </div>
                </div>
               </div>
            ) )
        }
                 <ResetCart />
               <div className="mt-16 flex justify-end items-end w-full ">
                  <CartTotal currentUser={currentUser} />
                </div>
    </div>
  )
}

export default CartItems

 