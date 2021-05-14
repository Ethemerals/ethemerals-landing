import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const imgCard1 = '/char1.png';
const imgCard2 = '/char2.png';
const imgCard3 = '/char3.png';
const imgCard4 = '/char4.png';
const imgCard5 = '/char5.png';

const items = [
	<img className="m-auto" src={imgCard1} onDragStart={handleDragStart} />,
	<img className="m-auto" src={imgCard2} onDragStart={handleDragStart} />,
	<img className="m-auto" src={imgCard3} onDragStart={handleDragStart} />,
	<img className="m-auto" src={imgCard4} onDragStart={handleDragStart} />,
	<img className="m-auto" src={imgCard5} onDragStart={handleDragStart} />,
];

const Carousel = () => {
	return <AliceCarousel mouseTracking items={items} touchMoveDefaultEvents={false} />;
};

export default Carousel;
