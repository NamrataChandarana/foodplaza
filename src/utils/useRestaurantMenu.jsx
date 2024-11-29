import axios from 'axios'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";

const useRestaurantMenu = (restaurantId) => {
    const {lat, lon} = useSelector((state) => state.location)
    const [restaurantsMenu, setRestaurantsMenu] = useState([]);
    
    useEffect(()=>{
        getMenu();
    },[])

    async function getMenu() {
        try{
            const {data} = await axios.get(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D${lat}%26lng%3D${lon}%26restaurantId%3D${restaurantId}%26catalog_qa%3Dundefined%26submitAction%3DENTER`) 
            setRestaurantsMenu(data?.data?.cards);
        }catch(error){
            toast.error(error, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                theme: "light",
            });
        }
    }

    return restaurantsMenu
}

export default useRestaurantMenu