import Link from "next/link"


const Navbar2 = () => {
  return (
    <div className="hidden md:block w-full bg-slate-600">
       <div className="w-10/12 mx-auto flex justify-between items-center py-6 text-white">
          <Link href='#'>
            All
          </Link>
          <Link href='#'>
            Phone
          </Link>
          <Link href='#'>
            Watch
          </Link>
          <Link href='#'>
            Keyboard
          </Link>
      </div>
    </div>
  )
}

export default Navbar2
