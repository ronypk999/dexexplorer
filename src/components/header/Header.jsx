import logo from "../../assets/logo.png";
import audit from "../../assets/audit.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-black text-white">
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-around">
          <div className="">
            <Link to="/" className="btn btn-ghost mx-0 px-0">
              <img src={logo} className="w-48" alt="Dex Explorer" />
            </Link>
          </div>
          <div className="">
            <img
              src={audit}
              className="w-32 md:w-48"
              alt="Audit By Solid Proof"
            />
          </div>
          <div className="flex gap-3">
            {location.pathname !== "/" && location.pathname !== "/buy" && (
              <NavLink
                to="/"
                className="btn hover:bg-white hover:text-black bg-black border-2 border-white text-white rounded-box"
              >
                Buy $DXE
              </NavLink>
            )}
            {location.pathname === "/" && (
              <NavLink
                to="/claim"
                className="btn hover:bg-white hover:text-black bg-black border-2 border-white text-white rounded-box"
              >
                Claim $DXE
              </NavLink>
            )}

            {location.pathname === "/buy" && (
              <NavLink
                to="/claim"
                className="btn hover:bg-white hover:text-black bg-black border-2 border-white text-white rounded-box"
              >
                Claim $DXE
              </NavLink>
            )}

            <NavLink
              to="/invite"
              className="btn hover:bg-white hover:text-black bg-black border-2 border-white text-white rounded-box"
            >
              Refer & Earn
            </NavLink>
          </div>
        </div>

        <div className="w-full md:h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4185 400"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              className="fill-white rotate-180 origin-center"
              opacity="0.2"
              d="M435.6,210.9c71.5,82.4,274,177.3,402,23.3c90.1-108.4,182,36,330-10c262.3-81.5,270,96,394,98
	c80,1.3,124.4-55.2,141.9-91.1c14.8-30.3,45.9-74.2,92.3-74.2c75,0,107.3,53.8,178.8,69.8c71.5,16,168.3-22.1,241.3,2.2
	c73,24.3,113.2,59,140.8,102.1s59.6,55.2,101.3,46.4c41.7-8.8,66.3-52.4,71.5-73.4c3.9-15.8,10.7-52.7,34.8-69
	c85.8-57.9,155.3-8.7,359.3,75.3c204,84,190,0,278-88c57.3-57.3,147-111.7,221.9-51.9c33.8,27,46.8,69.5,80.6,97.7
	c32.9,27.5,74.7,44.7,117.7,46.4c14.6,0.6,29.6-0.6,42.9-6.6c26.8-12.1,30.7-34.9,24-61c-3.5-13.6-7.6-28-3.6-41.5
	c16.3-54.4,116.7,8.5,141.5,23.5c47,28.4,99.3,68.2,156.9,67.4c62-0.9,115.2-95.8,180.7-114.3c12.1-3.4,20.6-14.3,20.6-26.9V0
	L1270.5,0L0,0l0,132.1c0,14.1,7.6,27.2,20.1,33.8C134.4,226.5,285.9,38.3,435.6,210.9z M3011.4,197.5c38.4-15.6,72-43.5,113.2-51.7
	c6.1-1.2,13.3-1.7,17.6,2.8c2.7,2.7,3.3,6.6,2.6,10.3c-0.6,3.4-2.4,6.8-4.8,9.3c-5,5.2-12,8-18.1,11.9
	c-16.5,10.7-25.4,29.5-35.6,46.3c-16.6,27.2-48,49.3-78.9,27.9C2970.8,229,2977.5,211.3,3011.4,197.5z M2363.7,198.7
	c1.3-14.8,16.5-25,31.2-27c20.4-2.8,41.2,5.8,56.4,19.7s25.3,32.5,32.6,51.7c3.8,10.2,7,21.1,5.2,31.8c-0.2,1.4-0.5,2.7-0.9,3.9
	c-7.4,26.6-40.5,19.8-58.7,7.6c-21.4-14.4-36.7-36.4-52.3-56.5C2370.2,220.6,2362.7,210.3,2363.7,198.7z M478.2,117.2
	c50.9-7.6,113.9,49.4,130.3,65.2c3.9,3.8,6.8,8.6,7.9,14c7.7,35.5-65.2,41.3-110.4-10C481,158,419.3,126,478.2,117.2z"
            ></path>
            <path
              className="fill-white rotate-180 origin-center"
              d="M2763.7,63c24.5,0.3,76.6,20.9,80.7,45.1c4.3,25.2-28.4,39-48.3,41.5c-31.3,4-75.5-9.8-87.7-42
	C2694.3,70.4,2736.1,62.7,2763.7,63z M1470.9,89.4c13.5-2.4,27.2,7.8,36.8,16c0,0,30,33,54.6,6.1c19.3-21.1,44.6-16.1,51.2,3
	c5.3,15.3-7.9,24.5-19.7,30.2c-5.5,2.7-11.1,5.4-16.6,8c-11.5,5.4-23.1,10.4-35.3,14.2c-13.9,4.4-28.5,7.3-43.1,7.5
	c-8.9,0.1-18.4-1.7-26.3-6.3c-9.6-5.6-15.7-14.6-18.6-25C1449.1,126.9,1448.4,93.5,1470.9,89.4z M0,32.3c0,4.8,0.9,9.6,2.7,14.1
	c50.1,127.6,97.6,18.3,207,43.8c120,28,195.5-171,471.5,67c79.3,68.4,96.5-51.8,158.5-81c116.1-54.8,138,72,248,113.8
	c115.5,43.9,234-84.5,308.3-35.1c13.4,8.9,21.5,22.8,34.9,32c16.7,11.5,35.8,19.5,56,22.3c55.7,7.8,114.5-11.7,209-65.4
	c94.5-53.7,163.8-31.9,198.5-12.4c34.7,19.5,87.2,46.7,144.9,46.7c57.8,0,69.3-56,69.3-56s10.5-83.2,62-91.8
	c51.5-8.6,92.4,33.4,125,64.6c39.8,38,89.8,15.9,136.5,11.9c58.7-5,116.2,19.1,167.9,44.1c63.5,30.7,129.7,65.9,200,60.1
	c65.2-5.4,121.6-45.1,175.8-81.7c58.8-39.7,120.2-73,193.2-70c165,6.9,285,83.1,387,93c102,9.9,129-193,204-93
	c73.9,98.4,139.1,210.5,412.2,36.2c8-5.1,12.8-14,12.8-23.5V0L0,0L0,32.3z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
