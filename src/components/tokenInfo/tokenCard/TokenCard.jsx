import { Link } from "react-router-dom";
import tokenCard from "../../../assets/tokenCard.gif";
import PropTypes from "prop-types"; // ES6
const TokenCard = ({ tokenInfo }) => {
  const { name, description, btnTxt, btnTarget } = tokenInfo;
  return (
    <>
      <div
        className="px-6 py-6 relative max-w-[350px] w-full text-white bg-cover shadow overflow-hidden group mx-auto"
        style={{ backgroundImage: `url(${tokenCard})` }}
      >
        <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[180px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
        <span className="h-[200px] absolute rounded-full w-[180px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
        <div className="space-y-6 z-20 relative text-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-xl">{description}</h2>

          <div>
            <Link to={`./${btnTarget}`} className="bg-[#1b8efa] py-2 px-6">
              {btnTxt}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

TokenCard.propTypes = {
  tokenInfo: PropTypes.object,
};

export default TokenCard;
