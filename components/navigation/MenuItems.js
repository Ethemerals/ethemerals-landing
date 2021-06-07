import Link from 'next/link';
import Links from '../../constants/Links';
import Image from 'next/image';

import LinkModal from '../Modals/LinkModal';
const symbol = '/logo_elf.svg';

const MenuItems = ({ toggleCountdown }) => {
	return (
		<>
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
				<Link href="/#roadmap">
					<a className="px-3 hover:text-gray-100">Roadmap</a>
				</Link>

				<a onClick={toggleCountdown} className="py-2 px-3 bg-brandColor hover:bg-yellow-400 text-white shadow-lg rounded cursor-pointer transition duration-300">
					Open App
				</a>
			</div>
		</>
	);
};

export default MenuItems;
