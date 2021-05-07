import { useEffect, useState } from 'react'

const Community = () => {

  const [imgTeam, setImgTeam] = useState('');

  useEffect(() => {
    getImages('community', setImgTeam);

  }, [])

  const getImages = async (imageName, setImg) => {
    try {
      const response = await fetch(`api/images/${imageName}`);
      const json = await response.json();
      setImg(json.url)
    } catch (error) {
      console.log(error);
    }
  };


  const img1 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fdiscord.png?alt=media&token=cfb3cb84-7840-4589-8b10-fc770c0403cf';
  const img2 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fdiscourse.png?alt=media&token=22959544-27b1-4cce-9804-038094aaf250';
  const img3 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Freddit.png?alt=media&token=f52a4d06-df90-4770-ada7-0564df770aae';
  const img4 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Ftwitter.png?alt=media&token=c1bc09d7-2f9d-423f-aafe-8a05dab95842';

  return (
    <section className="bg-gray-200 px-4 pb-12 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32">
      <div className="max-w-4xl mx-auto text-center">
          <a id="community">
            <h2 className="text-black text-center xs:text-5xl md:text-7xl xs:pt-10 sm:pt-16 md:pt-24 ">
              Community
            </h2>
          </a>
        <p className="mt-3 text-base leading-7 sm:mt-4 text-black mb-4">
          Join our rapidly growing community of players, chat with the devs and artist. Interact with others players and have your say in shaping the future of the Kingdom of the Ethemerals.
        </p>
      </div>
      <div className="text-center md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-x-8 sm:grid lg:max-w-7xl m-auto">
      <div className="shadow-lg rounded-xl bg-white xs:w-9/12 lg:w-full m-auto my-4">
          <img src={img4} className="rounded-lg mx-auto justify-center w-50 h-50"/>
        </div>
        <div className="shadow-lg rounded-xl bg-white xs:w-9/12 lg:w-full m-auto my-4">
          <img src={img3} className="rounded-lg mx-auto justify-center w-50 h-50"/>
        </div>
        <div className="shadow-lg rounded-xl bg-white xs:w-9/12 lg:w-full m-auto my-4">
          <img src={img2} className="rounded-lg mx-auto justify-center w-50 h-50"/>
        </div>
        <div className="shadow-lg rounded-xl bg-white xs:w-9/12 lg:w-full m-auto my-4">
          <img src={img1} className="rounded-lg mx-auto justify-center w-50 h-50"/>
        </div>

      </div>

      <div className="max-w-4xl mx-auto text-center pt-20 text-black">
          <h3 className="xs:text-xl sm:text-2xl font-extrabold leading-9 sm:leading-10">
            About the Team
          </h3>
          <p className="mt-3 text-base leading-7 sm:mt-4">
            Kingdom of the Ethemerals was created by a small team of Developers and Artists who work in various fields of the art and entertainment industry. We are crypto enthuasis, grew up on Japanese anime and consume too many memes.
            <br></br>
            We are commited in creating an engaging universe and build a commited and vibrant community of players, taders, artist, and collectors.
          </p>
          <br></br>
          <p>
            To get in touch, please email contact@ethemerals.com
          </p>
      </div>
      <div className="mx-auto my-8 p-4 flex">
        <img src={imgTeam} className="rounded-lg mx-auto justify-center"/>
      </div>

  </section>
  );
}

export default Community;