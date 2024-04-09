import { useState } from "react";

const SetApart = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (e, idx) => {
    e.stopPropagation();
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const datas = [
    {
      title: "Comprehensive Crypto Search Engine:",
      color: "green",
      description:
        "DexExplore.com is more than just a search engine; it’s a comprehensive tool that allows you to explore the vast world of cryptocurrencies effortlessly. Our search engine provides real-time information on a wide range of digital assets, from the well-established to the up-and-coming.",
    },
    {
      title: " Decentralized Exchange Integration:",
      color: "green",
      description:
        "We bring decentralized exchanges to your fingertips. Seamlessly connect with leading decentralized exchanges directly from our platform, making trading secure, efficient, and hassle-free.",
    },
    {
      title: "Wallet-to-Wallet Messaging:",
      color: "green",
      description:
        "Connect with other crypto enthusiasts through our secure wallet-to-wallet messaging feature. Share insights, discuss market trends, and stay informed about the latest developments in the crypto space.",
    },
    {
      title: "Portfolio Management:",
      color: "green",
      description:
        "Take control of your investments with our user-friendly portfolio management tools. Track the performance of your crypto holdings, view historical returns, and optimize your portfolio for success.",
    },
    {
      title: "Developer Tools and API:",
      color: "green",
      description:
        "For the tech-savvy, DexExplore.com offers a robust API, allowing developers to create custom tools and applications tailored to their specific needs. Dive into the world of crypto development and innovation with our developer-friendly platform.",
    },
  ];
  return (
    <div onClick={(e) => e.stopPropagation()} className="space-y-4 p-2 md:p-6">
      {datas?.map((data, idx) => (
        <div key={idx}>
          {/* header / Title */}
          <div
            onClick={(e) => handleToggle(e, idx)}
            className={`px-4 md:px-8 py-6 bg-green-50 border-green-500 border-l-[3px] cursor-pointer`}
          >
            <div className="flex items-center">
              <span>
                <svg
                  className={`mr-4 fill-green-900 shrink-0`}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
              <h4 className="text-xl text-green-900">{data.title}</h4>
            </div>
          </div>
          {/* body / content  */}
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
              isOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  text-green-900 bg-green-50 border-green-500">
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SetApart;
