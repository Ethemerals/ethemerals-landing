import Links from '../../constants/Links';

const symbol = '/logo_elf.svg';

const MenuItems = () => {
	return (
		<div className="flex items-center space-x-1 text-gray-400 font-medium">
			<a href="#ethemerals" className="px-3 hover:text-gray-100">
				Ethemerals
			</a>
			<a href="#battle" className="px-3 hover:text-gray-100">
				Battle
			</a>
			<a href="#elf" className="px-3 flex items-center hover:text-gray-100">
				<img src={symbol} className="w-6 h-6"></img>
				<span className="pl-2">ELF</span>
			</a>
			<a href="#land" className="px-3 hover:text-gray-100">
				Land
			</a>
			<a href="#community" className="px-3 hover:text-gray-100">
				Community
			</a>
			<a href={Links.APP} className="py-2 px-3 bg-brandColor hover:bg-yellow-400 text-white shadow-lg rounded transition duration-300">
				Open App
			</a>
		</div>
	);
};

export default MenuItems;
