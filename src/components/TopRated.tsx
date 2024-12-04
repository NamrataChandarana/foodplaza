import React from 'react';

const TopRated = (RestautrantsCard) => {
    return (props) =>  {
        return(
            <div className='relative'>
                <span className="absolute left-28 sm:left-0 z-10 mt-3 mx-2 inline-block bg-red-700 text-white text-sm font-semibold px-1 py-1 shadow-lg mb-4 ">
                    Top Rated
                </span>
                <RestautrantsCard {...props}/>
            </div>
        )
    } 
}
export default TopRated;



