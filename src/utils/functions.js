export const filterClicked = (index, setIsClickedIndex ,isClickedIndex) => {
    setIsClickedIndex(index === isClickedIndex ? null : index);
}

export const ratingFilter = (setFilteredData, restaurantsData) =>{
    if(restaurantsData){
        const value = restaurantsData.filter((restaurant) => restaurant?.info?.avgRating > 4.5);
        setFilteredData(value)
    }
}

export const pricefilter = (setFilteredData, restaurantsData) => {
   const value = restaurantsData.filter((restaurant) => restaurant?.info?.costForTwo.split(' ')[0].replace(/[^\d]/g, '') >= 300 & restaurant?.info?.costForTwo.split(' ')[0].replace(/[^\d]/g, '') <= 600 );
   setFilteredData(value);
}

export const priceLessThan300 = (setFilteredData, restaurantsData) =>{
    const value = restaurantsData.filter((restaurant) => restaurant?.info?.costForTwo.split(' ')[0].replace(/[^\d]/g, '') < 300 );
    setFilteredData(value);
}

export const fastDelivery = (setFilteredData, restaurantsData) => {
    console.log(restaurantsData)
    const value = [...restaurantsData].sort((a,b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
    setFilteredData(value);
}

export const removeFilter = (setFilteredData, restaurantsData) =>{
    console.log(restaurantsData)
    setFilteredData(restaurantsData);
}