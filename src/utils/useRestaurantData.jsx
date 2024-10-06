import usegetLoacationData from "./usegetLocationData";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const useRestaurantData = (setLocationService, setFilteredData) => {
    const {lat, lon} = useSelector(state => state.location);
    const resData = usegetLoacationData({lat, lon});
    const [restaurantsData, setRestaurantsData] = useState(null);

    useEffect(()=>{
        if(resData)
            getData();
    },[resData, lat, lon])

    function getData(){
        const notPresent = resData?.cards?.some(item => 
            item?.card?.card['@type'] === "type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent"
        );
        if (notPresent) {
            setLocationService(false);
        }else{
            setLocationService(true);
            const resultData = resData?.cards?.find((item) => item?.card?.card?.gridElements?.infoWithStyle['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle");
            setRestaurantsData(resultData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredData(resultData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }   
        
    }

    return restaurantsData;
}

export default useRestaurantData;