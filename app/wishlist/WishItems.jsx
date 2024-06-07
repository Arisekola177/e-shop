import { FaTimes } from "react-icons/fa"
import { addToCart, deleteWish } from "../redux/eshopSlice"
import Image from "next/image"
import FormattedPrice from "../utils/FormattedPrice"
import { useDispatch } from "react-redux"
import toast, { Toaster } from "react-hot-toast";
import Resetwish from "./Resetwish"

const WishItems = ({wishList}) => {
    const dispatch = useDispatch()
  return (
    <div>
        
    
        {
            wishList.map((item) => (
              <div key={item.id} className="gap-6">
                 <div  className="flex justify-between items-center border-b border-t py-6 ">
                  <div>
                     <FaTimes onClick={() => dispatch(deleteWish(item.id))}  className="text-red-500 cursor-pointer" />
                  </div>
                  <div>
                   <Image 
                    src={item.images[0].image}
                    width={80}
                    height={80}
                   />
                  </div>
                  <div>
                   <p>{item.name.substring(0,15)}</p>
                  </div>
                  <div> 
                  <p className="font-bold"><FormattedPrice amount={item.price} /></p>
                  </div>
                  <div>
                    <button className="bg-slate-800 rounded-lg text-white p-2"
                     onClick={() => dispatch(addToCart(item)) &&
                        toast.success(
                          `${item.name.substring(0, 25)} added successfully!`
                        )}
                    >Add to cart</button>
                  </div>
                </div>
           
               </div>
            ) )
        }
          <Toaster />
    </div>
  )
}

export default WishItems