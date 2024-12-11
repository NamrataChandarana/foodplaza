import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementBtn, incrementBtn } from '../utils/functions';

const ResCardCount = ({items, className}) => {
  const cartQun = JSON.parse(localStorage.getItem('cartQuantity'))
  const dispatch = useDispatch();

  return (
      <div className={`${className} bg-white text-green-600 px-2 py-1 md:px-6 md:py-2 font-bold rounded-md border border-black`}>
        <button className=' z-20 text-green-600 font-bold ' onClick={()=> decrementBtn(dispatch,items)}>-</button>
          {
            cartQun?.length > 0 && cartQun?.map((item) => (
              (item?.id === items?.card?.info?.id) ? (
                <button className='bg-white text-green-600 px-3 font-bold '>
                  {item?.quantity}
                </button>
              ):null
            ))
          }
        <button onClick={()=> incrementBtn(dispatch,items)} className=' z-20 text-green-600 font-bold '>+</button>
      </div>
  )
}

export default ResCardCount;