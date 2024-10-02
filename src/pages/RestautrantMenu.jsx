import { useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import RestautrantaMenuCard from "../components/RestautrantaMenuCard";
import { FaStar } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";


function RestautrantMenu() {
    const [searchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const restaurantId = searchParams.get("restaurantId");
    const restaurantMenu = useRestaurantMenu(searchParams);
    const [isMenuOpenInd, setIsMenuOpenInd] = useState(null);
    const [categories, setCategories] = useState(null);
    const menuList = restaurantMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuItems = menuList && menuList?.map((item) => (
        item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? ( item) : null
    ))
    const resName = restaurantMenu && restaurantMenu?.map((item) => (
        item?.card?.card["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2" ? (item) : null
    )) 

    const resData = restaurantMenu && restaurantMenu?.map((item) => (
        item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant" ? (item) : null
    ))

    console.log(resData)
    function handleOpenMenu(index) {
        (index === isMenuOpenInd) ? setIsMenuOpenInd(null) : setIsMenuOpenInd(index);
    }
    function handleCategoryMenu(index) {
        (index === categories) ? setCategories(null) : setCategories(index);
    }

    return (
        <>
            <div className="md:mx-72 mx-20">
                <div>
                    {resName && resName?.map((item) => (
                            item !== null ? (
                                <h1 className="font-bold text-2xl text-darkGray">{item?.card?.card?.text}</h1>
                            ): (
                                <h1></h1>
                        )))
                    }
                </div>

                <div className="bg-white py-5 border border-gray-300 rounded-xl px-5 my-8 shadow-xl">
                    {/* {
                        resData && resData?.map((item) => (
                            item !== null ? (
                                
                            ) : null
                        ))
                    } */}
                    <div className="flex font-bold text-md my-2">
                        <FaStar className="bg-green-700 text-white rounded-xl py-1 mt-1 mr-1 text-xl" />
                        <h1>4.3 (2.1K+ ratings) </h1>
                        <div className="text-lightGray text-xs mx-2 my-1">&#9679;</div>
                        <h1>₹250 for two</h1>
                    </div>
                    <h3 className="font-bold text-sm text-orange">Chinese,Asian</h3>
                    <div className="font-bold text-sm my-2 flex ">
                        <div className="text-lightBlue flex-col mr-3 space-y-1">
                            <span className="">&#9679;</span> 
                            <hr height="20%"/>
                            <span className="">&#9679;</span>
                        </div>
                        <div className="">
                            <h1 className="mr-3 pb-2">Outlet  <span className="text-lightBlue font-semibold">CG Road</span></h1>
                            <h1 className="">25-30 mins</h1>
                        </div>
                        
                    </div>
                    <p className="text-lightGray mt-5 text-sm"><IoIosBicycle className="inline pb-1 text-2xl " />4.2 kms | ₹39 Delivery fee will apply</p>
                </div>

                <div className="text-orange text-lg flex justify-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className= "mt-1 inline ml-4 text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="m57.49 47.74 368.43 368.43a37.28 37.28 0 0 1 0 52.72 37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44 48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 32-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32 11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328"></path></svg>
                    <h1 className="font-bold text-darkGray font-mono tracking-widest">MENU</h1>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"  viewBox="0 0 512 512" className= "mt-1 inline text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="m57.49 47.74 368.43 368.43a37.28 37.28 0 0 1 0 52.72 37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44 48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 32-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32 11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328"></path></svg>
                </div>
                {
                    menuItems && menuItems.map((items, ind) => (
                        items !== null ? (
                            <div>
                                <div className="bg-white px-3 py-5 flex justify-between cursor-pointer" onClick={() => {
                                    (items?.card?.card["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") ?
                                    handleOpenMenu(ind) : null}}>
                                    {items?.card?.card?.itemCards ? (
                                        items?.card?.card?.itemCards?.map((item, index)=> (
                                            (index === 1) ? <h1 className="font-bold">{item?.card?.info?.category}({items?.card?.card?.itemCards?.length})</h1> : null
                                         ))
                                    ) : (
                                        <h1 className="font-bold">{items?.card?.card?.title}</h1>
                                    )} 
                                    {items?.card?.card["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ?
                                        (<button>{isMenuOpenInd === ind ? <IoIosArrowDown /> : <IoIosArrowUp />}</button>) : null
                                    }
                                </div>
                            
                                {(ind >= 2 && items && ind === isMenuOpenInd &&  isMenuOpenInd != null && items?.card?.card?.itemCards ) ? (
                                        items?.card?.card.itemCards?.map((items, index)=> (
                                           items && <RestautrantaMenuCard items={items}/>
                                        ))
                                ) : (items?.card?.card?.categories?.map((category, index) => (
                                        <>
                                            <div className="bg-white px-3 py-2 pb-5 border-b border-gray-300 flex justify-between  cursor-pointer" onClick={() => handleCategoryMenu(category?.title)}>
                                                <h1 className="font-semibold">{category?.title}({category?.itemCards?.length})</h1>
                                                <button>{categories === category?.title ? <IoIosArrowDown /> : <IoIosArrowUp />}</button>
                                            </div>

                                            {(categories === category?.title) ? category?.itemCards?.map((items)=> (
                                               items && <RestautrantaMenuCard items={items}/>
                                            )) : null}
                                        </>
                                    ))
                                )
                                }
                                <div className="h-3 bg-gray-200"></div>
                            </div> 
                        ) : null
                        
                    ))
                }
                
            </div>
        </>
    )
}
export default RestautrantMenu;