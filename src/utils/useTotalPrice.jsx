import React, { useEffect, useState } from 'react'
import { totalPrice } from './functions';
import { useDispatch } from 'react-redux';

const useTotalPrice = (cart,cartQunt,cartTotal,setCartTotal) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        totalPrice(cartQunt, setCartTotal, dispatch);
    },[cart, cartQunt])

    return cartTotal;
}

export default useTotalPrice