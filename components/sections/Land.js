const Land = () => {
	return (
		<section className="bg-home-land bg-cover bg-center text-center h-screen text-gray-300 relative">
			<a id="landsmall">
				<div className="sm:hidden xs:block absolute m-0 top-2/4 w-full">
					<h1 className="text-5xl">Land and Item sales</h1>
					<p className="text-xl pt-2">coming soon!</p>
				</div>
			</a>

			<a id="landbig">
				<div className="sm:block xs:hidden absolute m-0 top-2/4 w-full">
					<h1 className="sm:text-6xl md:text-7xl lg:text-8xl">Land and Item sales</h1>
					<p className="sm:text-3xl md:text-4xl sm:pt-2 md:pt-4">coming soon!</p>
				</div>
			</a>
		</section>
	);
};

export default Land;
