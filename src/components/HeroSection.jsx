import React from 'react'
import image from'../../public/heroImg2.avif';
import img from'../../public/heroImg1.avif';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {

  const navigate = useNavigate();
  function handleClick(){
    navigate('/search')
  }
  return (
    <div className='bg-[#FF5200] w-full flex justify-between h-[34em]  text-center py-5'> 
        <img src={img} alt="img" className='h-auto w-60 object-fill ' />
        <div className='flex flex-col justify-center items-center space-y-6'>
            <h1 className='text-white font-bold font-Montserrat text-wrap text-[2.7rem] text-center'>Order food & Discover best restaurants. Delight every bite!!</h1>
            <div className='relative '>
              <input type="text" className='py-2 px-2 w-96 outline-none rounded-sm ' placeholder='Search for restaurant...' onClick={(handleClick)}/>
              <CiSearch className='absolute right-3 bottom-2 font-bold text-[1.40rem] text-gray-500'/>
            </div>
        </div>
        <img src={image} alt="img2" className='h-auto w-60 object-fill' />
    </div>  
  )
}

export default HeroSection; 