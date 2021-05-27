import Links from '../../constants/Links';
const webappMainURL = Links.APP;

const symbol = '/elflogo.png';

const MenuItems = () => {
	return (
		<div className="flex items-center space-x-1 text-gray-400">
			<a href="#ethemerals" className="px-3 hover:text-gray-200">
				Ethemerals
			</a>
			<a href="#battle" className="px-3 hover:text-gray-300">
				Battle
			</a>
			<a href="#elf" className="px-3 flex items-center hover:text-gray-300">
				<img src={symbol} className="w-6 h-6"></img>
				<span className="pl-1">ELF</span>
			</a>
			<a href="#land" className="px-3 hover:text-gray-300">
				Land
			</a>
			<a href="#community" className="px-3 hover:text-gray-300">
				Community
			</a>
			<a href={webappMainURL} className="py-2 px-3 bg-pink-600 hover:bg-yellow-300 text-white hover:text-blue-900 shadow-lg rounded transition duration-300">
				Open App
			</a>
		</div>
	);
};

export default MenuItems;
