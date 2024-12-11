import React from 'react'
import image from'/heroImg2.avif';
import img from'/heroImg1.avif';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/search')
  }
  return (
    <div className='bg-[#FF5200] w-full flex justify-between h-[25em] lg:h-[33em] text-center py-5'> 
        <img src={img} alt="img" className='h-auto object-fill hidden w-60 lg:inline' />
        <div className='flex flex-col justify-start pt-5 sm:pt-14 items-center space-y-6'>
            <h1 className='text-white px-1 font-bold font-Montserrat text-wrap text-[2rem]  xs:text-[2.7rem] text-center'>Order food & Discover best restaurants. Delight every bite!!</h1>
            <div className='relative '>
              <input type="text" className='py-2 px-2 mx-2 sm:w-80 md:w-96 outline-none rounded-sm ' placeholder='Search for restaurant...' onClick={(handleClick)}/>
              <CiSearch className='absolute right-3 bottom-2 font-bold text-[1.40rem] text-gray-500'/>
            </div>
        </div>
        <img src={image} alt="img2" className='h-auto object-fill hidden w-60 lg:inline' />
    </div>  
  )
}

export default HeroSection; 