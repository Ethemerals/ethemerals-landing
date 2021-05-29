const Roadmap = () => {
	const cssLine = (
		<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
			<div className="h-full w-6 flex items-center justify-center">
				<div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
			</div>
			<div className="w-6 h-6 absolute top-1/2 rounded-full bg-gray-400"></div>
		</div>
	);

	const cssLCard = (data) => (
		<div className="col-start-1 col-end-5 p-6 rounded my-4 ml-auto bg-gray-700 border border-gray-400">
			<h3 className="font-semibold text-lg mb-1">{data.heading}</h3>
			<p className="">{data.body}</p>
		</div>
	);

	const cssRCard = (data) => (
		<div className="col-start-6 col-end-10 p-6 rounded my-4 mr-auto bg-gray-600 border border-gray-400">
			<h3 className="font-semibold text-lg mb-1">{data.heading}</h3>
			<p className="">{data.body}</p>
		</div>
	);

	const card1body = (
		<>
			- ELF mainnet launch
			<br></br>- Core NFT mainnet launch
			<br></br>- Eternal Battle contract mainnet launch
			<br></br>- App update and intergration
			<br></br>- Marketing and social media push
			<br></br>- 100 Mintable Ethemeral classes available
		</>
	);

	const card1 = {
		heading: 'Q3 2021',
		body: card1body,
	};

	const card2body = (
		<>
			- Explore layer 2 posibilities
			<br></br>- ELF staking implementation
			<br></br>- PVP Battle contract testnet launch
			<br></br>- Continue Ethemeral coin designs
			<br></br>- Design and contract NFT set artwork
			<br></br>- Continue land and world development
		</>
	);

	const card2 = {
		heading: 'Q4 2021',
		body: card2body,
	};

	const card3body = (
		<>
			- IFPS Integration
			<br></br>- PVP Battle launch
			<br></br>- Layer 2 scaling testnet launch
			<br></br>- Boss Battle testnet launch
			<br></br>- Release redeemable set bonus NFT artwork
		</>
	);

	const card3 = {
		heading: 'Q1 2022',
		body: card3body,
	};

	const card4body = (
		<>
			- Layer 2 mainnet launch
			<br></br>- Boss Battle mainnet launch
			<br></br>- Additional NFT Mining Features
			<br></br>- Release new mintable Ethemeral classes
		</>
	);

	const card4 = {
		heading: 'Q2 2022',
		body: card4body,
	};

	const card5body = (
		<>
			- Governance research and development
			<br></br>- Integrate decentralized services
			<br></br>- Explore further gameplay mechanics
			<br></br>- Begin integrating Land and Items
		</>
	);

	const card5 = {
		heading: 'Q3 2022',
		body: card5body,
	};

	return (
		<section className="bg-roadmap bg-center bg-cover">
			<a id="roadmap"></a>
			<div className="mx-auto p-4 z-10 pb-10 md:pb-40 max-w-5xl">
				<h2 className="text-center text-7xl font-medium pt-20 md:pt-40 font-ubuntu overflow-hidden pb-8 text-gray-200">Roadmap</h2>
				<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
					<div className="flex flex-row-reverse md:contents">
						{cssLCard(card1)}
						{cssLine}
					</div>

					<div className="flex md:contents">
						{cssLine}
						{cssRCard(card2)}
					</div>

					<div className="flex flex-row-reverse md:contents">
						{cssLCard(card3)}
						{cssLine}
					</div>

					<div className="flex flex-row-reverse md:contents">
						{cssLCard(card4)}
						{cssLine}
					</div>

					<div className="flex md:contents">
						{cssLine}
						{cssRCard(card5)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
