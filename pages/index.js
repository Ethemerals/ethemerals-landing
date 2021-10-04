import { useState } from 'react';
import Title from '../components/sections/Title';
import Ethemerals from '../components/sections/Ethemerals';
import Battle from '../components/sections/Battle';
import Roadmap from '../components/sections/Roadmap';
import Elf from '../components/sections/Elf';
import Land from '../components/sections/Land';
import Community from '../components/sections/Community';

import LinkModal from '../components/Modals/LinkModal';

const Content = () => {
	const [showModal, setShowModal] = useState(false);

	const toggle = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<Title />
			<Ethemerals />
			<Battle />
			<Elf toggle={toggle} />
			{/* <Land /> */}
			<Community />
			<Roadmap />
			{showModal && <LinkModal toggle={toggle} />}
		</>
	);
};

export default Content;
