import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
				{Array.isArray(box) && box.map((singleBox, i) => (
                    <div
                        key={i}
                        className='bounding-box'
                        style={{
                            top: singleBox.topRow,
                            right: singleBox.rightCol,
                            bottom: singleBox.bottomRow,
                            left: singleBox.leftCol
                        }}
                    ></div>
                ))}	
			</div>
		</div>
	);
}

export default FaceRecognition;