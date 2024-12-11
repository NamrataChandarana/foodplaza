
import { cartClearSuccess, cartItemsCountSuccess, cartLengthSuccess, cartItemsTotalSuccess, cartRemoveSuccess, cartResSuccess } from "../redux/reducers/cartData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { locationSuccess } from "../redux/reducers/SearchLocation";


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

export const pureVeg = (setFilteredData, restaurantsData) => {
    if(restaurantsData) {
        const value = restaurantsData.filter((restaurant) => {
            const badgeObjects = restaurant?.info?.badgesV2?.entityBadges?.imageBased?.badgeObject;
            // Ensure badgeObject is an array and check if any badge has "pureveg" description
            return Array.isArray(badgeObjects) && badgeObjects.some(
              (badge) => badge?.attributes?.description === "pureveg"
            );
          });
          setFilteredData(value);
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
           func(...args);  
        },delay)
    }
}

export function throttling(func, delay) {
    let last=0;
    return (...args) => {
        const now = new Date().getTime();
        if(now - last < delay) return;
        last = now;
        func(...args);
    }
}

//getLocation
export const getLocation = (location, dispatch, setIsOpen) => {
    const lon = location.lon;
    const lat = location.lat;
    const locationName = location.name;
    dispatch(locationSuccess({locationName, lon, lat}));
    setIsOpen(false);
}

//increment item btn 
export const incrementBtn = (dispatch,items) =>{
   const cartQun = JSON.parse(localStorage.getItem('cartQuantity'))
   const updatedData =  cartQun?.map((item)=>{
     if(items?.card?.info?.id === item?.id ){ 
       return { ...item, quantity: item?.quantity < 10 ? item?.quantity + 1 : item?.quantity };
     }
     return item;
   })
   localStorage.setItem('cartQuantity', JSON.stringify(updatedData))
   dispatch(cartItemsCountSuccess(updatedData))
}

//decrement item btn
export const decrementBtn = (dispatch,items) =>{
  const cartQun = JSON.parse(localStorage.getItem('cartQuantity'))
  const updatedData = cartQun.map((item)=>{
    if(items?.card?.info?.id === item?.id ){ 
      return { ...item, quantity: item?.quantity > 1 ? item?.quantity - 1 : 1 };
    }
    return item;
  })
  localStorage.setItem('cartQuantity', JSON.stringify(updatedData))
  dispatch(cartItemsCountSuccess(updatedData))
}

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

//add item handler
const getItem = (item, restaurantId,dispatch,cartQuan,setIsAddBtn) => {
  dispatch(cartResSuccess(restaurantId))
  //cart update
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push(item)
  localStorage.setItem("cart", JSON.stringify(cartItems));
  dispatch(cartItemsCountSuccess(item))
  //cartItemsQuntity update
  const updatedCount = cartItems?.map((item) => {
      const matchingCartItem = cartQuan && cartQuan?.find((cartItem) => cartItem?.id === item?.card?.info?.id);
      return {
          id: item?.card?.info?.id,
          price: (item?.card?.info?.finalPrice) ?  (item?.card?.info?.finalPrice / 100) : (item?.card?.info?.price / 100) || (item?.card?.info?.defaultPrice / 100),
          quantity: matchingCartItem?.quantity || 1
      }
  }); 
  dispatch(cartItemsCountSuccess(updatedCount));
  localStorage.setItem("cartQuantity", JSON.stringify(updatedCount)); 
  setIsAddBtn(true);
  const length = cartQuan ? cartQuan.length + 1 : 1;
  dispatch(cartLengthSuccess(length))
  toast.success("1 item added to cart!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "dark",
      // transition: Slide,
    });
}
export const handleAddBtn = (item, restaurantId, dispatch,setIsAddBtn, cartRes) =>{
  let cartQuan = JSON.parse(localStorage.getItem("cartQuantity"));
  if(cartRes){
      if( cartRes.id === restaurantId){
            getItem(item, restaurantId,dispatch,cartQuan,setIsAddBtn);
        }else{
            dispatch(cartClearSuccess());
            localStorage.setItem('cart', JSON.stringify([]));
            dispatch(cartLengthSuccess(0))
            cartQuan = localStorage.setItem('cartQuantity', JSON.stringify([]))
            localStorage.setItem('cartRes', JSON.stringify([]))
            dispatch(cartItemsTotalSuccess(0))
            getItem(item, restaurantId,dispatch, cartQuan,setIsAddBtn)
        }
    }
}

//cartTotal
export const cartTotalAmount = (cartTotal, resData,setAmountToPay) => {
  const itemsTotal = Number(cartTotal) || 0;
  const gst = Number((cartTotal * 0.18).toFixed(2)) || 0; 
  const deliveryFee = Number(resData?.feeDetails?.totalFee / 100 || 0);
  const total = Number((itemsTotal + gst + deliveryFee).toFixed(2)) || 0;
    setAmountToPay(Number(total))
}
