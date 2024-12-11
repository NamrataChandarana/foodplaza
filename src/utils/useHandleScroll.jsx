import React, { useEffect, useState } from 'react'
import { throttling } from './functions';

const useHandleScroll = (filteredData,setVisibleCard) => {
    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(()=>{
        const handleScroll = throttling(() => {
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 200){
                console.log("hello")
                if(visibleCount < filteredData.length){
                    const nextCount = visibleCount + 6;
                    setVisibleCount(nextCount)
                    setVisibleCard(filteredData?.slice(0,nextCount))
                }
            }
        },200)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[filteredData,visibleCount])

}

export default useHandleScroll