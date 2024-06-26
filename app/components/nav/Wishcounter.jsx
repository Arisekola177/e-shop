'use client'
import {FaHeart} from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Wishcounter = () => {
    const wishList = useSelector((state) => state.eshop.wishList);
  return (
    <div>
        <div className='relative'>
            <div>
            <FaHeart className="text-4xl" />
            </div>
             <span className='absolute top-[-10px] bg-slate-700 text-sm right-[-10px] h-6 w-6 flex items-center justify-center rounded-full text-white'>
            {wishList.length}
           </span>
        </div>  
    </div>
  )
}

export default Wishcounter