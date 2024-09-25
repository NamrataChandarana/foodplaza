import { useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import RestautrantaMenuCard from "../components/RestautrantaMenuCard";

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
    console.log(menuItems)

    function handleOpenMenu(index) {
        (index === isMenuOpenInd) ? setIsMenuOpenInd(null) : setIsMenuOpenInd(index);
        console.log(isMenuOpenInd)
    }
    function handleCategoryMenu(index) {
        (index === categories) ? setCategories(null) : setCategories(index);
        console.log()
    }

    return (
        <>
            <div className="md:mx-60 mx-20">
                <h1>MENU</h1>
                {
                    menuItems && menuItems.map((items, ind) => (
                        items !== null ? (
                            <div>
                                <div className="bg-gray-500 px-3 py-5 mt-3 flex justify-between cursor-pointer" onClick={() => {
                                    (items?.card?.card["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") ?
                                    handleOpenMenu(ind) : null}}>
                                    {items?.card?.card?.itemCards ? (
                                        items?.card?.card?.itemCards?.map((item, index)=> (
                                            (index === 1) ? <h1>{item?.card?.info?.category}({items?.card?.card?.itemCards?.length})</h1> : null
                                         ))
                                    ) : (
                                        <h1>{items?.card?.card?.title}</h1>
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
                                            <div className="bg-gray-500 px-3 py-2 pb-5 border border-b-1 flex justify-between  cursor-pointer" onClick={() => handleCategoryMenu(category?.title)}>
                                                <h1>{category?.title}({category?.itemCards?.length})</h1>
                                                <button>{categories === category?.title ? <IoIosArrowDown /> : <IoIosArrowUp />}</button>
                                            </div>

                                            {(categories === category?.title) ? category?.itemCards?.map((items)=> (
                                               items && <RestautrantaMenuCard items={items}/>
                                            )) : null}
                                        </>
                                    ))
                                )
                                }
                            </div> 
                        ) : null
                        
                    ))
                }
                
            </div>
        </>
    )
}
export default RestautrantMenu;