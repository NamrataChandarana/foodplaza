import React, { useCallback, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import useGetLocations from '../utils/useGetLocations';
import { useDispatch } from 'react-redux';
import { debounce, getLocation } from '../utils/functions';

const Location = ({setIsOpen}) => {

  const [locationInput, setLocationInput] = useState("Surat");
  const locations = useGetLocations(locationInput);
  const dispatch = useDispatch();

  function handleKeyDown(e){
      if(e.target.value !== ''){
        setLocationInput(e.target.value);
      }
  }  

  const debounceHandler = useCallback(
    debounce(handleKeyDown,300)
  )

  return (
  <>
      <div className='h-[100vh] w-[20rem] md:w-[30rem] bg-white shadow-2xl fixed left-0 top-0 z-10'>
          <div className='px-10 md:py-5 py-3 text-lightBlue text-lg md:text-2xl'onClick={() => setIsOpen(false)}>
              <IoMdClose />
          </div>
          <div>
              <input type="text" placeholder='Search for area..' className='shadow-md w-60 md:w-80 px-2 mx-10 my-2 md:my-5 py-4 outline-none border border-lightgray' onChange={debounceHandler}/>
          </div>
          {
            locations && locations.map((location)=> (
                location?.name && location.name.trim() !== "Null"  ? (
                <div className='flex border-b border-dashed border-gray-400 border-spacing-9 mx-10 md:px-5  py-5'>
                  <div className='text-xl pb-5 pt-[.15rem] px-2 text-gray-600'>
                    <CiLocationOn />
                  </div>
                 
                      <div>
                        <h4 className='font-semibold text-md hover:text-orange cursor-pointer' onClick={() => getLocation(location, dispatch, setIsOpen)} >{location?.name !== "Null" ? location?.name: ""}</h4>
                        <p className='text-xs text-lightBlue'>{location?.display_name}</p>
                      </div>
                </div>
                ): null
              
            ))
          }
      </div>
  </>
  )
}

export default Location;