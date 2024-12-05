import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const usegetLoacationData = ({lat, lon}) =>{
    const [locationData, setLocationData] = useState([]);

    useEffect(()=>{ 
      async function getData(){
        try{
          const {data}= await axios.get(`https://cors-handlers.vercel.app/api/?url=%20https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${lat}%26lng%3D${lon}%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`);
          setLocationData(data.data);
        }catch(error){
          toast.error(error, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "light",
            // transition: Slide,
          });
        }
      }    
      getData();  
    },[lat])
    return locationData;
}

export default usegetLoacationData;

