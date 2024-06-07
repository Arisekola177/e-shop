import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/eshopSlice";
import Link from "next/link";

const ResetCart = () => {
    const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center">
       <button  className="mt-5 bg-red-500 text-white rounded-lg p-2 hover:scale-105 duration-300"
       onClick={() => dispatch(resetCart())}
       >Clear cart</button>
       <div className="flex gap-2 items-center">
         <FaArrowLeft className="text-red-500" />
         <Link className="text-red-500" href='/'>continue shopping</Link>
       </div>
       
    </div>
  )
}

export default ResetCart