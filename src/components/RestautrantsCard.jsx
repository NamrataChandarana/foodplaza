import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeSkeleton from "./skeleton/HomeSkeleton";
import React from "react";

const RestautrantsCard = ({restaurant}) => {
  const {lat, lon} = useSelector((state) => state.location);

  return (
    <Link to={`/productmenu?page-type="REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${restaurant?.info?.id}&catalog_qa="undefined"&submitAction="ENTER"`}>
        <div className=" my-3  rounded-md hover:scale-90 hover:transition-all">
          <div className="relative">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`} className="relative h-[10em] w-full rounded-2xl object-cover" />
            <div className="absolute bottom-0 z-10  bg-custom-gradient h-16 w-full rounded-xl">
              <h1 className="font-bold text-white text-xl absolute bottom-0 px-2">{restaurant?.info?.aggregatedDiscountInfoV3?.header} {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}</h1>
            </div>
          </div>
          <div className="py-2">
              <h1 className="font-bold text-xl text-darkGray">{restaurant?.info?.name?.length > 20 ? `${restaurant?.info?.name?.slice(0,18)}...` : restaurant?.info?.name }</h1>
              <div className="flex font-bold">
                  <p className="flex text-darkGray"><FaStar className="text-white bg-green-800 rounded-xl p-1 text-xl mt-[.10rem] mr-1" />{restaurant?.info?.avgRating}</p>
                  <div className="pb-1">&#8226;</div>
                  <p className="font-bold text-md text-darkGray">{restaurant?.info?.sla?.slaString}</p>
              </div>
              <p className="text-lightGray  text-md">{restaurant?.info?.cuisines?.join(", ")?.length > 30 ?  `${restaurant?.info?.cuisines?.join(", ")?.slice(0,25)}...` : restaurant?.info?.cuisines?.join(", ")}</p>
              <p className="text-lightGray  text-md">{restaurant?.info?.areaName}</p>
          </div>
        </div> 
    </Link>
  )
}

export default RestautrantsCard