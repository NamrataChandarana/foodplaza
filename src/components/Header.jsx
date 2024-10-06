import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import { Location }from './index'
import { useDispatch, useSelector } from "react-redux";
import { IoBag } from "react-icons/io5";
import { cartLengthSuccess } from "../redux/reducers/cartData";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {location}  = useSelector((state => state.location));
    const dispatch = useDispatch();
    const {cartLength} = useSelector((state) => state.cart);
    const [isClicked, setIsClicked] = useState(false);

    const handleLocation = () => {
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        const cartData = JSON.parse(localStorage.getItem("cart"));
        dispatch(cartLengthSuccess(cartData?.length));
    },[])
    

    return (
        <>
            <div className="px-10 py-5 flex justify-between w-full shadow-xl">
                <div className="flex gap-6">
                    <Link to="/">
                        <h1 className=" text-red-500 font-bold text-2xl font-Pacifico">FoodAdda</h1>
                    </Link>
                    
                    <div>
                        <div className="location py-2 flex gap-2 cursor-pointer text-md mt-1" onClick={handleLocation} >
                            <h3 className="font-bold  underline underline-offset-1 text-darkGray">Other</h3>
                            <h4>{location}</h4>
                            <div className="py-1" >
                                <IoIosArrowDown className="text-orange "/>
                            </div>
                            {
                                isOpen ? <Location setIsOpen={setIsOpen}/> : null
                            }        
                        </div>
                    </div>             
                </div>
                <nav>
                    <ul className="flex gap-7 py-1 mt-1.5 text-lg font-semibold text-darkGray">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <div className="relative flex gap-0.5">
                                    <IoBag className="mt-0.5 text-2xl text-green-600" /> Cart
                                    <div className="absolute text-xs top-2 left-2 text-white">
                                        {cartLength}
                                    </div>
                                </div>
                                
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => setIsClicked(!isClicked)}>{isClicked ? "Logout" : "Login"}</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;
