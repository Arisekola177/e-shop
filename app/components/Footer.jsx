import Image from "next/image"
import Link from "next/link"
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"
import payment from '../../public/images/payment.png'

const Footer = () => {
  return (
    <div className="w-full bg-slate-800">
       <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between py-12">
       <div className="">
         <h1 className="text-2xl font-redress text-white">E-shop</h1>
         <div className="flex flex-col gap-2 text-white mt-3">
         <Link className="text-xs" href='#'>Home</Link>
         <Link className="text-xs" href='#'>About</Link>
         <Link className="text-xs" href='#'>Customer service</Link>
         <Link className="text-xs" href='#'>Contact</Link>
         </div>
       </div>
       <div className="">
       <h1 className="text-2xl font-redress text-white">Categories</h1>
       <div className="flex flex-col gap-2 text-white mt-3">
       <Link className="text-xs" href='#'>Phones</Link>
         <Link className="text-xs" href='#'>Watches</Link>
         <Link className="text-xs" href='#'>Keyboard</Link>
         <Link className="text-xs" href='#'>Tv</Link>
       </div>
       </div>
       <div className="">
       <h1 className="text-2xl font-redress text-white">About us</h1>
       <p className="w-[400px] text-xs text-white leading-6 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis illo dolorum veritatis saepe magni! Omnis, iusto. Similique, ipsa explicabo provident ducimus, delectus voluptas obcaecati quibusdam, consectetur deserunt alias dolorum.</p>
       </div>
      <div>
        <Image 
         src={payment}
         width={300}
         height={300}
       />
       <div className="flex flex-col gap-2 mt-4">
       <h2 className="text-white text-xl font-redress font-semibold">Follow Us</h2>
        <div className="flex items-center gap-2 mt-6">
          <FaFacebook className="text-blue-500 text-2xl" />
          <FaInstagram className="text-red-500 text-2xl" />
          <FaTwitter className="text-blue-500 text-2xl" />
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
