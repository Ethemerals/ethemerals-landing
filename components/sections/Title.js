import { useState, useEffect } from 'react';

const logo = "https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Flogo.png?alt=media&token=e90250de-4f46-42c5-9de8-9e5bbdfbf904";

const bgs = [
  'https://i.imgur.com/G8tOaeY.png',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fblack-bullet-wallpaper-ultra-hd-4k-342401.jpg?alt=media&token=e686def2-37bd-4d7d-93f2-73129176adaa',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F783325.jpg?alt=media&token=d0b2ea9d-8024-4c16-8dbf-a4c69ca36faf',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F50783.jpg?alt=media&token=83944cde-1c0b-47e8-91d3-6912e52aa33b',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F36630.jpg?alt=media&token=53ff9213-12ca-44d1-b2fa-fe3c31847abe',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F336119.jpg?alt=media&token=52cc7ff1-834e-4b7a-85bf-19c58464adba',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F335998.jpg?alt=media&token=d9dd86e8-c9e9-4e60-9175-fe3ee51f3518',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F30650.jpg?alt=media&token=d4ec5220-6afb-4bb6-a3d9-b116618ee533',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F262940.jpg?alt=media&token=ce0feed6-910c-406a-9125-ba558491b896',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F259587.png?alt=media&token=4338e3d6-6d16-4b58-9dcd-cc67c2ab6306',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F259549.jpg?alt=media&token=b262744f-e631-43f7-8327-5d27ea86b253',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F2350057.jpg?alt=media&token=fab7a9b6-0289-4d19-a24a-49f8f5799ba8',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F2350044.jpg?alt=media&token=9bb53c17-84f1-4625-8769-e04e6c5ffa5a',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F19500.jpg?alt=media&token=7c98cffe-c6b1-4f8e-ae18-12355f09dbe5',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F178302.png?alt=media&token=ab863376-a53f-4991-8bdb-2b98843f8be8',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F17572.jpg?alt=media&token=23a85430-e004-4c9e-ae65-2198770631e8',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F12941f.jpg?alt=media&token=36c17aa3-91be-4ed8-807b-b789d61c29a6',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F12920flip.jpg?alt=media&token=72a95233-5170-41bd-846e-6ab131dacd17',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F12915.jpg?alt=media&token=9669b9ab-468d-4db3-93a7-a9009939328f',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F12901.jpg?alt=media&token=ba2aff54-a640-4d20-8901-96f5e26da402',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F12890.jpg?alt=media&token=1153d9e3-f7cb-4eef-a592-fab34757b0c8',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F12887.jpg?alt=media&token=eb91bbc3-e04c-468e-99d4-0d6a8bf8986e',
  'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2F1122078.jpg?alt=media&token=ba0588e5-fbe4-41be-b865-40b7c254f9eb'
]


const Title = () => {

  const [bgChoice, setBgChoice] = useState(0);

  let bg = bgs[bgChoice];

  function switchBg() {
    let currentBg = bgChoice;
    if(currentBg > bgs.length-1) {
      setBgChoice(0);
    } else {
      setBgChoice(currentBg+1);
    }
  }

  useEffect(() => {
    setTimeout(switchBg, 4000);
  }, [bgChoice])



  return (
      <div className="titleBg h-screen">
      <img src={bgs[4]} className="absolute h-full w-full object-cover"/>

      {/* to bake in */}
      <div className="inset-0 bg-black opacity-25 absolute"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex items-center xs:pt-16 sm:pt-20 md:pt-32 xl:py-40">
        <div className="xl:w-4/5 lg:w-3/5 flex flex-col items-start relative z-10">
          <span className="flex font-bold uppercase xl:text-4xl sm:text-2xl xs:text-lg text-yellow-400">
          <img src={logo} alt="brand icon" width="30" height="30" className="md:hidden" />
              <span className="px-4">Kingdom of the Ethemerals</span>
          </span>
          <h1 className="font-bold text-6xl xl:text-8xl sm:text-7xl text-white leading-tight mt-4 xs:mt-2 sm:mt-3">
              Join the Battle
              <br/>
              of a lifetime
          </h1>
          <span className="pt-6 text-2xl">
            Unique and Verifiably Rare NFT Collectables
          </span>

          <div className="flex items-center space-x-5 py-3 lg:mb-12">
            <a href="#">
              <svg fill="white" className="text-xl w-8 h-8 hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                </path>
              </svg>
            </a>
            <a href="#">
              <svg className="text-xl w-8 h-8 hover:text-white transition-colors duration-200" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>
            </a>
            <a href="#">
              <svg className="text-xl w-8 h-8 hover:text-white transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" ><path d="M59.158 53.002L64 57.677v.155H39.44v-.155l4.93-4.675c.526-.433.778-1.12.657-1.795V21.322c0-1.263 0-2.97.22-4.43L28.68 58.43h-.197L11.328 20.214l-.723-1.662V43.61a8.79 8.79 0 0 0 .811 4.896l6.902 9.172v.155H0v-.155l6.902-9.194c.73-1.512 1-3.204.81-4.874V15.916c.112-1.364-.295-2.72-1.14-3.788L1.687 5.725V5.57h17.528l14.68 32.368L46.822 5.57h17.156v.155l-4.82 5.428c-.578.427-.866 1.148-.745 1.86v38.194a1.78 1.78 0 0 0 .745 1.795z" fill="white"/></svg>
            </a>
          </div>
          <a href="#" className="block bg-purple-800 bg-opacity-80 hover:bg-yellow-300 py-3 px-4 rounded-lg text-lg font-bold uppercase xs:mt-6 sm:mt-10">
            Open Capsules
          </a>
          <div className="block bg-pink-400 bg-opacity-50 hover:bg-yellow-300 p-4 py-3 mt-6 text-sm font-bold">
            $ELF launched! 🚀 Buy on Uniswap
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;