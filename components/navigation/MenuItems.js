import Link from 'next/link';
import Links from '../../constants/Links';
import Image from 'next/image';

const symbol = '/logo_elf.svg';

const MenuItems = () => {
	return (
		<div className="flex items-center space-x-1 text-gray-400 font-medium">
			<Link href="/#ethemerals">
				<a className="px-3 hover:text-gray-100">Ethemerals</a>
			</Link>
			<Link href="/#battle">
				<a className="px-3 hover:text-gray-100">Battle</a>
			</Link>
			<Link href="/#elf">
				<a className="px-3 flex items-center hover:text-gray-100">
					<Image src={symbol} width="24" height="24" />
					<span className="pl-2">ELF</span>
				</a>
			</Link>
			<Link href="/#land">
				<a className="px-3 hover:text-gray-100">Land</a>
			</Link>
			<Link href="/#community">
				<a className="px-3 hover:text-gray-100">Community</a>
			</Link>
			<Link href={Links.APP}>
				<a className="py-2 px-3 bg-brandColor hover:bg-yellow-400 text-white shadow-lg rounded transition duration-300">Open App</a>
			</Link>
		</div>
	);
};

export default MenuItems;
