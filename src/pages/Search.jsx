import React,{useCallback, useState} from 'react'
import useSearchRes from '../utils/useSearchRes'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { debounce } from '../utils/functions';

const Search = () => {

  const {lat, lon} = useSelector((state) => state.location)
  const [searchInput, setSearchInput] = useState("");
  const searchData = useSearchRes({lat,lon,searchInput});
  
  //debounce
  const handleInput = (value) => { 
        setSearchInput(value)
  }
  const debounceHandler  = useCallback(
    debounce(handleInput,100), []
  )

  return (
    <div className='mt-10'>
        <div className='mx-5 sm:mx-10 md:mx-20 lg:mx-80 '>
            <input type="text" value={searchInput} autoFocus onChange={(e) => debounceHandler(e.target.value)} className='py-3 px-2 w-full outline-none rounded-sm border border-1 border-gray-300' placeholder='Search for restaurant... ' />
            <div className='h-auto'>
                    {searchData.length > 0 ? (
                        searchData.map((res, index) => {
                            if(res.type === "RESTAURANT") {
                                const metadata = JSON.parse(res.metadata);
                                const primaryRestaurantId = metadata.data?.primaryRestaurantId;
                                return(
                                     <Link to={`/productmenu?page-type="REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${primaryRestaurantId}&catalog_qa="undefined"&submitAction="ENTER"`}>
                                        <div className='hover:bg-gray-100 py-5'>
                                            <div className='flex space-x-4'>
                                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${res.cloudinaryId}`} alt="" className='h-20 rounded-md' />
                                                <div className='mt-5'>
                                                    <h1 className=' align-bottom'>{res.text}</h1>
                                                    <h1 className='text-lightBlue align-bottom'>Restaurant</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    ): (
                        <div>
                            <h1 className='flex place-content-center mt-5'>No Restautrant</h1>
                            <div className='mx-auto flex justify-center items-center my-5'>
                                <img src="/noRes.jpg" alt="" className='h-60' />
                            </div> 
                        </div>
                        
                    )}
                
            </div>
        </div>
    </div>
  )
}

export default Search