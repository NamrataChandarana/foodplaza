import { fastDelivery, ratingFilter, pricefilter, priceLessThan300 } from "./functions";

export const cardFilters = [
    {   name:"Fast Delivery",
        function: fastDelivery
    },
    {   name:"Ratings 4.0+",
        function: ratingFilter
    },
    {   name:"Rs. 300-Rs. 600",
        function: pricefilter
    },
    {   name:"Less than Rs. 300",
        function: priceLessThan300
    }
];
