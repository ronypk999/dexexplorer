import ClaimStep from "../components/claimStep/ClaimStep";
import { BiLoaderCircle } from "react-icons/bi";
import { MdAdsClick } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
const Claim = () => {
  const claim = [
    {
      title: "Buy & Wait until the presale is over.",
      icon: <BiLoaderCircle></BiLoaderCircle>,
    },
    {
      title: "Connect your BSC wallet.",
      icon: <MdAdsClick></MdAdsClick>,
    },
    {
      title: "Claim your DXE coins",
      icon: <GiProfit></GiProfit>,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-12 px-3 py-12">
        {claim.map((data, index) => {
          return <ClaimStep key={index} data={data} index={index}></ClaimStep>;
        })}
      </div>
    </>
  );
};

export default Claim;
