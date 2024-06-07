'use client'

import { Rating } from "@mui/material"
import { useState } from "react";
import Image from "next/image";
import SetColor from "@/app/utils/SetColor";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {  addToCart, addToWish, } from "@/app/redux/eshopSlice";



const ProductDetails = ({product}) => {
  const [selectedImage, setSelectedImage] = useState(product.images.length > 0 ? product.images[0].image : '');

  const productRating = product.reviews.reduce((acc,item) => item.rating + acc, 0) / product.reviews.length
  const dispatch = useDispatch()
  const handleColorClick = (image) => {
    setSelectedImage(image);
  };

  return (
     <div className='font-roboto'>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex gap-6">
          <div className="flex flex-col gap-3 mt-4">
              {product.images.map((image, index) => (
              <img
               key={index}
               src={image.image}
               alt={`Color option ${index + 1}`}
               onClick={() => handleColorClick(image.image)}
               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
               />
              ))}
              </div>
              <div className="">

              <Image 
                src={selectedImage}
                width={400}
                height={400}
             />
              </div>
          </div>
        <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-medium ">{product.name}</h2>
                    <div className="flex items-center gap-3">
                    <p className='text-red-500'><Rating value={productRating} readOnly  /></p>
                     <p className='text-yellow-500'>{product.reviews.length} reviews</p>
                    </div>
               
                     <p className="text-sm leading-6">{product.description}</p>
                    <div className="flex items-center gap-6">
                       <p><span className="uppercase font-semibold">Category</span>: {product.category}</p>
                       <p><span className="uppercase font-semibold">Brand</span>: {product.brand}</p>
                     </div>
                     <div>{
                          product.inStock ? (<p className="text-green-500">In-Stock</p>) : (<p className="text-red-500">Out-of-Stock</p>)
                         }
                      </div>
                     <div>
                      <SetColor productImages={product.images}  handleColorClick={handleColorClick} />
                      </div>
                 
               <div className="flex gap-4 items-center mt-4">
                
                  
                    <div className="bg-slate-900 w-[300px] rounded-lg text-center"> 
                    <button className=" py-3 px-4 text-white"
                     onClick={() => dispatch(addToCart(product)) &&
                     toast.success(
                       `${product.name.substring(0, 25)} added successfully!`
                     )}
                    > Add to Cart</button>
                </div>
                  
               
              
             <div className="bg-yellow-600 w-[300px] rounded-lg text-center">
                <button className="py-3 px-4 text-white"
                onClick={() => dispatch(addToWish(product)) &&
                  toast.success(
                    `${product.name.substring(0, 25)} added successfully!`
                  )}
                >Add to wishlist</button>
              </div>
              </div>
             </div>
         </div>
           <Toaster />
     </div>
  )
}

export default ProductDetails






