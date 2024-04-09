import { useContext } from "react";
import footer from "../../assets/footer.jpeg";
import { FaGithub, FaTelegram, FaInfoCircle, FaBolt } from "react-icons/fa";
import { FaMessage, FaSquareXTwitter } from "react-icons/fa6";
import { InfoContext } from "../../provider/ContextProvider";
const Footer = () => {
  const info = useContext(InfoContext);
  const { totalHolders } = info;
  return (
    <div
      className="flex flex-col items-center justify-center border border-black w-full"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="flex flex-col items-center my-10 text-white space-y-8 bg-black max-w-4xl rounded-box">
        {/* featured div  */}
        <a href="https://coinglu.com/" target="_blank">
          <div className="flex items-center gap-4 bg-gradient-to-t from-black to-white/10 py-2 px-6 rounded-lg">
            <div className=" w-8 h-8 text-black text-2xl font-semibold bg-white flex justify-center items-center rounded-full">
              G
            </div>
            <div>
              <p className="text-gray-400 text-sm">Featured on</p>
              <p className="text-white font-medium">CoinGlu</p>
            </div>
          </div>
        </a>
        {/* header  */}
        <h1 className="text-3xl md:text-5xl font-semibold text-white text-center leading-[65px] ">
          Don&apos;t Miss Out Our{" "}
          <span className="text-primary">$DXE Token</span> Sale!
        </h1>
        {/* description  */}
        <p className="max-w-[58%] mx-auto text-center">
          Hurry up!{" "}
          <span className="text-gray-400">
            Join the excitement of our $DXE token sale and seize the opportunity
            to invest in the future of decentralized multichain system.
            Don&apos;t miss out on your chance to be part of the next big thing
            in crypto. Act now and secure your share of $DXE tokens!
          </span>
        </p>
        {/* people who use navigateUI  */}
        <div className="flex items-center py-4 pl-4 bg-gradient-to-tr from-black via-white/10 to-black border border-white/10 rounded-xl">
          <div className="w-14 h-14 bg-transparent  rounded-full border-[3px] border-[#191919]">
            <img
              className="w-full h-full rounded-full"
              src="https://source.unsplash.com/64x64/?people"
              alt="avatar navigate ui"
            />
          </div>
          <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
            <img
              className="w-full h-full rounded-full"
              src="https://source.unsplash.com/64x64/?kid"
              alt="avatar navigate ui"
            />
          </div>
          <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
            <img
              className="w-full h-full rounded-full"
              src="https://source.unsplash.com/64x64/?male"
              alt="avatar navigate ui"
            />
          </div>
          <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
            <img
              className="w-full h-full rounded-full"
              src="https://source.unsplash.com/64x64/?female"
              alt="avatar navigate ui"
            />
          </div>

          <div className="relative -left-5">
            <p className="text-lg text-white">{totalHolders}+</p>
            <p className="text-sm text-gray-400">people already participated</p>
          </div>
        </div>
        {/* buttons  */}
        <div className="flex flex-wrap gap-10 items-center py-4">
          <button className="flex items-center gap-4 px-8 py-3 bg-primary text-white text-lg font-medium rounded-lg">
            Buy $DXE Token{" "}
            <svg
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <footer className="footer footer-center p-10 bg-transparent text-white rounded">
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a className="link link-hover flex items-center gap-1">
            <FaGithub></FaGithub> <span>Github</span>
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaInfoCircle></FaInfoCircle> <span>About Us</span>
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaMessage></FaMessage>
            <span>Contact</span>
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaBolt></FaBolt>
            <span>Presale</span>
          </a>
        </nav>
        <nav className="font-bold">Follow Us!</nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaSquareXTwitter className="text-4xl"></FaSquareXTwitter>
            </a>
            <a>
              <FaTelegram className="text-4xl"></FaTelegram>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by dexexplorer.com</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
