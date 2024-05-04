import ClaimStep from "../components/claimStep/ClaimStep";
import { BiLoaderCircle } from "react-icons/bi";
import { MdAdsClick } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { Helmet } from "react-helmet";
const Claim = () => {
  const claim = [
    {
      title: "Buy & Wait until the presale is over.",
      icon: <BiLoaderCircle></BiLoaderCircle>,
    },
    {
      title: "Connect your wallet.",
      icon: <MdAdsClick></MdAdsClick>,
    },
    {
      title: "Claim your DXE coins",
      icon: <GiProfit></GiProfit>,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Claim Dex Explore tokens</title>
      </Helmet>
      <div className="flex flex-wrap gap-12 px-3 py-12">
        {claim.map((data, index) => {
          return <ClaimStep key={index} data={data} index={index}></ClaimStep>;
        })}
      </div>
    </>
  );
};

export default Claim;
