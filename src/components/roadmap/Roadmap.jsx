import { FaDotCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
const Roadmap = () => {
  return (
    <>
      <div className="bg-black text-white px-3">
        <div>
          <h1 className="mb-5 md:text-4xl font-bold text-2xl text-center">
            Roadmap
          </h1>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-success"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Finished</time>
              <div className="text-lg font-black">Website Launch</div>
              The birth of Dex Explore
            </div>
            <hr className="bg-success" />
          </li>
          <li>
            <hr className="bg-success" />
            <div className="timeline-middle">
              <FaDotCircle className="text-info"></FaDotCircle>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Live</time>
              <div className="text-lg font-black">$DXE Presale</div>
              Our presale goal is to raise $6m in Soft cap and $10m in Hard Cap
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaClock></FaClock>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Upcoming</time>
              <div className="text-lg font-black">Listings</div>
              Listing on top tier exchanges after the presale
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaClock></FaClock>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Upcoming</time>
              <div className="text-lg font-black">Platform</div>
              Our platform will go live after the presale, You can start your
              crypto search, exchange (Swap), AI analytics, wallet to wallet
              messaging and more
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaClock></FaClock>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Upcoming</time>
              <div className="text-lg font-black">Mass Adaption</div>
              We will announce our partnership with big brands, and huge
              marketing will start for mass adoption
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Roadmap;
