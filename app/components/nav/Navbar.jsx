
import Link from "next/link"
import {FaSearch} from 'react-icons/fa'
import User from "./User";
import Cartcounter from "./Cartcounter";
import Wishcounter from "./Wishcounter";
import { getUser } from "@/actions/getUser";






const Navbar = async() => {
  const currentUser = await getUser()

  return (
    <div className="w-full bg-slate-400 sticky top-0 z-10">
       <div className="w-11/12 mx-auto flex justify-between gap-6 items-center py-6">
         <Link className="font-redress text-xl text-white" href='/'>
           E-Shop
         </Link> 

         <div className="hidden md:block relative flex-grow ">
          <input 
          className="rounded-lg py-3 px-2 w-full  outline-none hover:outline-yellow-400"
          /> 
          <div className="absolute top-4 right-4">
          <FaSearch className=" text-xl" />
          </div>
         
         </div>
          
         <div className="flex items-center gap-6  text-white">
          <Link href='/cart' >
          <Cartcounter />
          </Link>
          <Link href='/wishlist' >
          <Wishcounter />
          </Link>
          </div>
      
          <div>
    
         <User currentUser={currentUser} />
        
         </div>
      </div>
    </div>
  )
}

export default Navbar
