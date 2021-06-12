import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./App.css";

// Using react-particles-js to render moving coolness
const particlesOptions = {
	particles: {
		number: {
			value: 75,
			density: {
				enable: true,
				value_area: 800,
			},
		},
	},
};

function App() {
	// Deconstructing useState into the state variable and the setState
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	// Creating variables looking for event changes.
	const onInputChange = (event) => {
		setInput(event.target.value);
	};
	const onButtonSubmit = (event) => {
		setImageUrl(input);
	};

	// Return the App
	return (
		<div className="App">
			<Particles className="particles" params={particlesOptions} />
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm
				onInputChange={onInputChange}
				onButtonSubmit={onButtonSubmit}
			/>
			<FaceRecognition imageUrl={imageUrl} />
		</div>
	);
}

export default App;
