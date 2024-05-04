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
import Verify from "../components/modal/Verify";

const Invite = () => {
  const [reward, setReward] = useState(null);
  const [copy, setCopy] = useState(false);
  const { user } = useContext(AuthContext);
  const refUrl = `https://dexexplore.com/invite/${user?.uid}`;
  const shareText = `Dex Explore Presale Is Live Buy $DXE Tokens By Clicking Below! #DexExplore

Follow @Dexexplore

Dex explore is a crypto search engine build on $SOL $BNB $ETH And More! Listing on top exchanges soon Buy Now.
`;
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

  const format = (am) => {
    return Number(am).toFixed(2);
  };

  return (
    <>
      <Helmet>
        <title>Invite your friends & earn $DXE</title>
      </Helmet>
      <div className="px-3 py-12 bg-black">
        <div className="card text-neutral-content">
          <div className="card-body items-center text-center">
            <h1 className="text-3xl font-bold pb-3 md:text-4xl">
              Earn upto $50,000+ in $DXE
            </h1>
            <h2 className="card-title">
              Invite your friends & earn 5% $DXE on purchase
            </h2>
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
                <div className="">
                  {reward && format(reward.dxeBalance)} $DXE
                </div>
                <h2>Total Rewards</h2>
              </div>
            </div>
          </div>
        </div>
        {reward?.ref?.length > 0 && (
          <div className="overflow-x-auto">
            {console.log(reward.ref[0].coinAmount)}
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
                {reward.ref.map((data, idx) => {
                  console.log(data);
                  return (
                    <tr key={idx}>
                      <th>{idx + 1}</th>
                      <td>{data[1]}</td>
                      <td>
                        {data[3]} {data[6]}
                      </td>
                      <td>{format(data[4])} $DXE</td>
                      <td>{format((data[4] / 100) * 5)} $DXE</td>
                      <td>{data[8]}</td>
                    </tr>
                  );
                })}
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
            <FacebookShareButton
              url={user && refUrl}
              hashtag="Dex Explore Presale Is Live Buy $DXE Tokens By Clicking Below! #DexExplore"
            >
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
      <Verify></Verify>
    </>
  );
};

export default Invite;
