import Links from '../../constants/Links';

const MobileNavItems = ({ toggle }) => {
	return (
		<div className="fixed w-3/4 justify-center rounded-2xl text-gray-300 text-center shadow-2xl bg-opacity-100 py-4 mx-auto border-4 border-gray-800 bg-customblue-dark font-medium">
			<a onClick={toggle} href="#" className="block pt-0 pb-4 border-b border-gray-800">
				Home
			</a>
			<a onClick={toggle} href="#ethemerals" className="block py-4 border-b border-gray-800">
				Ethemerals
			</a>
			<a onClick={toggle} href="#battle" className="block py-4 border-b border-gray-800">
				Battle
			</a>
			<a onClick={toggle} href="#elf" className="block py-4 border-b border-gray-800">
				$ELF Token
			</a>
			<a onClick={toggle} href="#land" className="block py-4 border-b border-gray-800">
				Land
			</a>
			<a onClick={toggle} href="#community" className="block py-4 border-b border-gray-800">
				Community
			</a>
			<a onClick={toggle} href="#roadmap" className="block py-4 border-b border-gray-800">
				Roadmap
			</a>
			<div>
				<a onClick={toggle} href={Links.APP} className="block pt-4 pb-0 text-brandColor">
					Open App
				</a>
			</div>
		</div>
	);
};

export default MobileNavItems;
