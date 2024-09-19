import React, {useEffect, useState} from "react";
import usegetLoacationData from "../utils/usegetLocationData";
import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { cardFilters } from "../utils/constant";
import { removeFilter, filterClicked } from "../utils/functions";
import RestautrantsCard from "../components/RestautrantsCard";
import useRestaurantData from "../utils/useRestaurantData";

function Home() {
    const {location} = useSelector(state => state.location);
    const [locationService, setLocationService] = useState(true);
    const [isClickedIndex, setIsClickedIndex] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const restaurantsData = useRestaurantData(setLocationService, setFilteredData);

    return (
        <>
        {
            locationService ? (
                <div>
                    <div className="md:mx-40 mx-20">
                        <h1>Restaurants with online food delivery in {location}</h1>
                        <div>
                            <div className="flex gap-2">
                                {cardFilters.map((filter, index) => (
                                    <div className={`flex border border-darkGray px-4 py-1 rounded-3xl gap-1 cursor-pointer text-darkGray font-semibold ${isClickedIndex === index ? "bg-[#F0F0F5]" : ""}`} 
                                        onClick={() => {
                                            index === isClickedIndex ? removeFilter(setFilteredData, restaurantsData) : filter.function(setFilteredData, restaurantsData);
                                            filterClicked(index, setIsClickedIndex, isClickedIndex);
                                        }
                                    } >
                                        <h6>{filter?.name}</h6>
                                        <button className={`${isClickedIndex === index ? "" : "hidden"}`}><MdClose /></button>
                                    </div>
                                ))}
                           </div>
                        </div>
                        <RestautrantsCard filteredData={filteredData}/>
                    </div>
                </div>
            ) : (<div>Location Unserviceable</div>)
        }
        </>
    ) 
}   

export default Home;