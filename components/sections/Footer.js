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
					<a href={Links.TWITTER} target="_blank">
						<svg width="20" height="20" fill="currentColor" className="text-xl  hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
							<path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
						</svg>
					</a>
					<a href={Links.GITHUB} target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl  hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
							<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
						</svg>
					</a>
					<a href={Links.INSTAGRAM} target="_blank">
						<svg className="hover:text-white transition-colors duration-200" width="18" height="18" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M137.231 0H22.7692C9.84614 0 0 9.84616 0 22.7692V137.231C0 150.154 9.84614 160 22.7692 160H137.231C150.154 160 160 150.154 160 137.231V22.7692C160 9.84616 150.154 0 137.231 0ZM80 128C106.462 128 128 107.077 128 81.8462C128 77.5385 127.385 72.6154 126.154 68.9231H139.692V134.154C139.692 137.231 137.231 140.308 133.538 140.308H26.4616C23.3846 140.308 20.3077 137.846 20.3077 134.154V68.3077H34.4616C33.2308 72.6154 32.6154 76.9231 32.6154 81.2308C32 107.077 53.5385 128 80 128ZM80 109.538C62.7692 109.538 49.2308 96 49.2308 79.3846C49.2308 62.7692 62.7692 49.2308 80 49.2308C97.2308 49.2308 110.769 62.7692 110.769 79.3846C110.769 96.6154 97.2308 109.538 80 109.538ZM139.077 43.6923C139.077 47.3846 136 50.4615 132.308 50.4615H115.077C111.385 50.4615 108.308 47.3846 108.308 43.6923V27.0769C108.308 23.3846 111.385 20.3077 115.077 20.3077H132.308C136 20.3077 139.077 23.3846 139.077 27.0769V43.6923Z" />
						</svg>
					</a>
					<a href={Links.DISCORD} target="_blank">
						<svg className="text-xl w-6 h-6 hover:text-white transition-colors duration-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240">
							<path
								className="st0"
								d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
							/>
							<path
								className="st0"
								d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
							/>
						</svg>
					</a>
					<a href={Links.MEDIUM} target="_blank">
						<svg className="hover:text-white transition-colors duration-200" width="22" height="20" viewBox="0 0 48 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.70454 8.41083C5.76297 7.83357 5.54283 7.263 5.11178 6.87448L0.720964 1.58505V0.794922H14.3544L24.8924 23.906L34.157 0.794922H47.1538V1.58505L43.3997 5.1845C43.076 5.4312 42.9155 5.83668 42.9826 6.23799V32.6852C42.9155 33.0865 43.076 33.492 43.3997 33.7387L47.066 37.3381V38.1283H28.6246V37.3381L32.4227 33.6509C32.7959 33.2778 32.7959 33.168 32.7959 32.5974V11.2202L22.236 38.0405H20.8089L8.51466 11.2202V29.1955C8.41216 29.9512 8.66315 30.7121 9.19524 31.2586L14.1349 37.2503V38.0405H0.128204V37.2503L5.06787 31.2586C5.59609 30.7112 5.83244 29.9453 5.70454 29.1955V8.41083Z" />
						</svg>
					</a>
				</div>
				<div className="text-center pt-10 sm:pt-12 flex items-center justify-center text-brandColor">ETHEMERALS.COM ©2021</div>
			</div>
		</footer>
	);
};

export default Footer;
