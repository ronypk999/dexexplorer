import { useState } from "react";
import SetApart from "./SetApart";

const AboutMore = () => {
  // add your array of object data
  const array = [
    {
      title: "Our Mission: Decoding the Crypto Universe",
      description:
        "At the core of DexExplore.com is a relentless commitment to demystifying the crypto universe. We understand that the crypto space can be overwhelming, and our mission is to make it accessible to everyone. Whether you’re a seasoned trader, a curious enthusiast, or a newcomer exploring the possibilities of decentralized finance, DexExplore.com is your gateway to the future of finance.",
    },
    {
      title: "What Sets Us Apart:",
      description: <SetApart></SetApart>,
    },
    {
      title: "Our Vision: Shaping the Future of Finance",
      description:
        "DexExplore.com envisions a future where financial empowerment is decentralized and accessible to all. We strive to be at the forefront of this paradigm shift, fostering a community that embraces the principles of transparency, security, and inclusivity.",
    },
    {
      title: "Join Us on the Journey:",
      description:
        "Embark on your crypto journey with DexExplore.com and be a part of a community that is redefining the way we interact with and understand digital assets. Whether you’re here to explore, trade, learn, or innovate, DexExplore.com is your trusted companion in the decentralized future of finance.",
    },
  ];

  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div className="flex justify-center bg-black px-3">
      <div className=" max-w-[550px] rounded-lg py-20 space-y-6 cursor-pointer">
        {/* maping each accordion  */}
        {array.map((arr, idx) => (
          <div
            key={idx}
            onClick={() => handleToggle(idx)}
            className="flex items-center"
          >
            {/* the index div  */}
            <div className="w-16 h-16 bg-primary flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
              <span>0{idx + 1}</span>
            </div>
            <div className="w-10 h-[2px] bg-primary relative">
              <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
              <span className="bg-primary w-10 h-1"></span>
            </div>
            {/* main accordion div  */}
            <div className="w-full">
              <div className="max-w-[450px] bg-primary shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                <h1 className="text-white text-xl text-left">{arr.title}</h1>
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                  isOpen === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                    {arr.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMore;
