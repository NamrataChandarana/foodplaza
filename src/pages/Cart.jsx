import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { cartClearSuccess, cartRemoveSuccess } from "../redux/reducers/cartData";
import { useEffect, useState } from "react";

function Cart() {

    const localData = JSON.parse(localStorage.getItem("cart"));
    const dispatch = useDispatch();
    const [cartData, setCartData] = useState(localData);
    const {cart} = useSelector((state) => state.cart);
    const [cartTotal, setCartTotal ] = useState(0);
    const [count , setCount] = useState([]);
   

    //Remove item
    function handleRemoveBtn(item){
        const updatedData = localData.filter((items) => items?.card?.info?.id !== item?.card?.info?.id);
        dispatch(cartRemoveSuccess(updatedData));
    }

    //Clear item
    function handleClearBtn(){
       dispatch(cartClearSuccess());
    }
    
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
        const data = JSON.parse(localStorage.getItem('cart'));
        setCartData(data);
    },[cart])

    //totalPrice
    function totalPrice(cartData){
        let sum = 0;
        cartData?.forEach((item) => {
            if (item?.card?.info?.finalPrice) {
                sum += item.card.info.finalPrice / 100;
            } else if (item?.card?.info?.price) {
                sum += item.card.info.price / 100;
            } else {
                sum += item.card.info.defaultPrice / 100;
            }
        });
        setCartTotal(sum);
    }

    useEffect(()=>{
        totalPrice(cartData)
    },[cartData])

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
                        <div className="relative  z-10">
                            <button className="bg-white text-green-600 px-9 py-2 font-bold rounded-md border border-black" onClick={() => handleRemoveBtn(items)}>Remove</button>
                        </div> 
                    </div>
                </>
            ))}
            <div>
                <h1>Total Prize</h1>
                <h1 className="flex"><MdOutlineCurrencyRupee className="mt-1"/>{cartTotal}</h1>
            </div>
        </> 
    )
}
export default Cart