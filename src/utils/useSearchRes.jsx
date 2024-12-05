import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { debounce } from './functions';


const useSearchRes = ({lat,lon,searchInput}) => {
  console.log(lat,lon, searchInput)

    const [searchData, setSearchData] = useState([]);

    useEffect(()=>{ 
      async function getData(){
        try{
          const {data}= await axios.get(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fsuggest%3Flat%3D${lat}%26lng%3D${lon}%26str%3D${encodeURIComponent(searchInput)}%26trackingId%3Dundefined%26includeIMItem%3Dtrue`);
          setSearchData(data.data.suggestions); 
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
      getData();  
    },[lat,searchInput])
    return searchData;
  
}

export default useSearchRes