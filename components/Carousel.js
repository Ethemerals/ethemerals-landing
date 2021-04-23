import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const imgCard1 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fc1.jpg?alt=media&token=8e8e48e3-03a7-45c6-884e-62960b48cd84';
const imgCard2 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fc2.jpg?alt=media&token=9b10cb7c-f561-4b58-bda6-12098fd81c3e';
const imgCard3 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fc3.jpg?alt=media&token=f8e33d58-1655-49f6-9ba5-71aa925d2a2e';
const imgCard4 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fc4.jpg?alt=media&token=c47da949-ebec-4f03-b296-c5a1eac82d44';
const imgCard5 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fc5.jpg?alt=media&token=a6a5d134-e451-42ac-b6c5-55a6a727b484';

const items = [
  <img className="m-auto" src={imgCard1} onDragStart={handleDragStart} />,
  <img className="m-auto" src={imgCard2} onDragStart={handleDragStart} />,
  <img className="m-auto" src={imgCard3} onDragStart={handleDragStart} />,
  <img className="m-auto" src={imgCard4} onDragStart={handleDragStart} />,
  <img className="m-auto" src={imgCard5} onDragStart={handleDragStart} />
];

const Carousel = () => {
  return (
    <AliceCarousel mouseTracking items={items} touchMoveDefaultEvents={false}/>
  );
}

export default Carousel;

