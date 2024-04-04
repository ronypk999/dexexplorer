import Banner from "../components/Banner/Banner";
import TokenInfo from "../components/tokenInfo/TokenInfo";
import WorldCrypto from "../components/worldCrypto/WorldCrypto";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <WorldCrypto></WorldCrypto>
      <TokenInfo></TokenInfo>
    </>
  );
};

export default Home;
