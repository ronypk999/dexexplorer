import PropTypes from "prop-types";

const Success = ({ openModal, setOpenModal, purchase }) => {
  const { amountInDXE, amountInBNB, hash, address, dxeicon, coin } = purchase;
  return (
    <div>
      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute max-w-md rounded-sm bg-black border-2 p-3 pb-5 text-center drop-shadow-2xl ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          } `}
        >
          <svg
            onClick={() => setOpenModal(false)}
            className="mx-auto mr-0 w-8 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                fill="#000"
              ></path>
            </g>
          </svg>
          <h1 className="mb-2 text-xl font-semibold">
            You have became part of $DXE! Thank you for contributing in our
            project
          </h1>
          <div className="flex justify-center gap-3 opacity-80 pt-3">
            <div className="flex">
              <p className="">You paid: {amountInBNB}</p>
              <img src={coin.icon} className="w-5 h-5" />
            </div>
            <div className="flex">
              <p className="">You receive: {amountInDXE}</p>
              <img src={dxeicon} className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col pt-6 opacity-80">
            <p className="text-left">$DXE Receiving Address:</p>
            <p className="text-left"> {address}</p>
          </div>
          <h1 className="mb-2 mt-2 text-xl font-semibold">
            $DXE will be sent your address after presale!
          </h1>
          <div className="pt-6 space-y-6">
            <div>
              <a
                className="btn btn-primary"
                href={`${coin.scanUrl}${hash}`}
                target="_blank"
              >
                Open Transaction in Explorer
              </a>
            </div>
            <div>
              <button
                onClick={() => setOpenModal(false)}
                className="btn btn-success"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Success.propTypes = {
  purchase: PropTypes.object.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};
export default Success;
