import PropTypes from "prop-types";
const ClaimStep = ({ index, data }) => {
  const { icon, title } = data;

  return (
    <div className="relative w-full mx-auto space-y-8 bg-white p-8 shadow-[0px_0px_30px_2px_rgba(100,100,111,0.1)] dark:bg-[#18181B] md:w-[300px]">
      {/* top part  */}
      <div>
        <div className="text-7xl text-white"> {icon}</div>

        {/* Price Ribbon SVG  */}
        <div className="absolute -right-[20px] -top-4 ">
          <div className="relative h-full w-full">
            {/* svg  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="120"
              height="120"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
            >
              <defs>
                <linearGradient
                  id="skyGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#0095FF", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#87CEFA", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z"
                  style={{ fill: "url(#skyGradient)" }}
                />
                <path
                  d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z"
                  style={{ fill: "#1976d2" }}
                />
              </g>
            </svg>
            {/* Price  */}
            <div className="absolute left-7 top-5 flex flex-col text-center text-3xl font-semibold text-white">
              <span>
                <span>{index + 1}</span>
              </span>
              <span className="text-xl font-normal">Step</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};
ClaimStep.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};
export default ClaimStep;
