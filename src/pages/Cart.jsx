import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { cartClearSuccess, cartRemoveSuccess, cartItemsCountSuccess, cartItemsTotalSuccess } from "../redux/reducers/cartData";
import { useEffect, useState } from "react";
import ResCardCount from "../components/ResCardCount";

function Cart() {
    
    const localData = JSON.parse(localStorage.getItem("cart"));
    const dispatch = useDispatch();
    const [cartData, setCartData] = useState(localData);
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
            console.log(cartItem)
            if(item?.card?.info?.id === cartItem?.id){
                console.log("hello")
                console.log(cartItem)
                const itemsSum = Math.round(cartItem?.price * cartItem?.quantity)
                {console.log(itemsSum)}
                setCartTotal((prevSum) => {
                    console.log(prevSum)
                    const newTotal = prevSum - itemsSum
                    console.log(newTotal)
                    dispatch(cartItemsTotalSuccess(newTotal))
                    // return newTotal;
                }) 
            }  
        })
        ) : dispatch(cartItemsTotalSuccess(0))
        const updatedQun = cartQunt.filter((items) => items?.id !== item?.card?.info?.id);
        localStorage.setItem('cartQuantity', JSON.stringify(updatedQun))
        dispatch(cartItemsCountSuccess(updatedData))     
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
    }
    
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
        totalPrice(cartQunt)
    },[cart, cartQunt])

    return (
        <>
            <div className="relative  z-10">
                <button className="bg-white text-green-600 px-9 py-2 font-bold rounded-md border border-black" onClick={handleClearBtn}>Clear</button>
            </div> 
            {cartData && cartData.map((items, index) => (
                <> 
                    <div className="flex px-3 py-9 justify-between border-t border-[.2] border-lightGray">
                        <div>
                            <h1 className="font-bold text-darkhead text-lg">{items?.card?.info?.name}</h1>
                            {
                                items?.card?.info?.finalPrice ? (
                                    <div className="flex gap-1">
                                        <h1 className="line-through flex text-lightGray"><MdOutlineCurrencyRupee className="mt-1 line-through text-lightGray"/>{(items?.card?.info?.defaultPrice) / 100}</h1>
                                        <h1 className="flex"><MdOutlineCurrencyRupee className="mt-1"/>{(items?.card?.info?.finalPrice) / 100}</h1>
                                    </div>
                                 ) : (items?.card?.info?.price ? (<h1 className="flex text-darkhead font-bold"><MdOutlineCurrencyRupee className="font-bold mt-1"/>{(items?.card?.info?.price) / 100}</h1>) : (<h1 className="flex text-darkhead font-bold"><MdOutlineCurrencyRupee className="font-bold mt-1"/>{(items?.card?.info?.defaultPrice) / 100}</h1>))
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

                        <p className="w-[37rem] text-md text-lightGray">{items.card?.info?.description}</p>
                        </div>
                        <div className="relative w-[156px] h-[144px] overflow-hidden z-10 rounded-md">
                            <img className="z-10 absolute top-0 left-0 w-full h-full object-cover" loading="lazy" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${items?.card?.info?.imageId}`} alt="" />
                        </div> 
                        <ResCardCount items={items} className={"right-[5rem] top-[8rem]"} />
                        <div className="relative  z-10">
                            <button className="bg-white text-green-600 px-9 py-2 font-bold rounded-md border border-black" onClick={() => handleRemoveBtn(items)}>Remove</button>
                        </div> 
                    </div>
                </>
            ))}
            <div>
                <h1>Total Prize</h1>
                <h1 className="flex"><MdOutlineCurrencyRupee className="mt-1"/>{cartSum}</h1>
            </div>
        </> 
    )
}
export default Cart