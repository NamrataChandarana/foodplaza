import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { Location }from './index'
import { useDispatch, useSelector } from "react-redux";
import { cartLengthSuccess } from "../redux/reducers/cartData";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Search } from 'lucide-react';
import { LifeBuoy } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { User } from 'lucide-react';
import  logo from '../../public/logo.png'
import { BsBag } from "react-icons/bs";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {location}  = useSelector((state => state.location));
    const dispatch = useDispatch();
    const {cartLength} = useSelector((state) => state.cart);
    const [isClicked, setIsClicked] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const menuRef = useRef(null);

    const handleLocation = () => {
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        const cartData = JSON.parse(localStorage.getItem("cart"));
        dispatch(cartLengthSuccess(cartData?.length));
    },[])
    
    function handleMenu(){
        if (menuRef.current.classList.contains('hidden')) {
            menuRef.current.classList.remove('hidden');
            setIsMenuClicked(true)
        }
    }

    function handleClose(){
        if(!menuRef.current.classList.contains('hidden')){
            menuRef.current.classList.add('hidden');
            setIsMenuClicked(false)
        }
    }

    return (
        <>
            <div className="relative px-5 md:px-10 py-5 flex justify-between w-full shadow-xl z-20">
                <div className="flex gap-3 md:gap-6">
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-14" />
                    </Link>
                    
                    <div className="content-center">
                        <div className="location py-2 flex gap-2 cursor-pointer text-sm md:text-md md:mt-1 align-baseline" onClick={handleLocation} >
                            <h3 className="font-bold  underline underline-offset-1 text-darkGray hidden md:flex text-md">Other</h3>
                            <h4 className="text-md">{location}</h4>
                            <div className="py-1" >
                                <IoIosArrowDown className="text-orange "/>
                            </div>
                                   
                        </div>
                        <div>
                            {isOpen ? <Location setIsOpen={setIsOpen}/> : null} 
                        </div>
                    </div>             
                </div>
                <nav className="content-center">
                    {isMenuClicked ? (<IoMdClose className="mt-2 text-lg -z-0" onClick={handleClose}/>) : (<IoMenuOutline className="text-3xl absolute right-4 mt-.5 md:hidden -z-0" onClick={handleMenu} />)}
                    <ul ref={menuRef}  className="hidden bg-white shadow-2xl sm:min-h-[60vh] min-w-full absolute top-20 left-0 text-center space-y-3 py-8 md:space-y-0 md:relative md:top-0 md:left-0  md:flex md:gap-7 md:min-h-0 md:min-w-0 md:bg-inherit md:py-2 md:shadow-none font-bold text-[#808080]">
                        <li className="hover:text-orange">
                            <Link to="/" className="flex gap-1"><Search className="text-xs" /> Search</Link>
                        </li>
                        <li lassName="hover:text-orange">
                            <Link to="/about" className="flex gap-1"><LifeBuoy className="text-xs" />About</Link>
                        </li>
                        <li classList='text-center hover:text-orange"'>
                            <Link to="/cart" >
                                <div className=" flex gap-0.5 justify-center relative">
                                     <h1 className="flex gap-1 "><BsBag className="font-bold text-xl " />Cat</h1>
                                     <div classList=''>
                                        {/* <IoBag className=" lg:mt-0.5 lg:text-2xl text-md mt-1  text-green-600" /> */}
                                        <div className="absolute left-1 top-[1px] rounded-full">
                                            <div className="text-sm font-bold mt-[.1] text-green-700 ">
                                                {cartLength}
                                            </div> 
                                        </div>
                                                                              
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="hover:text-orange">
                            <button onClick={() => setIsClicked(!isClicked)} className="flex gap-1"><User className="text-xs" />{isClicked ? "Logout" : "Login"}</button>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </>
    )
}

export default Header;
