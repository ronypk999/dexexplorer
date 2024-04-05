import Banner from "../components/Banner/Banner";
import TokenInfo from "../components/tokenInfo/TokenInfo";
import Tokenomics from "../components/tokenomics/Tokenomics";
import WorldCrypto from "../components/worldCrypto/WorldCrypto";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <WorldCrypto></WorldCrypto>
      <TokenInfo></TokenInfo>
      <Tokenomics></Tokenomics>
    </>
  );
};

export default Home;
