import { useAccount, useSendTransaction } from "wagmi";
import bnb from "../assets/bnb.png";
import dexicon from "../assets/dexicon.png";
import { useBalance } from "wagmi";
import { useContext, useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseEther } from "viem";
import axios from "axios";
import Success from "../components/modal/Success";
import PropTypes from "prop-types";
import { InfoContext } from "../provider/ContextProvider";

export const WalletConnect = () => {
  const [dxe, setDxe] = useState(0);
  const [buyBtnTxt, setBuyBtnTxt] = useState("Buy With BNB");
  const bnbRef = useRef(0);
  const [amounInBNB, setAmounInBNB] = useState(0);
  const { isConnected, address } = useAccount();
  const [openModal, setOpenModal] = useState(false);
  const info = useContext(InfoContext);
  const { updateData } = info;
  const {
    sendTransaction,
    data: SendTransactionData,
    error: SendTransactionErrorType,
  } = useSendTransaction();
  const balance = useBalance({
    address: address,
  });

  const updateDXE = (e) => {
    const amount = e.target.value * 60000;
    setDxe(amount);
  };

  const buyWithBnb = () => {
    const amount = parseFloat(bnbRef?.current?.value);

    if (isNaN(amount)) {
      toast.error("Only Number is allowed", {
        theme: "dark",
      });
      return;
    }

    if (amount === 0 || amount === "") {
      toast.error("Please type amount", {
        theme: "dark",
      });
      return;
    }

    if (amount < 0) {
      toast.error("Invalid amount", {
        theme: "dark",
      });
      return;
    }

    if (amount < 0.001) {
      toast.error("Minimum buy 0.001 BNB", {
        theme: "dark",
      });
      return;
    }

    if (amount > balance.data.formatted) {
      toast.error("Not enough balance", {
        theme: "dark",
      });
      return;
    }
    setAmounInBNB(bnbRef?.current?.value);
    setBuyBtnTxt("Processing");
    sendTransaction({
      to: "0xDD0F51CD9290519A8846e5a13F631192b3522E2a",
      value: parseEther(amount.toString()),
    });
  };

  useEffect(() => {
    if (SendTransactionErrorType) {
      setBuyBtnTxt("Buy With BNB");
      toast.error("Transaction failed", {
        theme: "dark",
      });
    }
  }, [SendTransactionErrorType]);

  useEffect(() => {
    if (SendTransactionData) {
      setBuyBtnTxt("successfull");
      setOpenModal(true);
      const apiObj = JSON.stringify({
        amountInBNB: amounInBNB,
        amountInDXE: dxe,
        address: address,
        hash: SendTransactionData,
      });

      //send data to database
      axios
        .post("https://anoxpay.com", apiObj)
        .then(() => {
          setBuyBtnTxt("Buy More With BNB");
          updateData();
        })
        .catch(() => {
          setBuyBtnTxt("Buy With BNB");
        });
    }
  }, [SendTransactionData]);

  useEffect(() => {
    updateData();
  }, [isConnected]);

  return (
    <>
      <ToastContainer></ToastContainer>
      <Success
        purchase={{
          amountInBNB: amounInBNB,
          amountInDXE: dxe,
          address: address,
          hash: SendTransactionData,
          dxeicon: dexicon,
          bnbicon: bnb,
        }}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></Success>
      <div>
        {isConnected && (
          <>
            <div className="flex flex-row gap-3 max-w-80">
              <div className="flex flex-col text-left gap-3">
                <span className="px-3">You send BNB</span>
                <div className="join pr-3 gap-1 items-center border-white border-[3px] rounded-full">
                  <input
                    className="input join-item bg-black w-full"
                    placeholder="0"
                    onChange={updateDXE}
                    ref={bnbRef}
                  />
                  <img src={bnb} className="w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col text-left gap-3">
                <span className="px-3">You receive $DXE</span>
                <div className="join pr-3 gap-1 items-center border-white border-[3px] rounded-full">
                  <input
                    className="input join-item bg-black w-full"
                    placeholder="0"
                    readOnly={true}
                    value={dxe}
                  />
                  <img src={dexicon} className="w-7 h-7" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button onClick={buyWithBnb} className="btn btn-primary">
                {buyBtnTxt} <img src={bnb} className="w-6 h-6" />
              </button>
            </div>
          </>
        )}
        <div className="mx-auto w-fit pt-6">
          <w3m-button />
        </div>
      </div>
    </>
  );
};
WalletConnect.propTypes = {
  SetMyToken: PropTypes.func.isRequired,
};
