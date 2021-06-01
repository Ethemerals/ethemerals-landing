import Image from 'next/image';

const imgLandBG = '/bg_landsales.jpg';

const Land = () => {
	return (
		<section className="text-center h-screen text-gray-100 relative landBg">
			<Image src={imgLandBG} className="absolute h-full w-full object-cover lg:object-scale-down" layout="fill" />
			<a id="land">
				<div className="h-full font-ubuntu">
					<div className="absolute m-0 top-2/4 w-full">
						<h1 className="text-5xl md:text-5xl lg:text-7xl">Land and Item sales</h1>
						<p className="text-xl md:text-2xl lg:text-4xl pt-2">coming soon!</p>
					</div>
				</div>
			</a>
		</section>
	);
};

export default Land;
