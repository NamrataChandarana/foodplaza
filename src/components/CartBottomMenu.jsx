import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CartBottomMenu = () => {
  const {cartLength} = useSelector((state) => state.cart);
  return (
      <div className='fixed bottom-1 w-full'>
        <div className='flex justify-between px-5 bg-green-700 py-3 text-white lg:mx-64 xs:mx-24 mx-4'>
          <h1 className='font-bold text-sm'>{cartLength} item added</h1>
          <Link to="/cart" className='font-bold text-sm md:text-md'>VIEW CART</Link>
        </div>
      </div>
  )
}

export default CartBottomMenu;