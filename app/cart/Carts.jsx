'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import Link from 'next/link';

const Carts = ({currentUser}) => {
    const productData = useSelector((state) => state.eshop.productData); 
  return (
    <div className="w-full font-roboto">
    <div className="w-8/12 mx-auto">
    {
         productData.length > 0  ? 
          
         (
          
          <div>
            <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-semibold font-inter">Shopping Cart</h1>
            </div>
            <CartItems productData={productData} currentUser={currentUser} />
            
          </div>
         ):
         (<div className="flex justify-center items-center py-16">
         
         <div className="flex flex-col gap-4 justify-center items-center">
         <h2 className="text-4xl font-bold font-redress">Your Cart is  empty!!</h2>
         <Link className="text-blue-500 hover:underline hover:underline-offset-4 border-blue-700 duration-300" href='/'>Go shopping</Link>
         </div>
        
      </div>)
     }
   </div>
 </div>
  )
}

export default Carts