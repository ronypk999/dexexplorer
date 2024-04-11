import AboutMore from "../components/about/AboutMore";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section className="w-full py-12 md:pt-24 flex justify-center bg-black text-white flex-col lg:pt-32 bg-gradient-to-b from-#52C2FF to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            {/* Text content */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Unveiling the Essence of Dex Explore
              </h1>
              <p className="mx-auto max-w-[700px]">
                Welcome to Dex Explore a pioneering platform designed to
                revolutionize the way you experience the world of
                cryptocurrencies. At DexExplore, we believe in empowering
                individuals to navigate the complex and ever-evolving landscape
                of digital assets with confidence and ease.
              </p>
            </div>
            <div className="flex gap-3 flex-col sm:flex-row pt-12">
              <a
                href="https://t.me/dexexplore"
                target="_blank"
                className="btn btn-primary"
              >
                <FaTelegram className="text-xl"></FaTelegram> Follow on Telegram
              </a>
              <a
                href="https://twitter.com/Dexexplore"
                target="_blank"
                className="btn btn-primary"
              >
                <FaSquareXTwitter className="text-xl"></FaSquareXTwitter> Follow
                on Twitter X
              </a>
            </div>
          </div>
        </div>
        {/* Feature Cards */}
        <div className="container mx-auto px-4 md:px-6 mt-16 flex flex-wrap justify-center items-center gap-9">
          <div className="flex flex-col items-center text-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 mb-4"
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={2} x2={22} y1={12} y2={12} />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <h3 className="text-lg font-semibold">Global Reach</h3>
            <p className="text-sm">Access content from all around the world.</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 mb-4"
            >
              <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
              <path d="m13 12-3 5h4l-3 5" />
            </svg>
            <h3 className="text-lg font-semibold">Fast and Efficient</h3>
            <p className="text-sm">Experience lightning fast load times.</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 mb-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <h3 className="text-lg font-semibold">Loved by Users</h3>
            <p className="text-sm">Join our community of happy users.</p>
          </div>
        </div>
      </section>
      <div className="">
        <AboutMore></AboutMore>
      </div>
    </>
  );
};

export default About;
