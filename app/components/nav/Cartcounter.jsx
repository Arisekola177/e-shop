'use client'
import {FaShoppingBag} from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Cartcounter = () => {
    const productData = useSelector((state) => state.eshop.productData);
  return (
    <div>
        <div className='relative'>
            <div>
            <FaShoppingBag className="text-3xl" />
            </div>
             <span className='absolute top-[-10px] bg-slate-700 text-sm right-[-10px] h-6 w-6 flex items-center justify-center rounded-full text-white'>
            {productData.length}
           </span>
        </div>  
    </div>
  )
}

export default Cartcounter