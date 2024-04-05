const Tokenomics = () => {
  return (
    <>
      <div className="hero py-12 bg-black">
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content  mx-3 ">
          <div className="max-w-lg md:h-[50vh] relative">
            <div className="absolute hidden md:block left-[-450px] top-[70px] z-0">
              <div className="relative">
                <div className="border-4 border-dashed border-white rounded-full p-4">
                  <div className="w-12 h-12 bg-primary rounded-full"></div>
                </div>
                <div className="absolute top-[50%] left-[100%] w-32 h-1 bg-white"></div>
              </div>
            </div>
            <div className="absolute hidden md:block right-[-450px] top-[10px] z-0">
              <div className="relative">
                <div className="border-4 border-dashed border-white rounded-full p-4">
                  <div className="w-12 h-12 bg-info rounded-full"></div>
                </div>
                <div className="absolute top-[50%] right-[100%] w-32 h-1 bg-white"></div>
              </div>
            </div>
            <div className="absolute hidden md:block right-[-450px] top-[150px] z-0">
              <div className="relative">
                <div className="border-4 border-dashed border-white rounded-full p-4">
                  <div className="w-12 h-12 bg-warning rounded-full"></div>
                </div>
                <div className="absolute top-[50%] right-[100%] w-32 h-1 bg-white"></div>
              </div>
            </div>
            <div className="absolute hidden md:block right-[-450px] top-[300px] z-0">
              <div className="relative">
                <div className="border-4 border-dashed border-white rounded-full p-4">
                  <div className="w-12 h-12 bg-success rounded-full"></div>
                </div>
                <div className="absolute top-[50%] right-[100%] w-32 h-1 bg-white"></div>
              </div>
            </div>
            <div className="mb-5 px-3 py-6 md:absolute top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[500px] z-10 border-2 border-white rounded-box bg-white text-center text-black">
              <h1 className="mb-5 md:text-4xl font-bold text-2xl">
                Tokenomics
              </h1>
              <div className="flex flex-col text-left gap-6">
                <div className="flex flex-col">
                  <span>Total Supply 1000,000,000 $DXE</span>
                  <progress
                    className="progress progress-primary"
                    value="100"
                    max="100"
                  ></progress>
                </div>
                <div className="flex flex-col">
                  <span>Pre-Sale 600,000,000 $DXE</span>
                  <progress
                    className="progress progress-info"
                    value="60"
                    max="100"
                  ></progress>
                </div>
                <div className="flex flex-col">
                  <span>Exchange Liquidity 200,000,000 $DXE</span>
                  <progress
                    className="progress progress-warning"
                    value="30"
                    max="100"
                  ></progress>
                </div>
                <div className="flex flex-col">
                  <span>Development & Marketing 100,000,000 $DXE</span>
                  <progress
                    className="progress progress-secondary"
                    value="20"
                    max="100"
                  ></progress>
                </div>
                <div className="flex flex-col">
                  <span>Early User Rewards 50,000,000 $DXE</span>
                  <progress
                    className="progress progress-success"
                    value="10"
                    max="100"
                  ></progress>
                </div>
                <div className="flex flex-col">
                  <span>Burn 50,000,000 $DXE</span>
                  <progress
                    className="progress progress-error"
                    value="10"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
