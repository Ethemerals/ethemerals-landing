import Carousel from '../Carousel';

const Ethemerals = () => {

  const imgCard1 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2F9ac964ac3bd51968ce03b143c3d43e6b.jpg?alt=media&token=8501ce3f-b998-4228-bfae-ab4f15b900f4';
  const imgCard2 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fc0892eaa786d9698bbb7e3eda6c04053.jpg?alt=media&token=cbe9c6df-91f1-4338-a1df-852c63e98835';
  const imgCard3 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2F02f31bf2e2b4ae6608e1143ce7821d3e.jpg?alt=media&token=d5146231-4ba5-4f72-9b61-5625a49128b8';

  const imgIniSupply = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2FinitialSupply.png?alt=media&token=699843e1-76cd-4551-877d-672f18bc2adf';
  const imgInflation = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2FinflationRate.png?alt=media&token=7e5ebf6d-2bdf-4002-9369-d303ca6381ba';
  const imgTotalSupply = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2FtotalSupply.png?alt=media&token=c55a06bf-ae19-4a91-bfa8-36870dd48e98';

  const descriptionListItem = (props) => (
    <li className="flex">
      <div className="px-2 pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      <div className="px-2">
        <h3 className="text-xl font-semibold">
          {props.title}
        </h3>
        <p className="text-white leading-loose">
          {props.body}
        </p>
      </div>
    </li>
  )

  const liItem1 = {
    title: 'Crypto Sweat and Tears',
    body: (
      <span>
        When a cryptocurrency hits the CoinMarketcap 100 rankings they are rebirthed as an Ethemeral
      </span>
    )
  }

  const liItem2 = {
    title: 'Enter the Battlefield',
    body: (
      <span>
        Owning an Ethemeral unlocks the Kingdom of the Ethemerals ecosystem of On Chain games
      </span>
    )
  }

  const liItem3 = {
    title: 'Playable Characters',
    body: (
      <span>
        All Ethemerals are born equal, but through skillful play gain ranks and earn rewards for the player
      </span>
    )
  }

  const liItem4 = {
    title: 'Dynamic Stats',
    body: (
      <span>
        Each Ethemerals base stats are modified by their real world cryptocurrency price action
      </span>
    )
  }

  const liItem5 = {
    title: 'Blood on the Streets',
    body: (
      <span>
        Ethemerals are ruthless, Proceed with caution or be reaped by other Ethemerals
      </span>
    )
  }

  const liItem6 = {
    title: 'Set Bonus and Rewards',
    body: (
      <span>
        Collectors holding certain Ethemerals receive gameplay bonuses and also be able to mint one of a kind art NFTs. 100s of combinations to be discovered
      </span>
    )
  }



  return (
      // bake in
      <section className="ethemeralsBg bg-opacity-80 pb-20">
        <a id="ethemerals">
          <h2 className="text-center xs:text-5xl md:text-7xl pt-20">
            Meet the Ethemerals
          </h2>
        </a>
        <div className="text-center md:mb-12 lg:mb-20 py-12 lg:pb-0">
          <p className="lg:w-3/4 md:w-full m-auto xs:px-2 sm:px-4 leading-loose text-white md:text-2xl ">
            Ethemerals are beautifully handcrafted digital collectibles. Each Ethemeral is backed by a unique NFT minted on the Ethereum Blockchain. Owning one gives you exclusive access to the Kingdom of The Ethemerals Universe.
          </p>
        </div>
        <div className="w-full lg:w-2/3 overflow-hidden m-auto justify-center">
              <Carousel />
        </div>
        <div className="flex flex-wrap lg:w-4/5 justify-center m-auto">
          <div className="w-full px-8">
            <div className="sm:hidden">
              <ul className="space-y-6">
                {descriptionListItem(liItem1)}
                {descriptionListItem(liItem2)}
                {descriptionListItem(liItem3)}
                {descriptionListItem(liItem4)}
                {descriptionListItem(liItem5)}
                {descriptionListItem(liItem6)}
              </ul>
            </div>
            <div className="xs:hidden sm:visible sm:grid sm:grid-cols-2 max-w-6xl mx-auto">
              <ul className="space-y-6">
                {descriptionListItem(liItem1)}
                {descriptionListItem(liItem2)}
                {descriptionListItem(liItem3)}
              </ul>
              <ul className="space-y-6">
                {descriptionListItem(liItem4)}
                {descriptionListItem(liItem5)}
                {descriptionListItem(liItem6)}
              </ul>
            </div>
            <div className="flex justify-center py-20">
              <a href="#" className="uppercase py-2 px-4 xs:text-sm md:text-lg rounded-lg bg-purple-900 border-2 border-transparent text-white text-md mr-4 hover:bg-purple-600">
                Open Capsule
              </a>
              <a href="#" className="uppercase py-2 px-4 xs:text-sm md:text-lg rounded-lg bg-purple-900 border-2 border-transparent text-white text-md mr-4 hover:bg-purple-600">
                All Ethemerals
              </a>
            </div>
          </div>
        </div>


        <div className="xs:mx-auto xs:flex sm:flex flex-wrap justify-center items-center text-center gap-6 lg:gap-12 xs:py-6 sm:py-12 md:py-18 lg:py-30 lg:mt-20">
          <div className="w-full xs:w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-pink-200 shadow-lg rounded-lg bg-opacity-90">
            <div className="flex-shrink-0">
              <img src={imgIniSupply} className="rounded-lg mx-auto justify-center h-12 w-12"/>
            </div>
            <h3 className="text-2xl sm:text-xl text-black font-semibold  py-4">
              Initial Supply
            </h3>
            <p className="text-gray-700 py-4">
              100 Ethemeral classes released at launch, with a maximum of 10 editions each. Classes based on CoinMarketcap rankings snapshot taken on the 22 July 2021.
            </p>
          </div>
          <div className="w-full xs:w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-green-200 shadow-lg rounded-lg bg-opacity-90">
            <div className="flex-shrink-0">
              <img src={imgInflation} className="rounded-lg mx-auto justify-center h-12 w-12"/>
            </div>
            <h3 className="text-2xl sm:text-xl text-black font-semibold  py-4">
              Inflation Rate
            </h3>
            <p className="text-md text-gray-700 py-4">
              When new coins enter the top 100 CoinMarketcap rankings they will be given the honor of becoming an Ethemeral. Given life by our artists, become mintable and playable. On average a single mintable Ehemeral class will be released each week
            </p>
          </div>
          <div className="w-full xs:w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-pink-200 shadow-lg rounded-lg bg-opacity-90">
            <div className="flex-shrink-0">
              <img src={imgTotalSupply} className="rounded-lg mx-auto justify-center h-12 w-12"/>
            </div>
            <h3 className="text-2xl sm:text-xl text-black font-semibold  py-4">
              Total Supply
            </h3>
            <p className="text-md text-gray-700 py-4">
              Maximum 420 Ethemeral coins, with 10 editions each, for a total of 4200 ever to be mintable. At the inflation rate, the last coin to be minted in 6 years. Open a capsule now!
            </p>
          </div>
        </div>
      </section>
   );
}

export default Ethemerals;