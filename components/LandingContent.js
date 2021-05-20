import React, { useEffect, useState } from 'react';

import Title from './sections/Title';
import Title2 from './sections/Title2';
import Title3 from './sections/Title3';
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
			<Title />
			<Title2 />
			<Title3 />
			<Ethemerals />
			<Battle />
			<Elf />
			<Land />
			<Community />
			<Roadmap />
			<Footer />
		</>
	);
};

export default Content;
