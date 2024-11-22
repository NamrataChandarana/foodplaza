import burgerImg from "../../public/burger.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoBagCheckOutline, IoTimerOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl font-bold text-darkhead ">
                About Us
            </h1>
            <div className=" flex flex-wrap items-center justify-between w-full  p-4 my-10  ">
                <div className="  mx-auto">
                    <img src={burgerImg} alt="image" className="h-96 mx-auto object-cover"/>
                </div>  
                <div className="w-full sm:w-1/2 pl-2 mx-auto">
                    <h3 className="text-2xl font-bold text-darkGray text-center md:text-left ">Why to Choose us ?</h3>
                    <p className=" mt-3">At FoodCart, we pride ourselves on delivering exceptional quality and diverse menu options that cater to all tastes and dietary preferences. Our platform ensures a fast and reliable delivery service, bringing hot and fresh meals right to your doorstep. With a user-friendly interface, you can easily navigate and place your order in just a few clicks. We are committed to excellent customer service, providing assistance whenever needed. </p>
                    <p>Enjoy exclusive deals and discounts available only through our website, and rest assured that we maintain strict hygiene practices for your safety. </p>

                    <div className="w-full flex items-center flex-wrap mt-4 font-bold text-orange-600">
                        <div className="p-2 border-2 border-gray-300 mt-2 mr-2 hover:bg-orange hover:text-white">
                            <TbTruckDelivery className="inline-block text-xl mb-1 mr-1" />
                            Fast delivery
                        </div>
                        <div className="p-2 border-2 border-gray-300 mt-2 mr-2 hover:bg-orange hover:text-white">

                            <IoTimerOutline className="inline-block text-xl mb-1 mr-1" />
                            24x7 services
                        </div>
                        <div className="p-2 border-2 border-gray-300 mt-2 mr-2 hover:bg-orange hover:text-white">
                            <IoBagCheckOutline className="inline-block text-xl mb-1 mr-1" />
                            Easy checkout
                        </div>
                    </div>

                    <div>
                        <h3 className="my-3 text-2xl font-bold text-darkhead">
                            <span className="text-orange-500">Connect</span> with me:
                        </h3>
                        <a href="https://www.linkedin.com/in/namratachandarana" target="_blank">
                            <FaLinkedin className="inline-block text-4xl " />
                        </a>
                        <a href="https://github.com/NamrataChandarana" target="_blank">
                            <FaGithubSquare className="inline-block text-4xl" />
                        </a>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );  
}

export default About;
