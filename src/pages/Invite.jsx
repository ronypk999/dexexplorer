import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import axios from "axios";

const Invite = () => {
  const [reward, setReward] = useState(null);
  const [copy, setCopy] = useState(false);
  const { user, verifyEmail, setVerifyEmail, logout } = useContext(AuthContext);
  const refUrl = `https://dexexplore.com/invite/${user?.uid}`;
  const shareText =
    "#DXE PRESALE IS LIVE. Participate #dexexplore presale by clicking below";
  const handleCopy = () => {
    if (navigator.clipboard.writeText(refUrl)) {
      setCopy(true);
    } else {
      setCopy(null);
    }
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

  useEffect(() => {
    if (user) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/api.php`,
          JSON.stringify({
            ref: 1,
            uid: user.uid,
          })
        )
        .then((data) => setReward(data.data))
        .catch((e) => console.error(e));
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Invite your friends & earn $DXE</title>
      </Helmet>
      <div className="px-3 py-12 bg-black">
        <div className="card text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Invite your friends & earn $DXE</h2>
            <input
              type="text"
              placeholder="Refer URL"
              defaultValue={user && refUrl}
              className="input bg-neutral w-full max-w-sm"
              readOnly
              onClick={handleCopy}
            />
            <div className="card-actions justify-end">
              <button
                onClick={handleCopy}
                className={`btn btn hover:bg-white hover:text-black ${
                  copy === true && "btn-success"
                } ${copy === null && "btn-error"} ${
                  copy === false && "bg-black"
                } border-2 border-white text-white rounded-box`}
              >
                {copy === true && "Copied"}
                {copy === null && "Failed to copy"}
                {copy === false && "Copy"}
              </button>

              <button
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="btn hover:bg-white hover:text-black bg-black border-2 border-white text-white rounded-box"
              >
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="card text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title pb-6">Invite Stats</h2>

            <div className="flex max-w-sm w-full justify-around">
              <div className="flex flex-col gap-3">
                <div className="">{reward && reward.ref.length}</div>
                <h2>Total Invited</h2>
              </div>
              <div className="flex flex-col gap-3">
                <div className="">{reward && reward.dxeBalance} $DXE</div>
                <h2>Total Rewards</h2>
              </div>
            </div>
          </div>
        </div>
        {reward?.ref?.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table text-white">
              <thead className="text-white">
                <tr>
                  <th></th>
                  <th>Address</th>
                  <th>Purchased Amount</th>
                  <th>$DXE Amount</th>
                  <th>My Reward</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {reward.ref.map(
                  (
                    { id, address, dxeAmount, coinAmount, date, coinName },
                    idx
                  ) => {
                    return (
                      <tr key={id}>
                        <th>{idx}</th>
                        <td>{address}</td>
                        <td>
                          {coinName} {coinAmount}
                        </td>
                        <td>$DXE {dxeAmount}</td>
                        <td>$DXE {(dxeAmount / 100) * 5}</td>
                        <td>{date}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
              <tfoot className="text-white">
                <tr>
                  <th></th>
                  <th>Address</th>
                  <th>Purchased Amount</th>
                  <th>$DXE Amount</th>
                  <th>My Reward</th>
                  <th>Date & Time</th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-neutral max-w-xs">
          <h3 className="font-bold text-lg text-white">Share via</h3>
          <div className="py-4 flex flex-wrap justify-around">
            <FacebookShareButton url={user && refUrl} hashtag={shareText}>
              <FacebookIcon size={48} round />
            </FacebookShareButton>
            <TwitterShareButton
              title={shareText}
              url={user && refUrl}
              hashtag={shareText}
            >
              <XIcon size={48} round />
            </TwitterShareButton>
            <TelegramShareButton
              url={user && refUrl}
              title={shareText}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={48} round />
            </TelegramShareButton>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div>
        <div
          className={`fixed z-[100] flex items-center justify-center ${
            verifyEmail ? "opacity-1 visible" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
        >
          <div
            className={`absolute max-w-md rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
              verifyEmail
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            } `}
          >
            <svg
              onClick={() => setVerifyEmail(false)}
              className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
              </g>
            </svg>
            <h1 className="mb-2 text-2xl font-semibold">
              Dex Explore Email Verification!
            </h1>
            <p className="px-1 mb-3 text-sm opacity-80">
              Please check your email inbox for email verification link. Click
              the verification link and verify your email account to continue
              using dexexplore.com
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setVerifyEmail(false)}
                className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
              >
                Ok
              </button>
              <button
                onClick={() => {
                  setVerifyEmail(false);
                  logout();
                }}
                className="rounded-md bg-red-600 hover:bg-red-700 px-6 py-1.5 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invite;
