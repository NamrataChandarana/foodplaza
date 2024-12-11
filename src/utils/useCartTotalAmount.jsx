import React, { useEffect, useState } from 'react'
import { cartTotalAmount } from './functions';

const useCartTotalAmount = (cartTotal,resData) => {
    const [amountToPay, setAmountToPay] = useState(0);
    useEffect(()=>{
       cartTotalAmount(cartTotal, resData,setAmountToPay);
    },[cartTotal])

    return amountToPay;
}

export default useCartTotalAmount;