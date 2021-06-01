import Link from 'next/link';
import Image from 'next/image';
import Links from '../../constants/Links';

const symbol = '/logo_elf.svg';

const MobileNavItems = ({ toggle, toggleMobCountdown }) => {
	return (
		<>
			<div className="fixed w-3/4 justify-center rounded-2xl text-gray-300 text-center shadow-2xl bg-opacity-100 py-4 mx-auto border-4 border-gray-800 customblue font-medium">
				<Link href="/#">
					<a onClick={toggle} href="#" className="block pt-0 pb-4 border-b border-gray-800">
						Home
					</a>
				</Link>
				<Link href="/#ethemerals">
					<a onClick={toggle} href="#ethemerals" className="block py-4 border-b border-gray-800">
						Ethemerals
					</a>
				</Link>
				<Link href="/#battle">
					<a onClick={toggle} href="#battle" className="block py-4 border-b border-gray-800">
						Battle
					</a>
				</Link>
				<Link href="/#elf">
					<a onClick={toggle} href="#elf" className="block py-4 border-b border-gray-800">
						<Image src={symbol} width="14" height="14" />
						<span className="pl-2">ELF</span>
					</a>
				</Link>
				<Link href="/#land">
					<a onClick={toggle} href="#land" className="block py-4 border-b border-gray-800">
						Land
					</a>
				</Link>
				<Link href="/#community">
					<a onClick={toggle} href="#community" className="block py-4 border-b border-gray-800">
						Community
					</a>
				</Link>
				<Link href="/#roadmap">
					<a onClick={toggle} href="#roadmap" className="block py-4 border-b border-gray-800">
						Roadmap
					</a>
				</Link>

				<a onClick={toggleMobCountdown} className="block pt-4 pb-0 text-brandColor">
					Open App
				</a>
			</div>
		</>
	);
};

export default MobileNavItems;
