
import React from 'react';

import Title from './sections/Title';
import Ethemerals from './sections/Ethemerals';
import Battle from './sections/Battle';
import Roadmap from './sections/Roadmap';
import Elf from './sections/Elf';
import Land from './sections/Land';
import Community from './sections/Community';
import Footer from './sections/Footer';



const bg1 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2F2717681.jpg?alt=media&token=5adaf5e5-3e79-4801-a623-172e90f945dc';






const Content = () => {
  return (
    <>
      <Title />
      <Ethemerals />
      <Battle />
      <Elf />
      <Roadmap />
      <Land />
      <Community />
      <Footer />
    </>
  );
};

export default Content;