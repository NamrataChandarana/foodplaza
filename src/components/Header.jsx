import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Location }from './index'
import { useSelector } from "react-redux";
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {location}  = useSelector((state => state.location));
    const handleLocation = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="px-10 py-5 flex justify-between w-full">
                <div className="flex gap-6">
                    <h1 className=" text-red-500 font-bold text-2xl  font-Pacifico">Spice Spoon</h1>
                    <div>
                        <div className="location py-2 flex gap-2">
                            <h4>{location}</h4>
                            <div className="py-1" onClick={handleLocation}>
                                <IoIosArrowDown />
                            </div>
                            {
                                isOpen ? <Location setIsOpen={setIsOpen}/> : null
                            }        
                        </div>
                    </div>             
                </div>
                <nav>
                    <ul className="flex gap-5 py-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;
