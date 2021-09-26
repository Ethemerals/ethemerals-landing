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
			<br></br>- App update and integration
			<br></br>- The Graph integration
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
			- Early Adoptors rewards air dropped
			<br></br>- Continued work on equip able items and pets
			<br></br>- Start Community voting on the next Ethemeral Coins
		</>
	);

	const card2 = {
		heading: '2% Minted',
		body: card2body,
	};

	const card3body = (
		<>
			- ⚔️ Eternal Battle Contract deployed ⚔️
			<br></br>- Start design of 2nd set of 1000 mintable Ethemerals (the next 200 characters)
		</>
	);

	const card3 = {
		heading: '20% Minted',
		body: card3body,
	};

	const card4body = (
		<>
			- Commission artists to create 1 of 1 NFT artworks. Rewards for holding certain special sets of Ethemerals. Freely tradable
			<br></br>- Commission artist to create full anime depictions of the Ethemerals, part of the dynamic levelling system
		</>
	);

	const card4 = {
		heading: '40% Minted',
		body: card4body,
	};

	const card5body = (
		<>
			- Start artwork on the 2nd set of Ethemerals
			<br></br>- Continue to work on a primary marketplace (everything will still be available on opensea.io from the get go)
			<br></br>- ELF Liquidity locked and available for trading
		</>
	);

	const card5 = {
		heading: '60% Minted',
		body: card5body,
	};

	const card6body = <>- ⚔️ Into the Wilds Contract deployed⚔️ more details to come</>;

	const card6 = {
		heading: '80% Minted',
		body: card6body,
	};

	const card7body = (
		<>
			- Gen2 Ethemerals Released!
			<br></br>- Continued work on building the Ethemerals Metaverse and real time interactive games.
		</>
	);

	const card7 = {
		heading: '100% Minted (1000 tokens)',
		body: card7body,
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

					<div className="flex flex-row-reverse md:contents">
						{cssLCard(card6)}
						{cssLine}
					</div>

					<div className="flex flex-row-reverse md:contents">
						{cssLCard(card7)}
						{cssLine}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
