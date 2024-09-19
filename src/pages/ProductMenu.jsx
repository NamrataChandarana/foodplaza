import { useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";


function ProductMenu() {
    const [searchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const restaurantId = searchParams.get("restaurantId");
    const restaurantMenu = useRestaurantMenu(searchParams);
    const menuList = restaurantMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(menuList)
    // menuList && console.log(menuList[4]?.card?.card?.itemCards)
    // console.log(menuList[3]?.card?.card?.itemCards.map((item)=> console.log(item?.card?.info?.category)))
    // console.log(menuList[3]?.card?.card?.itemCards[0]?.card?.info?.category) 
    
    //   menuList &&  menuList?.map((item, ind) => (
    //     (ind >= 2 && item) ?
    //         item?.card?.card?.itemCards?.map((item) => (
    //             console.log(item?.card?.info?.name)
    //         )) : null
    //     ))

    const [isMenuOpenInd, setIsMenuOpenInd] = useState(null);

    function handleOpenMenu(index) {

        (index === isMenuOpenInd) ? null : setIsMenuOpenInd(index);

    }
    
    return (
        <>
            <div className="md:mx-60 mx-20">
                <h1>MENU</h1>
                {
                    menuList && menuList.map((item, ind) => (
                        <div>
                            <div className="bg-gray-500 px-3 py-5 mb-3 flex justify-between" onClick={() => handleOpenMenu(ind)}>
                                {item?.card?.card.itemCards?.map((item, index)=> (
                                   (index === 1) ? <h1>{item?.card?.info?.category}</h1> : null
                                ))}
                                {/* <button><IoIosArrowDown /></button> */}
                                <button>{isMenuOpenInd === ind ? <IoIosArrowDown /> : <IoIosArrowUp />}</button>
                            </div>

                            {(ind >= 2 && item && ind === isMenuOpenInd ) ? ( 
                                    item?.card?.card.itemCards?.map((items, index)=> (
                                            <div>
                                                <div className="flex px-3 py-3">
                                                    <div>
                                                        <h1>{items?.card?.info?.name}</h1>
                                                        <h1 className="flex"><MdOutlineCurrencyRupee className="mt-1"/>75.24</h1>
                                                        <div className="flex" >
                                                            <FaStar />
                                                            <span>4.1</span>
                                                            <span>(18)</span>
                                                        </div>
                                                        <p>Introducing the new Chicken Surprise Burger which has the perfect balance of a crispy fried chicken patty, the crunch of onions and the richness of creamy sauce.</p>
                                                    </div>
                                                    <div className="relative">
                                                        <img className="z-10 rounded-md object-contain w-96" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/22/0fbf18a1-5191-4cda-a09d-521a24c8c6ca_25cf57c6-48cc-47bd-b422-17e86b816422.png"} alt=""/>
                                                        <div className="absolute bottom-[.05rem] right-[3rem] z-50">
                                                            <button className="bg-white text-green-600 px-9 py-2 font-bold rounded-md border border-gray-400">ADD</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))   
                                ) : null
                            }
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}
export default ProductMenu;