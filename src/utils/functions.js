
import { cartClearSuccess, cartItemsCountSuccess, cartLengthSuccess, cartItemsTotalSuccess, cartRemoveSuccess,cartRemoveSuccess } from "../redux/reducers/cartData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const filterClicked = (index, setIsClickedIndex ,isClickedIndex) => {
    setIsClickedIndex(index === isClickedIndex ? null : index);
}

export const ratingFilter = (setFilteredData, restaurantsData) =>{
    if(restaurantsData){
        const value = restaurantsData.filter((restaurant) => restaurant?.info?.avgRating > 4.5);
        setFilteredData(value)
    }
}

export const pricefilter = (setFilteredData, restaurantsData) => {
    if(restaurantsData){
        const value = restaurantsData.filter((restaurant) => restaurant?.info?.costForTwo.split(' ')[0].replace(/[^\d]/g, '') >= 300 & restaurant?.info?.costForTwo.split(' ')[0].replace(/[^\d]/g, '') <= 600 );
        setFilteredData(value);
    }
}

export const priceLessThan300 = (setFilteredData, restaurantsData) =>{
    if(restaurantsData){
        const value = restaurantsData.filter((restaurant) => restaurant?.info?.costForTwo.split(' ')[0].replace(/[^\d]/g, '') < 300 );
        setFilteredData(value);
    }

}

export const fastDelivery = (setFilteredData, restaurantsData) => {
    if(restaurantsData){
        const value = [...restaurantsData].sort((a,b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
        setFilteredData(value);
    }
}

export const removeFilter = (setFilteredData, restaurantsData) =>{
    if(restaurantsData){
        setFilteredData(restaurantsData);
    }
}

//Remove item
export function handleRemoveBtn(item, setCartData, setCartTotal, cartQunt, localData, dispatch){
    const updatedData = localData.filter((items) => items?.card?.info?.id !== item?.card?.info?.id);
    dispatch(cartRemoveSuccess(updatedData));
    localStorage.setItem("cart", JSON.stringify(updatedData));
    const data = JSON.parse(localStorage.getItem('cart'));
    setCartData(updatedData);
    //update total
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
    // update quantity
    const updatedQun = cartQunt.filter((items) => items?.id !== item?.card?.info?.id);
    localStorage.setItem('cartQuantity', JSON.stringify(updatedQun))
    dispatch(cartItemsCountSuccess(updatedData))  
    //update length
    const length = localData?.length - 1
    dispatch(cartLengthSuccess(length))
}

//Clear item
export function handleClearBtn(dispatch, setCartTotal, setCartData, cart, cartTotal){
    dispatch(cartClearSuccess());
    localStorage.setItem("cart", JSON.stringify([])); 
    const data = JSON.parse(localStorage.getItem('cart'));
    setCartData(data);
    localStorage.setItem('cartQuantity', JSON.stringify([]))
    localStorage.setItem('cartRes', JSON.stringify([]))
    dispatch(cartItemsCountSuccess(cart))
    setCartTotal(0);
    dispatch(cartItemsTotalSuccess(cartTotal))
    dispatch(cartLengthSuccess(0))
}
 
//cartItemTotal
export function totalPrice(cartQunt, setCartTotal, dispatch){
    let sum = 0
    cartQunt?.map((item) => (
        sum += Math.round((item?.price) * item?.quantity)
    ))
    setCartTotal(sum);  
    dispatch(cartItemsTotalSuccess(sum)) 
}

//checkout
export function handleCheckout(navigate,dispatch){
    dispatch(cartClearSuccess());
    localStorage.setItem("cart",JSON.stringify([]))
    localStorage.setItem("cartQuantity",JSON.stringify([]))
    dispatch(cartLengthSuccess(0))
    toast.success("Your order is placed", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "light",
      });
    
    navigate('/');   
}

//debounce
export function debounce(func, delay) {
    let timer;
    return (...args) => {
        timer = setTimeout(()=>{
            console.log('timer')
           func(...args);  
        },delay)
    }
}