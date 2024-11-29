import React,{useCallback, useState} from 'react'
import useSearchRes from '../utils/useSearchRes'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { debounce } from '../utils/functions';

const Search = () => {

  const {lat, lon} = useSelector((state) => state.location)
  const [searchInput, setSearchInput] = useState("");
  const searchData = useSearchRes({lat,lon,searchInput});
  
  const handleInput = (value) => { 
        setSearchInput(value)
        console.log(value)
  }
  
  const debounceHandler  = useCallback(
    debounce(handleInput,100), []
  )

  return (
    <div className='mt-10'>
        <div className='mx-80'>
            <input type="text" value={searchInput} autoFocus onChange={(e) => debounceHandler(e.target.value)} className='py-3 px-2 w-full outline-none rounded-sm border border-1 border-gray-300' placeholder='Search for restaurant... ' />
            <div className='bg-white h-80'>
                    {searchData.length > 0 ? (
                        searchData.map((res, index) => {
                            if(res.type === "RESTAURANT") {
                                const metadata = JSON.parse(res.metadata);
                                const primaryRestaurantId = metadata.data?.primaryRestaurantId;
                                return(
                                    <Link to={`/productmenu?page-type="REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${primaryRestaurantId}&catalog_qa="undefined"&submitAction="ENTER"`}>
                                        <div className='hover:bg-gray-100 py-5'>
                                            <div className='flex space-x-4'>
                                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${res.cloudinaryId}`} alt="" className='h-16' />
                                                <h1 className='py-3 align-bottom'>{res.text}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    ): (
                        <div className='mx-auto flex justify-center items-center min-h-[50vh]'>
                          <h1 className='text-3xl font-Montserrat text-orange'>No results found. Try searching for restaurants.</h1>
                        </div> 
                    )}
                
            </div>
        </div>
    </div>
  )
}

export default Search