import React from 'react';


const HomeSkeleton = () => {
  return (
    <>
        {Array.from({ length: 8 }).map((_, index) => (
             <div className=" my-3  rounded-md hover:transition-all">
                <div className="relative">
                <svg class=" h-[10em] w-full rounded-md bg-[#DBDBDB] dark:text-gray-600" aria-hidden="true" fill="currentColor" viewBox="0 0 16 20">
                    {/* <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/> */}
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            <div className="py-2">
                <div class="h-5 bg-gray-200  dark:bg-gray-700 w-48 mb-1.5"></div>
                <div className="flex">
                    <div class="h-3 bg-gray-200  dark:bg-gray-700 w-28 mb-2"></div>
                </div>
                <div class="h-3 bg-gray-200 dark:bg-gray-700 mb-1"></div>
                <div class="h-3 bg-gray-200 dark:bg-gray-700 w-36 mb-4"></div>
            </div>
        </div> 
        ))
        }
        {/* <div className=" my-3  rounded-md hover:transition-all">
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
        </div>  */}
        
    </>
  )
}

export default HomeSkeleton