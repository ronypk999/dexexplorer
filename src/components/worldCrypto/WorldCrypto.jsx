import WorldCryptoImage from "../../assets/worldCrypto.png";
const WorldCrypto = () => {
  return (
    <>
      <div className="md:mx-6 mx-3  rounded-box mt-12">
        <div className="text-center font-bold mb-5">
          <h1 className="text-2xl md:text-5xl">Worlds First Crypto Explorer</h1>
          <h2 className="text-xl md:text-4xl">
            Explore Multichain is few clicks
          </h2>
        </div>
        <img
          className="w-full  rounded-box"
          src={WorldCryptoImage}
          alt="WorldCryptoImage"
        />
        <p className="text-xl md:text-3xl py-12 text-center leading-relaxed md:leading-relaxed">
          Welcome to Dex Explore your gateway to the vast and dynamic world of
          cryptocurrencies. Our Crypto Search feature empowers users to delve
          deep into the crypto space, offering a seamless and intuitive search
          engine for multi chain tokens.
        </p>
      </div>
    </>
  );
};

export default WorldCrypto;
