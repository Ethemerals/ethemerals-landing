import { useState, useEffect } from 'react';
// import fetch from "node-fetch";
// import { app } from '../../../services/base';
// const storageRef = app.storage('gs://cbae-f9c77.appspot.com').ref();

const urlMain = 'https://d1b1rc939omrh2.cloudfront.net/';

const Title = ({ data }) => {
	const [imgTitlebg, setTitlebg] = useState('');
	const [imgEthemavator, setEthemavator] = useState('');

	useEffect(() => {
		getImages('titlebg', setTitlebg);
		getImages('ethemavator', setEthemavator);
	}, []);

	const getImages = async (imageName, setImg) => {
		try {
			const response = await fetch(`api/images/${imageName}`);
			const json = await response.json();
			setImg(json.url);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="titleBg bg-black h-screen">
			<img src={imgTitlebg} className="absolute h-full w-full object-cover" />

			{/* to bake in */}
			<div className="inset-0 bg-black opacity-25 absolute"></div>

			<div className="container mx-auto px-4 md:px-12 relative z-10 flex items-center xs:pt-12 sm:pt-20 md:pt-32 xl:py-40">
				<div className="xl:w-4/5 lg:w-3/5 flex flex-col items-start relative z-10 pt-12 sm:pt-0">
					<span className="flex font-bold uppercase xl:text-4xl sm:text-2xl xs:text-lg text-yellow-400">
						<span className="px-4 hidden sm:hidden md:flex -ml-4">Kingdom of the Ethemerals</span>
					</span>
					<h1 className="font-bold text-6xl xl:text-8xl sm:text-7xl text-gray-100 leading-tight mt-4 xs:mt-2 sm:mt-3">
						Join the Battle
						<br />
						of a lifetime
					</h1>
					<span className="pt-6 text-xl sm:text-2xl">Unique and Verifiably Rare NFT Collectables</span>
					<span className="pt-2 text-sm sm:text-base">Each playable token unlocks an ecosystem of onchain games. Are you ready to take on the challenge?</span>
					<div className="flex items-center space-x-5 py-4 lg:mb-12">
						<a href="#">
							<svg fill="white" className="text-xl w-7 h-7 hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
								<path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
							</svg>
						</a>
						<a href="#">
							<svg className="text-xl w-7 h-7 hover:text-white transition-colors duration-200" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240">
								<path
									class="st0"
									d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
								/>
								<path
									class="st0"
									d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
								/>
							</svg>
						</a>
						<a href="#">
							<svg width="28" height="22" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.70454 8.41083C5.76297 7.83357 5.54283 7.263 5.11178 6.87448L0.720964 1.58505V0.794922H14.3544L24.8924 23.906L34.157 0.794922H47.1538V1.58505L43.3997 5.1845C43.076 5.4312 42.9155 5.83668 42.9826 6.23799V32.6852C42.9155 33.0865 43.076 33.492 43.3997 33.7387L47.066 37.3381V38.1283H28.6246V37.3381L32.4227 33.6509C32.7959 33.2778 32.7959 33.168 32.7959 32.5974V11.2202L22.236 38.0405H20.8089L8.51466 11.2202V29.1955C8.41216 29.9512 8.66315 30.7121 9.19524 31.2586L14.1349 37.2503V38.0405H0.128204V37.2503L5.06787 31.2586C5.59609 30.7112 5.83244 29.9453 5.70454 29.1955V8.41083Z"
									fill="white"
								/>
							</svg>
						</a>
						<a href="#">
							<svg width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M24.0002 0C10.747 0 0 11.0169 0 24.6076C0 35.4799 6.87679 44.7039 16.4128 47.9577C17.6123 48.1855 18.0526 47.4239 18.0526 46.7739C18.0526 46.1872 18.0304 44.2487 18.02 42.1925C11.3431 43.6811 9.93424 39.2891 9.93424 39.2891C8.84249 36.4448 7.26945 35.6885 7.26945 35.6885C5.09192 34.1613 7.43359 34.1926 7.43359 34.1926C9.84363 34.3662 11.1126 36.7285 11.1126 36.7285C13.2532 40.4904 16.7272 39.4028 18.0967 38.7741C18.3121 37.1836 18.9341 36.0981 19.6205 35.4836C14.2897 34.8613 8.6859 32.7513 8.6859 23.3224C8.6859 20.6358 9.62345 18.4406 11.1587 16.7174C10.9095 16.0976 10.088 13.5947 11.3912 10.2052C11.3912 10.2052 13.4066 9.54387 17.993 12.7276C19.9074 12.1824 21.9606 11.9089 24.0002 11.8996C26.0398 11.9089 28.0946 12.1824 30.0126 12.7276C34.5934 9.54387 36.606 10.2052 36.606 10.2052C37.9123 13.5947 37.0905 16.0976 36.8413 16.7174C38.3801 18.4406 39.3113 20.6358 39.3113 23.3224C39.3113 32.7738 33.6968 34.8548 28.3525 35.464C29.2133 36.2276 29.9804 37.7252 29.9804 40.021C29.9804 43.3135 29.9526 45.9634 29.9526 46.7739C29.9526 47.4288 30.3846 48.1961 31.6011 47.9544C41.132 44.697 48 35.4762 48 24.6076C48 11.0169 37.2546 0 24.0002 0Z"
									fill="white"
								/>
								<path
									d="M9.16085 35.1623C9.10809 35.2833 8.92085 35.3196 8.75027 35.2365C8.57652 35.157 8.47893 34.992 8.53526 34.8706C8.58683 34.7459 8.77447 34.7112 8.94782 34.7947C9.12197 34.8742 9.22115 35.0408 9.16085 35.1623Z"
									fill="#161514"
								/>
								<path
									d="M10.1312 36.263C10.0169 36.3707 9.79358 36.3207 9.64205 36.1504C9.48535 35.9806 9.456 35.7534 9.57183 35.6441C9.68965 35.5363 9.90624 35.5868 10.0633 35.7566C10.22 35.9285 10.2506 36.1541 10.1312 36.263Z"
									fill="#161514"
								/>
								<path
									d="M11.0757 37.6663C10.9289 37.77 10.6889 37.6728 10.5406 37.4561C10.3938 37.2394 10.3938 36.9796 10.5437 36.8755C10.6925 36.7714 10.9289 36.865 11.0793 37.0801C11.2257 37.3004 11.2257 37.5602 11.0757 37.6663Z"
									fill="#161514"
								/>
								<path
									d="M12.3697 39.0219C12.2384 39.1692 11.9588 39.1297 11.7541 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0321 38.2001 12.2384 38.3994C12.4463 38.5955 12.5098 38.8763 12.3697 39.0219Z"
									fill="#161514"
								/>
								<path
									d="M14.1548 39.8091C14.0969 40 13.8276 40.0867 13.5562 40.0056C13.2853 39.9221 13.108 39.6986 13.1627 39.5057C13.219 39.3137 13.4896 39.2233 13.7629 39.31C14.0334 39.3932 14.2112 39.6151 14.1548 39.8091Z"
									fill="#161514"
								/>
								<path
									d="M16.1153 39.9552C16.122 40.1561 15.892 40.3228 15.6071 40.3264C15.3207 40.3329 15.089 40.1703 15.0859 39.9726C15.0859 39.7696 15.3108 39.6046 15.5972 39.5998C15.882 39.5941 16.1153 39.7555 16.1153 39.9552Z"
									fill="#161514"
								/>
								<path
									d="M17.9397 39.6392C17.9738 39.8353 17.7759 40.0366 17.493 40.0903C17.2149 40.1419 16.9575 40.0209 16.9222 39.8264C16.8877 39.6255 17.0892 39.4241 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392Z"
									fill="#161514"
								/>
							</svg>
						</a>
					</div>
					<a href={urlMain} className="block bg-pink-600 shadow-lg bg-opacity-100 hover:bg-yellow-300 py-3 px-4 rounded-lg text-lg font-bold uppercase xs:mt-6 sm:mt-10  transition duration-300">
						Open a Capsule
					</a>
					<div className="block bg-indigo-900 shadow-lg bg-opacity-100 hover:bg-yellow-300 p-4 py-3 mt-6 text-sm font-bold cursor-pointer transition duration-300">
						$ELF launched! 🚀 Trade on Uniswap
					</div>
				</div>
			</div>
		</div>
	);
};

export default Title;
