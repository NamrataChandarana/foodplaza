import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeSkeleton from "./skeleton/HomeSkeleton";

const RestautrantsCard = ({filteredData}) => {
  const {lat, lon} = useSelector((state) => state.location);
  console.log(filteredData)
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2">
        {filteredData && filteredData.length > 0 ? (
            filteredData?.map((restaurant) => (
                <Link to={`/productmenu?page-type="REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${restaurant?.info?.id}&catalog_qa="undefined"&submitAction="ENTER"`}>
                    <div className=" bg-white my-3 mr-8 rounded-md hover:scale-90 hover:transition-all">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`} className="h-[10em] w-full rounded-2xl object-cover" />
                        <div className="py-2">
                            <h1 className="font-bold text-xl text-darkGray">{restaurant?.info?.name?.length > 20 ? `${restaurant?.info?.name?.slice(0,18)}...` : restaurant?.info?.name }</h1>
                            <div className="flex">
                                <p className="flex text-darkGray"><FaStar className="text-white bg-green-600 rounded-xl p-1 text-lg mt-[.10rem] mr-1" />{restaurant?.info?.avgRating}</p>
                                <div className="pb-1">&#8226;</div>
                                <p className="font-semibold text-md text-darkGray">{restaurant?.info?.sla?.slaString}</p>
                            </div>
                            <p className="text-lightGray  text-lg">{restaurant?.info?.cuisines?.join(", ")?.length > 30 ?  `${restaurant?.info?.cuisines?.join(", ")?.slice(0,25)}...` : restaurant?.info?.cuisines?.join(", ")}</p>
                            <p className="text-lightGray  text-lg">{restaurant?.info?.areaName}</p>
                        </div>
                    </div> 
                </Link>
            ))
        ): (
            <HomeSkeleton length={5} />
            
        )}
    </div>
  )
}

export default RestautrantsCard