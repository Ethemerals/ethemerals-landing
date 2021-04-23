import { useState } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import NavBar from '../components/NavBar';
import LandingContent from '../components/LandingContent';

const logo = "https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Flogo.png?alt=media&token=e90250de-4f46-42c5-9de8-9e5bbdfbf904";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    let bodyClassName = "";

    if(isMobile){
      bodyClassName = "overflow-hidden";
    }

    const toggle = () => {
      setIsOpen(!isOpen);
    };



    return (
      <body className={bodyClassName}>
        <div className="text-white bg-black">
          <NavBar toggle={toggle} isOpen={isOpen} logo={logo}/>
          <LandingContent />
        </div>
      </body>

    )
}







    // useEffect(() => {
    //     fetchtokens();
    // }, [])

    // async function fetchtokens() {
    //     setLoading(true);
    //     const tokenData = await API.graphql({
    //         query: listTokens,
    //         variables: {
    //             limit: 1000,
    //             filter: {score: {gt: 0}}
    //         }
    //     })
    //     const { items } = tokenData.data.listTokens;

    //     setTokens(items);
    //     setLoading(false);
    // }

    // if(loading || tokens[0].id == undefined) {
    //     return (<div>Loading...</div>);
    // }

    // const makeNewToken = async (e) => {

    //     e.preventDefault();

    //     const tokenDetails = {
    //         id: '101',
    //         token_name: 'vet chain',
    //         typeId: '1'
    //     }

    //     // const newToken = await API.graphql({query: createToken, variables: {input: tokenDetails}});
    //     console.log(newToken);
    // }