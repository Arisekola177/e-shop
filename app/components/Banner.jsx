'use client'
import Slider from 'react-slick'
import {PiCaretLeftLight, PiCaretRightLight} from 'react-icons/pi'
import Image from "next/image";
import BannerText from './BannerText';
import bannerone from '../../public/images/bannerone.jpg'
import bannertwo from '../../public/images/bannertwo.jpg'
import bannerthree from '../../public/images/bannerthree.jpg'

const Banner = () => {
     const NextArrow = (props) => {
        const {onClick} = props
        return(
            <div className='py-3 bg-slate-100 hover:text-orange-600 hover:bg-white hover:cursor-pointer duration-200 rounded-full 
            text-2xl flex items-center justify-center ml-4  absolute top-[50%] left-0' onClick={onClick}>
          <PiCaretLeftLight />
        </div>
        )
        
     }

     const PrevArrow = (props) => {
        const {onClick} = props
        return(
            <div className='py-3 bg-slate-100 hover:text-orange-600 hover:bg-white hover:cursor-pointer 
            duration-200 rounded-full text-2xl mr-4 flex items-center justify-center absolute z-20 right-0 top-[50%]' onClick={onClick}>
            <PiCaretRightLight />
          </div>
        )
    
     } 
    var settings = { 
        dots: false,
        Infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
  return (
    <div className='relative overflow-hidden'> 
         <Slider {...settings}>
            

            <div className='w-screen h-screen relative'>
                <Image 
                 src={bannerone}
                 alt='banner1'
                 className='w-screen h-screen relative'
                />
                <BannerText title='Best for men' />
            </div>

            <div className='w-screen h-screen relative'>
                <Image 
                 src={bannertwo}
                 alt='banner1'
                 className='w-screen h-screen relative'
                />
                <BannerText title='Best for men' />
            </div>

            <div className='w-screen h-screen relative'>
                <Image 
                 src={bannerthree}
                 alt='banner1'
                 className='w-screen h-screen relative'
                />
                <BannerText title='Best for men' />
            </div>

          
          
         </Slider>
         <div  className='w-full h-44 absolute bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10'/>
         
    </div>
  )
}

export default Banner