import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import Listings from "../components/listings/Listings";
import Roadmap from "../components/roadmap/Roadmap";
import TokenInfo from "../components/tokenInfo/TokenInfo";
import Tokenomics from "../components/tokenomics/Tokenomics";
import WorldCrypto from "../components/worldCrypto/WorldCrypto";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dex Explore Presale Is Live Buy $DXE Tokens</title>
      </Helmet>
      <Banner></Banner>
      <WorldCrypto></WorldCrypto>
      <TokenInfo></TokenInfo>
      <Tokenomics></Tokenomics>
      <Roadmap></Roadmap>
      <Listings></Listings>
    </>
  );
};

export default Home;
