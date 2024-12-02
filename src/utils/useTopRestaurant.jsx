import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import usegetLoacationData from './usegetLocationData';

const useTopRestaurant = (setTopRestaurant) => {
    const {lat, lon} = useSelector(state => state.location);
    const resData = usegetLoacationData({lat, lon});

    console.log(resData)

    useEffect(() => {
      if(resData)
        getData();
    }, [])
    

    function getData(){
        const topRes = resData?.cards?.map(item => 
            (item?.card?.card['@type'] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget") ? setTopRestaurant(item?.card?.card) : null
        );
        console.log(topRes)
        // setTopRestaurant(topRes);
    }


  return (
    <div>useTopRestaurant</div>
  )
}

export default useTopRestaurant