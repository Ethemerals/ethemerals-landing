import Link from 'next/link';
import Links from '../../constants/Links';

const Footer = () => {
	return (
		<footer className="titleBg pb-8 pt-8 md:pt-12 xl:pt-16 border-gray-600 border-t-2">
			<div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 text-gray-400 ">
				<ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
					<li className="w-1/2 md:w-1/3 lg:w-1/3">
						<div className="text-center">
							<h2 className=" text-gray-200 text-bold uppercase mb-4 mt-8">Quick Links</h2>
							<ul>
								<li className="mb-4  hover:text-white transition-colors duration-200">
									<Link href="/">Home</Link>
								</li>
								<li className="mb-4  hover:text-white transition-colors duration-200">
									<Link href={Links.APP}>Open App</Link>
								</li>
								<li className="mb-4  hover:text-white transition-colors duration-200">
									<Link href={Links.HELP}> Docs / Help</Link>
								</li>
								<li className="mb-4  hover:text-white transition-colors duration-200">
									<Link href={Links.PRIVACY}>Privacy Policy</Link>
								</li>
								<li className="mb-4  hover:text-white transition-colors duration-200">
									<Link href={Links.TERMS}>Terms & Conditions</Link>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-center space-x-6">
					<a href={Links.TWITTER} target="_blank" className="hover:text-white">
						<svg width="20" height="20" viewBox="0 0 204 163" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M203.522 20.2007C196.257 23.3065 187.955 25.377 179.652 26.4123C187.955 21.236 195.22 12.954 198.333 3.63668C190.03 8.81296 181.728 11.9187 171.349 13.9892C164.085 5.7072 152.668 0.530884 141.252 0.530884C118.42 0.530884 99.7385 19.1655 99.7385 41.9411C99.7385 45.0469 99.7386 48.1526 100.776 51.2584C66.5278 49.1878 35.3926 32.6238 14.6359 7.77764C11.5223 13.9892 9.44667 21.236 9.44667 28.4828C9.44667 42.9763 16.7116 55.3995 28.1278 62.6462C20.8629 62.6462 14.6359 60.5757 9.44667 57.47C9.44667 77.1398 23.9764 94.7391 42.6574 97.8449C39.5439 98.8801 35.3927 98.8802 31.2413 98.8802C28.1278 98.8802 26.0521 98.8801 22.9386 97.8449C28.1278 114.409 43.6954 126.832 62.3764 126.832C47.8467 138.22 30.2035 144.431 10.4846 144.431C7.37106 144.431 4.25755 144.431 0.106201 143.396C18.7873 154.784 40.5818 162.031 64.4521 162.031C141.252 162.031 182.765 98.8802 182.765 44.0116V38.8353C191.068 35.7296 198.333 28.4827 203.522 20.2007Z" />
						</svg>
					</a>
					<a href={Links.DISCORD} target="_blank" className="hover:text-white">
						<svg width="20" height="20" viewBox="0 0 201 144" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M147.881 143.781C147.881 143.781 141.717 136.461 136.58 129.991C159.011 123.693 167.573 109.733 167.573 109.733C160.553 114.33 153.874 117.565 147.881 119.778C139.32 123.353 131.101 125.736 123.053 127.098C106.614 130.162 91.5456 129.311 78.7034 126.928C68.9428 125.055 60.5524 122.331 53.5318 119.607C49.5935 118.075 45.3126 116.203 41.0318 113.82C40.5181 113.478 40.0044 113.308 39.4908 112.968C39.1483 112.798 38.9771 112.628 38.8058 112.457C35.7236 110.755 34.0113 109.563 34.0113 109.563C34.0113 109.563 42.2305 123.182 63.9771 129.651C58.8401 136.12 52.5044 143.781 52.5044 143.781C14.662 142.589 0.278412 117.905 0.278412 117.905C0.278412 63.0888 24.9359 18.6571 24.9359 18.6571C49.5935 0.27159 73.0527 0.782298 73.0527 0.782298L74.7648 2.82513C43.9428 11.6774 29.7305 25.1261 29.7305 25.1261C29.7305 25.1261 33.4976 23.0832 39.8332 20.1893C58.1551 12.1881 72.7098 9.97507 78.7034 9.46434C79.7306 9.2941 80.587 9.12386 81.6141 9.12386C92.0591 7.76199 103.874 7.42152 116.203 8.78338C132.47 10.656 149.936 15.4227 167.744 25.1261C167.744 25.1261 154.217 12.3584 125.107 3.50608L127.504 0.782298C127.504 0.782298 150.963 0.27159 175.621 18.6571C175.621 18.6571 200.278 63.0888 200.278 117.905C200.278 117.905 185.723 142.589 147.881 143.781ZM68.2578 64.2805C58.4976 64.2805 50.7921 72.7921 50.7921 83.1768C50.7921 93.5614 58.6688 102.073 68.2578 102.073C78.0184 102.073 85.7234 93.5614 85.7234 83.1768C85.8948 72.7921 78.0184 64.2805 68.2578 64.2805ZM130.758 64.2805C120.998 64.2805 113.292 72.7921 113.292 83.1768C113.292 93.5614 121.169 102.073 130.758 102.073C140.518 102.073 148.223 93.5614 148.223 83.1768C148.223 72.7921 140.518 64.2805 130.758 64.2805Z" />
						</svg>
					</a>
					<a href={Links.GITHUB} target="_blank" className="hover:text-white">
						<svg width="20" height="20" viewBox="0 0 181 177" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M90.0585 0.5C40.3635 0.5 0.0585108 40.7975 0.0585108 90.5C0.0585108 130.265 25.8435 164 61.611 175.902C66.1035 176.735 67.5585 173.945 67.5585 171.575V154.82C42.5235 160.265 37.311 144.2 37.311 144.2C33.216 133.797 27.3135 131.03 27.3135 131.03C19.146 125.442 27.936 125.562 27.936 125.562C36.9735 126.192 41.7285 134.84 41.7285 134.84C49.7535 148.595 62.781 144.62 67.9185 142.318C68.721 136.505 71.0535 132.53 73.6335 130.288C53.646 128 32.631 120.282 32.631 85.805C32.631 75.9725 36.1485 67.9475 41.901 61.6475C40.971 59.375 37.8885 50.2175 42.7785 37.8275C42.7785 37.8275 50.3385 35.4125 67.536 47.0525C74.7135 45.0575 82.4085 44.06 90.0585 44.0225C97.7085 44.06 105.411 45.0575 112.604 47.0525C129.786 35.4125 137.331 37.8275 137.331 37.8275C142.229 50.225 139.146 59.3825 138.216 61.6475C143.991 67.9475 147.479 75.98 147.479 85.805C147.479 120.372 126.426 127.985 106.386 130.213C109.611 133.003 112.559 138.478 112.559 146.878V171.575C112.559 173.967 113.999 176.78 118.566 175.895C154.304 163.977 180.059 130.25 180.059 90.5C180.059 40.7975 139.761 0.5 90.0585 0.5Z" />
						</svg>
					</a>
					<a href={Links.INSTAGRAM} target="_blank" className="hover:text-white">
						<svg width="20" height="20" viewBox="0 0 160 161" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M137.231 0.780884H22.7692C9.84614 0.780884 0 10.627 0 23.5501V138.012C0 150.935 9.84614 160.781 22.7692 160.781H137.231C150.154 160.781 160 150.935 160 138.012V23.5501C160 10.627 150.154 0.780884 137.231 0.780884ZM80 128.781C106.462 128.781 128 107.858 128 82.627C128 78.3193 127.385 73.3963 126.154 69.704H139.692V134.935C139.692 138.012 137.231 141.089 133.538 141.089H26.4616C23.3846 141.089 20.3077 138.627 20.3077 134.935V69.0886H34.4616C33.2308 73.3963 32.6154 77.704 32.6154 82.0117C32 107.858 53.5385 128.781 80 128.781ZM80 110.319C62.7692 110.319 49.2308 96.7809 49.2308 80.1655C49.2308 63.5501 62.7692 50.0117 80 50.0117C97.2308 50.0117 110.769 63.5501 110.769 80.1655C110.769 97.3963 97.2308 110.319 80 110.319ZM139.077 44.4732C139.077 48.1655 136 51.2424 132.308 51.2424H115.077C111.385 51.2424 108.308 48.1655 108.308 44.4732V27.8578C108.308 24.1655 111.385 21.0886 115.077 21.0886H132.308C136 21.0886 139.077 24.1655 139.077 27.8578V44.4732Z" />
						</svg>
					</a>
				</div>
				<div className="text-center pt-10 sm:pt-12 flex items-center justify-center text-brandColor">ETHEMERALS.COM ©2021</div>
			</div>
		</footer>
	);
};

export default Footer;
