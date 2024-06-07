import {motion} from 'framer-motion'

const BannerText = ({title}) => {
    return (
        <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
               <div className="w-10/12 mx-auto h-full flex flex-col  justify-center">
                   <motion.h2 
                    initial={{y:30, opacity:0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{duration: 0.5}}
                   className='text-7xl font-bold text-white'>{title}</motion.h2>
                   <motion.p 
                     initial={{y:40, opacity:0}}
                     whileInView={{y:0, opacity: 1}}
                     transition={{duration: 0.6}}
                     className='mt-10 text-slate-100 text-lg'
                   >
                    stock up on sportwear and limited edition collections on our <br />
                    awesome mid-season sales.
                   </motion.p>
                   <motion.div 
                     initial={{y:50, opacity:0}}
                     whileInView={{y:0, opacity: 1}}
                     transition={{duration: 0.8}}
                     className='mt-10 flex gap-x-5'
                  
                   >
                    <button className='py-3 px-6 bg-slate-200 rounded-full font-semibold text-sm uppercase hover:bg-white duration-200  '>Find Out More</button>
                    <button className='py-3 px-6 bg-slate-200 rounded-full font-semibold text-sm uppercase hover:bg-white duration-200 '>Shop Now</button>
                   </motion.div>
               </div>
        </div>
    )
}


export default BannerText
