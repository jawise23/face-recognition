import React from "react";

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="center ma">
			<div className = 'absolute mt3'>
			<img alt="detectionimage" src={imageUrl} width='500px' hieght='auto' />
			</div>
		</div>
	);
};

export default FaceRecognition;
