import { useState, useEffect } from 'react';

import { isMobile } from "react-device-detect";
import NavBar from '../components/NavBar';
import LandingContent from '../components/LandingContent';


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  let bodyClassName = "";

  if(isMobile){
    bodyClassName = "overflow-hidden";
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [imgEthemavator, setEthemavator] = useState('');
  const [imgElfsymbol, setImgElfsymbol] = useState('');

  useEffect(() => {
    getImages('ethemavator', setEthemavator);
    getImages('elflogo', setImgElfsymbol);

  }, [])

  const getImages = async (imageName, setImg) => {
    try {
      const response = await fetch(`api/images/${imageName}`);
      const json = await response.json();
      setImg(json.url)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body className={bodyClassName}>
      <div className="text-white bg-black">
        <NavBar toggle={toggle} isOpen={isOpen} logo={imgEthemavator} symbol={imgElfsymbol}/>
        <LandingContent />
      </div>
    </body>

  )
}