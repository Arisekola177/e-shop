'use client'
import { useSelector } from "react-redux";
import WishItems from "./WishItems";
import Link from "next/link";
import Resetwish from "./Resetwish";


const WishList = () => {
  const wishList = useSelector((state) => state.eshop.wishList); 
  return (
    <div className="w-full font-roboto">
       <div className="w-8/12 mx-auto py-8">
       {
            wishList.length > 0  ? 
             
            (
             
             <div>
               <div className="flex justify-center items-center py-6">
               <h1 className="text-3xl font-semibold font-inter">WishList</h1>
               </div>
               <WishItems wishList={wishList} />
               <Resetwish />
             </div>
                  
            ):
            (<div className="flex justify-center items-center py-16">
            
            <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl font-bold font-redress">Your wishlist is  empty!!</h2>
            <Link className="text-blue-500 hover:underline hover:underline-offset-4 border-blue-700 duration-300" href='/'>Add to wishList</Link>
            </div>
           
         </div>)
        }
      </div>
    </div>
  )
}

export default WishList
