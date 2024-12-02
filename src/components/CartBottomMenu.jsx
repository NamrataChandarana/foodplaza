import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CartBottomMenu = () => {
  const {cartLength} = useSelector((state) => state.cart);
  return (
    <div className='fixed bottom-1 ml-16'>
        <div className='flex justify-between px-5 bg-green-700  w-[40rem] py-3 text-white'>
            <h1 className='font-bold text-sm'>{cartLength} item added</h1>
            <Link to="/cart" className='font-bold text-md'>VIEW CART</Link>
        </div>
    </div>
  )
}

export default CartBottomMenu;