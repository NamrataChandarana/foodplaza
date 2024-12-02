import React from "react";
import { GitHub_link, LinkedIn_link, Twitter_link } from "../utils/constant";

const Footer = () => {
	return (
		<div className="px-48 mt-5 pt-10 pb-5 bg-[#0a0a0a] text-[#808080] font-semi">
			<div className="flex justify-between">
				<div className="">
					<h3 className="font-bold text-white text-lg">Food Home</h3>
					<p>© 2024 Jack</p>
					<p>Pvt. Ltd</p>
				</div>
				<div>
					<h3 className="font-bold text-white text-lg">Social Links</h3>
					<div>
						<i></i>
						<p>
							<a href={LinkedIn_link}
								target="_blank">
								LinkedIn
							</a>
						</p>
					</div>
					<div>
						<i></i>
						<p>
							<a href={GitHub_link}
								target="_blank">
								GitHub
							</a>
						</p>
					</div>
					<div>
						<i></i>
						<p>
							<a
								href={Twitter_link}
								target="_blank"
							>
								Twitter
							</a>
						</p>
					</div>
				</div>
				<div className="pb-8">
					<h3 className="font-bold text-lg text-white ">Company</h3>
					<p>Privacy Policy</p>
					<p>Terms & Conditions</p>
					<p>Help</p>
					<p>Contact Us</p>
					<p>About</p>
					<p>Careers</p>
				</div>
			</div>
			<div className="text-center font-bold">
				<h4>Created By <span className="text-white font-semibold">Namrata Chnadarana</span></h4>
				<h4>Email - namratachandarana20@gmail.com</h4>
			</div>
		</div>
	);
};
export default Footer;