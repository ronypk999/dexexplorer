import {
  useAccount,
  useChainId,
  useSendTransaction,
  useSwitchChain,
} from "wagmi";

import dexicon from "../../assets/dexicon.png";
import { useBalance } from "wagmi";
import { useContext, useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseEther } from "viem";
import axios from "axios";
import Success from "../../components/modal/Success";
import PropTypes from "prop-types";
import { InfoContext } from "../../provider/ContextProvider";

export const WalletConnect = () => {
  const {
    updateData,
    amountSender,
    amount,
    selectedCoin,
    setSelectedCoin,
    coins,
    amountValidate,
  } = useContext(InfoContext);

  const [buyBtnTxt, setBuyBtnTxt] = useState(`Buy with ${selectedCoin.name}`);

  const { isConnected, address } = useAccount();
  const [openModal, setOpenModal] = useState(false);

  const {
    sendTransaction,
    data: SendTransactionData,
    error: SendTransactionErrorType,
  } = useSendTransaction();
  const balance = useBalance({
    address: address,
  });

  useEffect(() => {
    if (address) {
      localStorage.setItem("address", address);
      updateData(address);
    }
  }, [address]);

  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();

  useEffect(() => {
    if (
      isConnected &&
      selectedCoin.chainId &&
      selectedCoin.chainId !== chainId
    ) {
      console.log("Trigger 1", selectedCoin.chainId, chainId);
      setTimeout(() => {
        switchChain({ chainId: selectedCoin.chainId });
        setBuyBtnTxt(`Buy with ${selectedCoin.name}`);
      }, 1000);
    }
  }, [selectedCoin, isConnected, chainId]);

  // useEffect(() => {
  //   if (
  //     isConnected &&
  //     selectedCoin.chainId &&
  //     selectedCoin.chainId !== chainId
  //   ) {
  //     console.log("Trigger 2", selectedCoin.chainId, chainId);
  //     setTimeout(() => {
  //       const coin = coins.find((coin) => coin.chainId === chainId);
  //       setSelectedCoin(coin);
  //       setBuyBtnTxt(`Buy with ${coin.name}`);
  //     }, 1000);
  //   }
  // }, [chainId, isConnected, selectedCoin]);

  const buyWithBnb = () => {
    const check = amountValidate(balance.data.formatted);
    if (check) {
      return toast.error(check, { theme: "dark" });
    }

    setBuyBtnTxt("Processing");
    sendTransaction({
      to: selectedCoin.receiver,
      value: parseEther(amountSender.toString()),
    });
  };

  useEffect(() => {
    if (SendTransactionErrorType) {
      setBuyBtnTxt(`Buy with ${selectedCoin.name}`);
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
        coinAmount: amountSender,
        dxeAmount: amount,
        address: address,
        refId: localStorage.getItem("refId") || null,
        hash: SendTransactionData,
        receiver: selectedCoin.receiver,
        coinName: selectedCoin.name,
      });

      //send data to database
      axios
        .post("https://dexexplore.com/api.php", apiObj)
        .then(() => {
          setBuyBtnTxt(`Buy More With ${selectedCoin.name}`);
          updateData();
        })
        .catch(() => {
          setBuyBtnTxt(`Buy with ${selectedCoin.name}`);
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
          amountInBNB: amountSender,
          amountInDXE: amount,
          address: address,
          hash: SendTransactionData,
          dxeicon: dexicon,
          coin: selectedCoin,
        }}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></Success>
      <div>
        {isConnected && (
          <>
            <div className="pt-6">
              <button onClick={buyWithBnb} className="btn btn-primary">
                {buyBtnTxt}
                <img src={selectedCoin.icon} className="w-6 h-6" />
              </button>
            </div>
          </>
        )}
        <div className="mx-auto w-fit pt-6">
          <w3m-button size="md" />
        </div>
      </div>
    </>
  );
};
WalletConnect.propTypes = {
  SetMyToken: PropTypes.func.isRequired,
};
