import React from 'react';

const TopRated = (RestautrantsCard) => {
    return (props) =>  {
        return(
            <div>
                <span className="absolute z-10 mt-2 mx-2   inline-block bg-red-700 text-white text-sm font-semibold px-1 py-1 shadow-lg mb-4 ">
                    Top Rated
                </span>
                <RestautrantsCard {...props}/>
            </div>
        )
    } 
}
export default TopRated;



