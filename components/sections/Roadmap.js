const Roadmap = () => {

  const cssLine = (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none">
        </div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow">
      </div>
    </div>
  )

  const cssLCard = (data) => (
    <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-pink-400">
      <h3 className="font-semibold text-lg mb-1">{data.heading}</h3>
      <p className="leading-tight">
        {data.body}
      </p>
    </div>
  )

  const cssRCard = (data) => (
    <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md bg-pink-400">
      <h3 className="font-semibold text-lg mb-1">{data.heading}</h3>
      <p className="leading-tight">
        {data.body}
      </p>
    </div>
  )

  const card1body = (
    <div>
      - ELF Token mainnet launch
      <br></br>
      - Core NFT mainnet launch
      <br></br>
      - Eternal Battle contract mainnet launch
      <br></br>
      - Website update and intergration
      <br></br>
      - Marketing and social media push
      <br></br>
      - 100 Mintable Ethemeral classes available
    </div>
  )

  const card1 = {
    heading: "Q3 2021",
    body: card1body
  }

  const card2body = (
    <div>
      - Explore layer 2 posibilities
      <br></br>
      - ELF Token staking implementation
      <br></br>
      - Group Battle contract testnet launch
      <br></br>
      - Ethemeral Classes stats finalized
      <br></br>
      - Design and create new Ethemeral coin classes
      <br></br>
      - Design and create set bonus NFT artwork
      <br></br>
      - Explore Land and world development
    </div>
  )

  const card2 = {
    heading: "Q4 2021",
    body: card2body
  }

  const card3body = (
    <div>
      - IFPS Integration
      <br></br>
      - Group Battle launch
      <br></br>
      - Layer 2 scaling testnet launch
      <br></br>
      - Boss Battle testnet launch
      <br></br>
      - PvP Battle testnet launch
      <br></br>
      - Release redeemable set bonus NFT artwork
    </div>
  )

  const card3 = {
    heading: "Q1 2022",
    body: card3body
  }

  const card4body = (
    <div>
      - Layer 2 mainnet launch
      <br></br>
      - Boss Battle mainnet launch
      <br></br>
      - PvP Battle mainnet launch
      <br></br>
      - Additional NFT Mining Features
      <br></br>
      - Release new mintable Ethemeral classes
    </div>
  )

  const card4 = {
    heading: "Q2 2022",
    body: card4body
  }

  const card5body = (
    <div>
      - Governance research and development
      <br></br>
      - Integrate decentralized services
      <br></br>
      - Explore further gameplay mechanics
      <br></br>
      - Begin integrating Land and Items into gameplay
    </div>
  )

  const card5 = {
    heading: "Q3 2022",
    body: card5body
  }

  const card6body = (
    <div>
      - Chainlink VRF Integration
      <br></br>
      - Continued development of NFT PoS mining platform
      <br></br>
      - Character balancing, rewards and content scaling for RPG Beta
      <br></br>
      - Onboard additional NFT Mining Partners
    </div>
  )

  const card6 = {
    heading: "Q4 2021",
    body: card6body
  }

  return (
    <section className="roadmapBg">
        <div className="container m-auto">
          <h2 className="text-center xs:text-5xl md:text-7xl p-8 pt-20 text-black">
              Roadmap
          </h2>
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              {cssLCard(card1)}
              {cssLine}
            </div>

            {/* <!-- right --> */}
            <div className="flex md:contents">
                {cssLine}
                {cssRCard(card2)}
            </div>

            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              {cssLCard(card3)}
              {cssLine}
            </div>

            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              {cssLCard(card4)}
              {cssLine}
            </div>

            {/* <!-- right --> */}
            <div className="flex md:contents">
              {cssLine}
              {cssRCard(card5)}
            </div>
          </div>
        </div>
      </section>

  );
}

export default Roadmap;