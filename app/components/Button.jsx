"use client"
import { signIn } from "next-auth/react"
import { FaGoogle } from "react-icons/fa"
const Button = () => {
  return (
    <div onClick={() => (signIn('google')) } className="flex py-3 w-full px-2 justify-center items-center gap-3 cursor-pointer border-[1px] border-black rounded-lg">
      <FaGoogle />
      <p>Continue with Google</p>
    </div>
  )
}

export default Button