import { useAccount, useSendTransaction } from "wagmi";
import bnb from "../assets/bnb.png";
import { useBalance } from "wagmi";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseEther } from "viem";

export const WalletConnect = () => {
  const [dxe, setDxe] = useState(0);

  const bnbRef = useRef(0);
  const { isConnected, address } = useAccount();
  const { sendTransaction, data: SendTransactionData } = useSendTransaction();
  const balance = useBalance({
    address: address,
  });

  const updateDXE = (e) => {
    const amount = e.target.value * 60000;
    setDxe(amount);
  };

  const buyWithBnb = () => {
    const amount = parseFloat(bnbRef.current.value);

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

    sendTransaction({
      to: "0x77713194580a33816Ba7CDCFa5e9a59FF343535d",
      value: parseEther(amount.toString()),
    });
  };

  useEffect(() => {
    if (SendTransactionData) {
      const apiObj = {
        amountInBNB: bnbRef.current.value,
        hash: SendTransactionData,
        address: address,
      };

      //send data to database
    }
  }, [SendTransactionData, address]);

  return (
    <>
      <ToastContainer></ToastContainer>
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
                  <img src={bnb} className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button onClick={buyWithBnb} className="btn btn-primary">
                Buy with BNB <img src={bnb} className="w-6 h-6" />
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
