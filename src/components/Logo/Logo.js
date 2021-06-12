import React from "react";
import Tilt from "react-parallax-tilt";
import thinking from "./thinking.png";
import "./Logo.css";

const Logo = () => {
	return (
		<Tilt>
			<div
				className="ma4 mt0 br2 shadow-2 pa3"
				style={{ width: "150px", height: "150px" }}
			>
				<img alt="Machine Thinking" src={thinking} />
			</div>
		</Tilt>
	);
};
export default Logo;
