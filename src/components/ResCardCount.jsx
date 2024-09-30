import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsCountSuccess, cartItemsTotalSuccess } from '../redux/reducers/cartData';

const ResCardCount = ({items, className}) => {
  const cartQun = JSON.parse(localStorage.getItem('cartQuantity'))
  const dispatch = useDispatch();

 
  function incrementBtn(){
    const updatedData =  cartQun?.map((item)=>{
      if(items?.card?.info?.id === item?.id ){ 
        return { ...item, quantity: item?.quantity < 10 ? item?.quantity + 1 : item?.quantity };
      }
      return item;
    })
    localStorage.setItem('cartQuantity', JSON.stringify(updatedData))
    dispatch(cartItemsCountSuccess(updatedData))
    
    // dispatch(cartItemsTotalSuccess(updatedData))
  }

  function decrementBtn(){
    const updatedData = cartQun.map((item)=>{
      if(items?.card?.info?.id === item?.id ){ 
        return { ...item, quantity: item?.quantity > 1 ? item?.quantity - 1 : 1 };
      }
      return item;
    })
    localStorage.setItem('cartQuantity', JSON.stringify(updatedData))
    dispatch(cartItemsCountSuccess(updatedData))
  }
  return (

    <div className="relative flex z-0">
        <button className='absolute left-[-9.5rem] top-[8.5rem] z-20 text-green-600 font-bold' onClick={decrementBtn}>-</button>
        {
          cartQun?.length > 0 && cartQun?.map((item) => (
            (item?.id === items?.card?.info?.id) ? (
              <button className={`bg-white absolute text-green-600 px-9 py-2 font-bold rounded-md border border-black ${className}`}>
                {item?.quantity}
              </button>
            ):null
          ))
        }
        {/* <button className={` bg-white absolute text-green-600 px-9 py-2 font-bold rounded-md border border-black ${className}`}>{cartItemsCount}</button> */}
        <button onClick={incrementBtn} className='absolute right-[5.5rem] top-[8.5rem] z-20 text-green-600 font-bold'>+</button>
    </div>    

  )
}

export default ResCardCount;