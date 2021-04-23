const Battle = () => {

  const imgBattle1 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fadventure-39ea842a422b6a06a2365ade9075bd52%401x.webp?alt=media&token=f19c742b-ac0e-4265-a357-8b62fb1c9c41';
  const imgBattle2 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fbattle-5931a0fe652f7c54505376b293d8638d%401x.webp?alt=media&token=8aa41c6a-00e1-45ba-9a44-cbbfca926f2f';
  const imgBattle3 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fbreeding-9e219af5186fc66e913716c8ddb2621e%401x.webp?alt=media&token=98379e18-37ee-4e6c-b44f-fdda21106e0a';

  return (
    <section className="battleBg px-4 pb-12 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32">
      <div className="max-w-4xl mx-auto text-center">
          <a id="battle">
            <h2 className="text-center xs:text-5xl md:text-7xl xs:pt-10 sm:pt-16 md:pt-24 ">
              Battle
            </h2>
          </a>
          <p className="mt-3 text-base leading-7 sm:mt-4 text-white">
            Kingdom of the Ethemerals needs you! Send your Ethemerals to battle to gain ranks, earn rewards and honor. Only the skilled and degenerates will rise to greatness.
          </p>
      </div>
      <div className="mt-20 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 lg:gap-x-20 lg:max-w-4xl">

          <div className="visible xs:hidden flex-shrink-0">
            <img src={imgBattle2} className="rounded-lg mx-auto justify-center"/>
            <p className="text-2xl font-extrabold leading-none text-white pt-4">
              PvP
            </p>
            <p className="mt-2 xs:mb-20 text-base leading-6 text-white">
              Settle those scores! Send your team of Ethemerals into the PvP arena. Outcomes determined by the Ethemerals coins real price data and group stat bonuses.
            </p>
          </div>

          <div className="flex-shrink-0">
              <img src={imgBattle1} className="rounded-lg mx-auto justify-center"/>
              <p className="text-2xl font-extrabold leading-none text-white pt-4">
                Eternal Battle
              </p>
              <p className="mt-2 xs:mb-20 text-base leading-6 text-white">
                Join the eternal battle between cryptocurrencys. Stake your Ethemerals HP and have real price data from On Chain Oracles determine the outcome. But watch out! There are reaper Ethemerals waiting on the sidelines.
              </p>
          </div>

          <div className="xs:visible sm:hidden flex-shrink-0">
              <img src={imgBattle2} className="rounded-lg mx-auto justify-center"/>
              <p className="text-2xl font-extrabold leading-none text-white pt-4">
                PvP
              </p>
              <p className="mt-2 xs:mb-20 text-base leading-6 text-white">
                Settle those scores! Send your team of Ethemerals into the PvP arena. Outcomes determined by the Ethemerals coins real price data and group stat bonuses.
              </p>
          </div>

          <div className="flex-shrink-0">
              <img src={imgBattle3} className="rounded-lg mx-auto justify-center"/>
              <p className="text-2xl font-extrabold leading-none text-white pt-4">
                Boss Raids
              </p>
              <p className="mt-2 xs:mb-20 text-base leading-6 text-white">
               Invaders are approacing the Kingdom, Miss Tesla? Miss Apple? Gather your Ethemerals and defend this scared land.
              </p>
          </div>
      </div>
      <div className="max-w-4xl mx-auto text-center pt-20">
          <h3 className="xs:text-xl sm:text-2xl leading-9 text-white sm:leading-10">
            Play to Earn, claim rewards!
          </h3>
          <p className="mt-3 text-base leading-7 sm:mt-4 text-white">
            Receive $ELF rewards each time Ethemerals are sent to the gameplay contracts. Winnings increase based on how well they performed. $ELF tokens are also redeemable by the highest ranking Ethemerals.
          </p>
      </div>
      <div className="w-52 mx-auto my-8 p-4 flex">
          <button type="button" className="py-2 px-4  bg-gradient-to-r from-green-400 to-green-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Onto Battle!
          </button>
      </div>
    </section>
  );
}

export default Battle;