import React, { useEffect, useState } from 'react';

import Title from './sections/Title';
import Ethemerals from './sections/Ethemerals';
import Battle from './sections/Battle';
import Roadmap from './sections/Roadmap';
import Elf from './sections/Elf';
import Land from './sections/Land';
import Community from './sections/Community';
import Footer from './sections/Footer';

const Content = () => {
	return (
		<>
			{/* <Title /> */}
			<Ethemerals />
			{/* <Battle />
			<Elf />
			<Land />
			<Community />
			<Roadmap />
			<Footer /> */}
		</>
	);
};

export default Content;
