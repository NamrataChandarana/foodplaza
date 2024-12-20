import { Link, useLocation} from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { Location }from './index'
import { useDispatch, useSelector } from "react-redux";
import { cartLengthSuccess } from "../redux/reducers/cartData";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Search } from 'lucide-react';
import { LifeBuoy } from 'lucide-react';
import { User } from 'lucide-react';
import  logo from '/logo.png'
import { BsBag } from "react-icons/bs";
import React from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {location}  = useSelector((state => state.location));
    const dispatch = useDispatch();
    const {cartLength} = useSelector((state) => state.cart);
    const [isClicked, setIsClicked] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const menuRef = useRef(null);
    const {pathname} = useLocation();
    const [isHome, setIsHome] = useState(pathname === "/");
    
    useEffect(()=>{
        setIsHome(pathname === '/')
    },[pathname])
    
    const handleMenuClick = () => {
        if (!menuRef.current?.classList.contains('hidden')) {
            menuRef.current?.classList.add('hidden');
            setIsMenuClicked(false);
        }
    }

    useEffect(()=>{
        const cartData = JSON.parse(localStorage.getItem("cart"));
        dispatch(cartLengthSuccess(cartData?.length));
    },[])
    
    const handleMenu = () => {
        setIsMenuClicked(true)
        if (menuRef.current?.classList.contains('hidden')) {
            menuRef.current?.classList.remove('hidden');
        }
    }

    const handleClose = () =>{
        setIsMenuClicked(false)
        if(!menuRef.current?.classList.contains('hidden')){
            menuRef.current?.classList.add('hidden');
        }
    }

    return (
        <>
            <div className={`relative px-5 flex justify-between w-full z-20 ${isHome ? "bg-orange md:px-36 pt-12" : "bg-white md: px-10 py-2 shadow-lg"}`}>
                <div className="flex gap-3 md:gap-6">
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-16" />
                    </Link>
                    <div className="content-center">
                        <div className="location py-2 flex gap-2 cursor-pointer text-sm md:text-md md:mt-1 align-baseline" onClick={()=> setIsOpen(!isOpen)} >
                            <h3 className={`font-bold  underline underline-offset-1  hidden md:flex ${isHome ? "text-lg text-white" : "tex-md tex-darkGray"}`}>Other</h3>
                            <h4 className={`${isHome ? "text-lg text-white" : "text-md"}`}>{location}</h4>
                            <div className="py-1" >
                                <IoIosArrowDown className={`${isHome ? "text-white mt-1": ""}`}/>
                            </div>
                                   
                        </div>
                        <div>
                            {isOpen ? <Location setIsOpen={setIsOpen}/> : null} 
                        </div>
                    </div>             
                </div>
                      {/* text- */}
                <nav className="content-center">
                    {isMenuClicked ? (<IoMdClose className={`mt-2 text-lg -z-0 md:hidden ${isHome ? "text-white": "text-[#0a0a0a]"}`} onClick={handleClose}/>) : (<IoMenuOutline className={`text-2xl md:hidden -z-0  ${isHome ? "text-white font-bold": "text-[#0a0a0a]"}`} onClick={handleMenu} />)}
                    <div >
                        {
                            // isMenuClicked && (
                                <ul ref={menuRef} onClick={handleMenuClick} className={`hidden  bg-white shadow-2xl sm:min-h-[40vh]  absolute   space-y-3 py-8 md:space-y-0 md:relative md:top-0 md:left-0  md:flex md:gap-7 md:min-h-0 md:min-w-0 md:bg-inherit md:py-2 md:shadow-none font-bold ${isHome ? "md:text-white text-[#808080] top-24 rounded-lg min-w-52 right-5 " : "text-[#808080] top-14 rounded-lg min-w-52 right-5"} `} >
                                    <li className="hover:text-white">
                                        <Link to="/search" className={`flex justify-center gap-1 ${isHome ? "text-lg": "text-md hover:text-orange"}`}><Search className="text-xs" /> Search</Link>
                                    </li>
                                    <li lassName="hover:text-orange">
                                        <Link to="/about" className={`flex justify-center gap-1 ${isHome ? "text-lg": "text-md hover:text-orange"}`}><LifeBuoy className="text-xs" />About</Link>
                                    </li>
                                    <li className={`${isHome ? "hover:text-white" : "text-center hover:text-orange"}`}>
                                        <Link to="/cart">
                                            <h1 className={`flex justify-center gap-1 ${isHome ? "text-lg": "text-md"}`}>
                                                <BsBag className="font-bold text-2xl relative" ></BsBag>
                                                <span className="absolute mr-[40px] mt-[.20rem]">{cartLength}</span>
                                                Cart
                                            </h1>                               
                                        </Link>
                                    </li>
                                    <li className={`${isHome ? "hover:text-white flex justify-center" : "hover:text-orange flex justify-center"}`}>
                                        <button onClick={() => setIsClicked(!isClicked)} className={`flex gap-1 ${isHome ? "text-lg": "text-md"}`}><User className="text-xs" />{isClicked ? "Logout" : "Login"}</button>
                                    </li>
                                </ul>
                        //     )
                        }  
                    </div>
                    
                </nav>
            </div>
        </>
    )
}

export default Header;
