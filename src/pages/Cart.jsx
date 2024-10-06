import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { cartClearSuccess, cartRemoveSuccess, cartItemsCountSuccess, cartItemsTotalSuccess, cartLengthSuccess } from "../redux/reducers/cartData";
import { useEffect, useState } from "react";
import ResCardCount from "../components/ResCardCount";
import { MdDelete } from "react-icons/md";
import emptyCart from "../../public/Empty_cart.avif";
import { Link } from "react-router-dom";

function Cart() {
    const localData = JSON.parse(localStorage.getItem("cart"));
    const isLocalData = localData?.length > 0 ? (true) : (false);
    const [cartData, setCartData] = useState(localData);
    const [ isCartData, setIsCartData] = useState(isLocalData);
    console.log(isCartData);
    const dispatch = useDispatch();
    const {cart, cartSum, cartItemsCount } = useSelector((state) => state.cart);
    const data = useSelector((state) => state.cart);
    const [cartTotal , setCartTotal] = useState(0);
    const cartQunt = JSON.parse(localStorage.getItem('cartQuantity'));
   
    //Remove item
    function handleRemoveBtn(item){
        const updatedData = localData.filter((items) => items?.card?.info?.id !== item?.card?.info?.id);
        dispatch(cartRemoveSuccess(updatedData));
        localStorage.setItem("cart", JSON.stringify(updatedData));
        const data = JSON.parse(localStorage.getItem('cart'));
        setCartData(data);
        cartQunt.length > 1 ? (
        cartQunt?.map((cartItem) => {
            if(item?.card?.info?.id === cartItem?.id){
                const itemsSum = Math.round(cartItem?.price * cartItem?.quantity)
                setCartTotal((prevSum) => {
                    const newTotal = prevSum - itemsSum
                    dispatch(cartItemsTotalSuccess(newTotal))
                    // return newTotal;
                })
            }
        })
        ) : dispatch(cartItemsTotalSuccess(0))
        const updatedQun = cartQunt.filter((items) => items?.id !== item?.card?.info?.id);
        localStorage.setItem('cartQuantity', JSON.stringify(updatedQun))
        dispatch(cartItemsCountSuccess(updatedData))  
        if(cartData?.length === 1) {
            setIsCartData(false)
        }  
        const length = localData?.length - 1
        dispatch(cartLengthSuccess(length))
    }

    //Clear item
    function handleClearBtn(){
       dispatch(cartClearSuccess());
       localStorage.setItem("cart", JSON.stringify([])); 
       const data = JSON.parse(localStorage.getItem('cart'));
       setCartData(data);
       localStorage.setItem('cartQuantity', JSON.stringify([]))
       dispatch(cartItemsCountSuccess(cart))
       setCartTotal(0);
       dispatch(cartItemsTotalSuccess(cartTotal))
       setIsCartData(false)
       dispatch(cartLengthSuccess(0))
    }
    
    //totalPrice
    function totalPrice(cartQunt){
        console.log(cartQunt)
        let sum = 0
        cartQunt?.map((item) => (
            sum += Math.round((item?.price) * item?.quantity)
        ))
        setCartTotal(sum);  
        dispatch(cartItemsTotalSuccess(sum)) 
    }

    useEffect(()=>{
        totalPrice(cartQunt);
    },[cart, cartQunt])

    return (
            isCartData ? (
                <div className="grid grid-cols-3 px-10 bg-cartBgColor min-h-[86.8vh]">
                    <div className="py-5 col-span-2 ">
                        <div className="relative flex justify-between">
                            <div>
                                <h1 className="pt-2 font-bold text-xl font-Montserrat te+t-darkhead">Your Cart</h1>
                                <h1 className="pt-1 font-semibold text-xs pl-1 font-Montserrat text-darkhead"><span className="font-bold">{cartData?.length}</span> in your cart</h1>
                            </div>
                            <div className="pt-4">
                                <button className="bg-white py-2  text-darkGray px-10 font-semibold rounded-sm shadow-md" onClick={handleClearBtn}>Clear</button>
                            </div>
                        </div> 

                        {/* CartCard */}
                        <div className="flex-col bg-white mt-5 shadow-2xl rounded-md">
                            <div className="flex gap-[32rem]  pt-4">
                                <h3 className="ml-5 font-bold ">Items</h3>
                                <div className="flex gap-16 mx-30 font-bold">
                                    <h3>Price</h3>
                                    <h3>Quantity</h3>
                                </div>
                            </div>
                            {cartData && cartData?.map((items, index) => (
                                <div>
                                    <div className="flex gap-6 mt-5 pb-5">
                                        <div className="relative w-[140px] h-[144px] overflow-hidden z-10 rounded-md ml-5 ">
                                            <img className="z-10 absolute top-0 left-0 w-full h-full object-cover" loading="lazy" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${items?.card?.info?.imageId}`} alt="" />
                                        </div> 
                                        <div className="w-[23rem]"> 
                                            <h1 className="font-bold text-darkhead text-md md:text-md">{items?.card?.info?.name}</h1>
                                            {
                                                items?.card?.info?.finalPrice ? (
                                                    <div className="flex gap-1">
                                                        <h1 className="line-through flex text-lightGray text-sm md:text-md"><MdOutlineCurrencyRupee className="mt-1 line-through text-lightGray"/>{(items?.card?.info?.defaultPrice) / 100}</h1>
                                                        <h1 className="flex"><MdOutlineCurrencyRupee className="mt-1"/>{(items?.card?.info?.finalPrice) / 100}</h1>
                                                    </div>
                                                 ) : (items?.card?.info?.price ? (<h1 className="flex text-darkhead font-bold text-sm"><MdOutlineCurrencyRupee className="font-bold mt-1"/>{(items?.card?.info?.price) / 100}</h1>) : (<h1 className="flex text-darkhead font-bold"><MdOutlineCurrencyRupee className="font-bold mt-1"/>{(items?.card?.info?.defaultPrice) / 100}</h1>))
                                            }
                                            {
                                                items?.card?.info?.ratings?.aggregatedRating?.rating ? (
                                                    <div className="flex" >
                                                        <FaStar className="text-green-600 mt-1 mr-1 text-sm" />
                                                        <span className="font-bold text-sm mt-[.10rem] text-green-600">{items?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                                                        <span className="font-bold text-sm mt-[.10rem]">({items?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                                                    </div>
                                                ) : null
                                            }
                                            <p className="w-[20rem] text-sm text-lightGray ">{items.card?.info?.description}</p>
                                        </div>
                                        <div className="flex gap-12 ">
                                            <h1 className="flex text-sm mt-12 "><MdOutlineCurrencyRupee className="mt-1 "/>
                                                {cartQunt?.map((cartItem) => {
                                                    if(cartItem?.id === items?.card?.info?.id){
                                                      return cartItem?.quantity * Math.round(cartItem?.price)
                                                    }   
                                                })}
                                            </h1>
                                            
                                            <ResCardCount items={items} className={" my-9 h-10"} />
                                            
                                            <div className="relative mt-9 z-10">
                                                <button className="bg-white text-green-600 pr-5 py-2 font-bold text-2xl" onClick={() => handleRemoveBtn(items)}><MdDelete /></button>
                                            </div>
                                        </div>
                                            
                                    </div>
                                    <div className="mx-8 rounded-md border-b border-gray-300"></div>  
                                </div>
                            ))}
                        </div>
                    </div>
                
                    {/* CartTotal */}
                    <div className="bg-white my-9 mx-5 w-full h-72 col-span-1 rounded-md shadow-md">
                        <div className="px-5 py-3">
                            <h1 className="font-bold text-lg">Cart Total</h1>
                            <div className="flex justify-between">
                                <div className="py-5">
                                    <h3 className="py-3 border-b border-gray-300">Items Total</h3>
                                    <h3 className="py-3 border-b border-gray-300">Delivery Fee</h3>
                                    <h3 className="py-3 border-b border-gray-300">GST and Restaurant Charges</h3>
                                </div>
                                <div className="py-5">
                                    <h3 className="flex py-3"><MdOutlineCurrencyRupee className="mt-1 "/>{cartSum}</h3>
                                    <h3 className="flex py-3"><MdOutlineCurrencyRupee className="mt-1 "/>42</h3>
                                    <h3 className="flex py-3"><MdOutlineCurrencyRupee className="mt-1 "/>39</h3>
                                    <div>
                                        <h1 className="flex py-3 border-t border-gray-300 font-bold"><MdOutlineCurrencyRupee className="mt-1 "/>300</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            ) : (
                <div className="text-center min-h-[80vh]">

                   <img src={emptyCart} alt="EmptyCart" className="mx-auto h-96" />
                    <h1 className="font-bold text-lg mt-3 text-darkGray">Your cart is empty</h1>
                    <p className="text-lightGray text-sm">You can go to home page to view more restaurants</p>
                    <Link to="/">
                        <button className="py-2 px-5 text-white bg-orange mt-3 ">See restaurants near you</button>
                    </Link>
                </div>
            )
    )
}
export default Cart