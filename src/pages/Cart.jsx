import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import ResCardCount from "../components/ResCardCount";
import { MdDelete } from "react-icons/md";
import emptyCart from "../../public/Empty_cart.avif";
import { Link } from "react-router-dom";
import { handleRemoveBtn, handleClearBtn, totalPrice } from "../utils/functions";
import { IoMdTime } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Cart = () => {
    const localData = JSON.parse(localStorage.getItem("cart"));
    const [cartData, setCartData] = useState(localData);
    const dispatch = useDispatch();
    const {cart, cartSum} = useSelector((state) => state.cart);
    const [amountToPay, setAmountToPay] = useState(0);
    const [cartTotal , setCartTotal] = useState(0);
    const cartQunt = JSON.parse(localStorage.getItem('cartQuantity')) ?? [];
    const resData =  JSON.parse(localStorage.getItem("cartRes")) ?? [];


    // Handle item removal
    const handleRemove = (item) => {
        handleRemoveBtn(item, setCartData, setCartTotal, cartQunt, cartData, dispatch);
    };

    function cartTotalAmount(cartTotal, resData) {
        const itemsTotal = Number(cartTotal) || 0;
        const gst = Number((cartTotal * 0.18).toFixed(2)) || 0; 
        const deliveryFee = Number(resData?.feeDetails?.totalFee / 100 || 0);
        const total = Number((itemsTotal + gst + deliveryFee).toFixed(2)) || 0;
        setAmountToPay(Number(total))
    }

    useEffect(()=>{
       cartTotalAmount(cartTotal, resData, dispatch);
    },[cartTotal])

    useEffect(()=>{
        totalPrice(cartQunt, setCartTotal, dispatch);
    },[cart, cartQunt])

    return (
            cartData?.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-3 px-5 sm:px-10 bg-cartBgColor min-h-[86.8vh]">
                    <div className="py-5 col-span-2 ">
                        <div className="relative flex justify-between">
                            <div>
                                <h1 className="pt-2 font-bold text-xl font-Montserrat text-darkhead">Your Cart</h1>
                                <h1 className="pt-1 font-semibold text-xs pl-1 font-Montserrat text-darkhead"><span className="font-bold">{cartData?.length}</span> in your cart</h1>
                            </div>
                            <div className="pt-4">
                                <button className="bg-white py-2  text-darkGray px-10 font-semibold rounded-sm shadow-md" onClick={() => handleClearBtn(dispatch, setCartData, setCartTotal, cart, cartTotal)}>Clear</button>
                            </div>
                        </div> 

                        {/* CartCard */}
                        {cartData?.length > 0 ? (
                            <>
                                <div className="bg-white mt-5 p-3">
                                    {resData && (
                                        <div>
                                            <h1 className="font-semibold text-2xl text-darkhead">{resData?.name}</h1>
                                            <div className="flex gap-3 mt-1">
                                                <p className="text-sm flex gap-1"><IoMdTime className="mt-1" />{resData?.sla?.slaString}</p>
                                                <h1 className="flex text-sm"><FaStar className="bg-green-700 text-white rounded-xl py-1 mt-1 mr-1 text-sm" />{resData?.avgRating}</h1>
                                            </div> 
                                        </div>
                                    )} 
                                </div>
                                
                                <div className="bg-white mt-5 p-3">
                                    {resData && (
                                        <div>
                                            <h1 className="font-semibold text-2xl text-darkhead">{resData?.name}</h1>
                                            <div className="flex gap-3 mt-1">
                                                <p className="text-sm flex gap-1"><IoMdTime className="mt-1" />{resData?.sla?.slaString}</p>
                                                <h1 className="flex text-sm"><FaStar className="bg-green-700 text-white rounded-xl py-1 mt-1 mr-1 text-sm" />{resData?.avgRating}</h1>
                                            </div> 
                                        </div>
                                    )} 
                                </div>

                                <div className="flex-col bg-white mt-1 shadow-2xl rounded-md">
                                    <div className="flex gap-[32rem]  pt-4">
                                        <h3 className="ml-5 font-bold ">Items</h3>
                                        <div className="hidden lg:flex gap-16 mx-30 font-bold">
                                            <h3>Price</h3>
                                            <h3>Quantity</h3>
                                        </div>
                                    </div>

                                    {cartData?.map((items, index) => (
                                       <div>
                                           <div className="flex gap-5 mt-5 pb-5">
                                               <div className="relative mr-5  w-[100px] h-[100px] md:w-[156px] md:h-[144px] overflow-hidden z-10 rounded-md ml-5 ">
                                                   <img className="z-10 absolute top-0 left-0  object-cover" loading="lazy" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${items?.card?.info?.imageId}`} alt="" />
                                               </div> 
                                               <div className="grid grid-cols-1 lg:grid-cols-4   flex-wrap gap-2 lg:gap-5 col-span-3 ">
                                                   <div className="w-auto col-span-2 "> 
                                                       <h1 className="font-bold text-darkhead text-xs text-wrap md:text-md">{items?.card?.info?.name}</h1>
                                                       {
                                                           items?.card?.info?.finalPrice ? (
                                                               <div className="flex gap-1">
                                                                   <h1 className="line-through  text-lightGray text-sm md:text-md hidden lg:flex"><MdOutlineCurrencyRupee className="mt-1 line-through text-lightGray"/>{(items?.card?.info?.defaultPrice) / 100}</h1>
                                                                   <h1 className="hidden lg:flex"><MdOutlineCurrencyRupee className="mt-1"/>{(items?.card?.info?.finalPrice) / 100}</h1>
                                                               </div>
                                                            ) : (items?.card?.info?.price ? (<h1 className="hidden lg:flex text-darkhead font-bold text-sm"><MdOutlineCurrencyRupee className="font-bold mt-1"/>{(items?.card?.info?.price) / 100}</h1>) : (<h1 className="flex text-darkhead font-bold"><MdOutlineCurrencyRupee className="font-bold mt-1"/>{(items?.card?.info?.defaultPrice) / 100}</h1>))
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
                                                       <p className="w-[20rem] text-sm text-lightGray hidden lg:flex">{items.card?.info?.description}</p>
                                                   </div>
                                                   <div className="flex lg:flex-row flex-col lg:gap-12 md:gap-4 col-span-2">
                                                       <h1 className="flex text-sm mt-1  lg:mt-12"><MdOutlineCurrencyRupee className="mt-1 "/>
                                                           {cartQunt?.map((cartItem) => {
                                                               if(cartItem?.id === items?.card?.info?.id){
                                                                 return cartItem?.quantity * Math.round(cartItem?.price)
                                                               }   
                                                           })}
                                                       </h1>
                                                       
                                                       <ResCardCount items={items} className={"my-1 lg:my-9 h-10 w-[5.5rem]"} />
                                                       
                                                       <div className="relative mt-1 lg:mt-9 z-10">
                                                           <button className="bg-white text-green-600 pr-5 py-2 font-bold text-2xl " onClick={() => handleRemove(items, setCartTotal, setCartData, cartQunt, localData, dispatch, cartData)}><MdDelete /></button>
                                                       </div>
                                                   </div>  
                                               </div>
                                           </div>
                                           <div className="mx-8 rounded-md border-b border-gray-300"></div>  
                                       </div>
                                    ))}
                                </div>
                            </>
                        ) : null 
                        }
                    </div>
                
                    {/* CartTotal */}
                    {
                        resData &&  (

                            <div className="bg-white my-9 lg:mx-5 w-full h-72 col-span-1 rounded-md shadow-md">
                                <div className="px-5 py-3">
                                    <h1 className="font-bold text-lg">Cart Total</h1>
                                    <div className="flex justify-between">
                                        <div className="py-5">
                                            <h3 className="py-3 border-b border-gray-300">Items Total</h3>
                                            <h3 className="py-3 border-b border-gray-300">Delivery Fee | {resData?.sla?.lastMileTravelString}</h3>
                                            <h3 className="py-3 border-b border-gray-300">GST and Restaurant Charges</h3>
                                        </div>
                                        <div className="py-5">
                                            <h3 className="flex py-3"><MdOutlineCurrencyRupee className="mt-1 "/>{cartSum}</h3>
                                            <h3 className="flex py-3"><MdOutlineCurrencyRupee className="mt-1 "/>{(resData?.feeDetails?.totalFee / 100) || 0}</h3>
                                            <h3 className="flex py-3"><MdOutlineCurrencyRupee className="mt-1 "/>{(cartSum * 0.18).toFixed(2)}</h3>
                                            <div>
                                                <h1 className="flex py-3 border-t border-gray-300 font-bold"><MdOutlineCurrencyRupee className="mt-1 "/>{amountToPay}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-orange text-white py-2 px-5 w-full my-4" >Checkout</button>
                                </div>
                            </div>
                        ) 
                    }
                   
                   
                </div> 
            ) : (
                <div className="text-center min-h-[80vh]">
                   <img src={emptyCart} alt="EmptyCart" className="mx-auto h-96" />
                    <h1 className="font-bold text-lg mt-3 text-darkGray">Your cart is empty</h1>
                    <p className="text-lightGray text-sm">You can go to home page to view more restaurants</p>
                    <Link to="/">
                        <button className="py-2 px-5 text-white bg-orange mt-3 " >See restaurants near you</button>
                    </Link>
                </div>
            )
    )
}
export default Cart