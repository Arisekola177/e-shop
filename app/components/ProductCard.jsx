'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import FormattedPrice from '../utils/FormattedPrice'
import { Rating } from '@mui/material'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({product}) => {
const router = useRouter()
const [show, setShow] = useState(false)

    const productRating = product.reviews.reduce((acc,item) => item.rating + acc, 0) / product.reviews.length
     return (
    <div onClick={() => router.push(`/product/${product.id}`)} className='w-[300px] h-[450px] shadow-lg rounded-lg bg-neutral-50 font-inter cursor-pointer hover:scale-105 duration-200'>
       <div className='aspect-square overflow-hidden flex justify-center items-center'>
        <Image 
          src={product.images[0].image}
          width={200}
          height={200}
          alt={product.name}
          className='object-contain'
        />
                 
       </div>
         <hr />
         <div className='text-center py-6'>
            <h2 className='text-slate-500 text-lg' >{product.name.substring(0,25)}</h2>
         
              <div className='flex flex-col gap-4 justify-center items-center mt-3'>
                <div className='flex gap-4 items-center'>
              <p className='text-red-500'><Rating value={productRating} readOnly  /></p>
              <p className='text-yellow-500'>{product.reviews.length} reviews</p>
              </div>
              <p><FormattedPrice amount={product.price} /></p>
            </div>
           
         </div>
    </div>
  )
}

export default ProductCard