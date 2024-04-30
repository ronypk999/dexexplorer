import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ethImage from "../assets/ethereum.png";
import bnbImage from "../assets/bnb.png";
import solImage from "../assets/solana.png";
import { Wallet } from "../web3/solana/Wallet";
import { Web3ModalProvider } from "../web3/evm/WalletSetup";
import { toast } from "react-toastify";

export const InfoContext = createContext({});

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(useLoaderData());

  const updateData = (address) => {
    axios
      .post(
        "https://dexexplore.com/api.php",
        JSON.stringify({
          info: 1,
          address: address || localStorage.getItem("address"),
        })
      )
      .then((d) => setData(d))
      .catch((e) => console.error(e));
  };
  const coins = [
    {
      name: "SOL",
      icon: solImage,
      price: data?.data?.solPrice,
      wallet: <Wallet></Wallet>,
      chainId: 0,
      scanUrl: "https://solscan.io/tx/",
      receiver: "BmX1ZiVWyK4HrwAf4y7fuf9UbdtNjNQyemRGC64aBggf",
    },
    {
      name: "ETH",
      icon: ethImage,
      price: data?.data?.ethPrice,
      wallet: <Web3ModalProvider></Web3ModalProvider>,
      chainId: 1,
      scanUrl: "https://etherscan.io/tx/",
      receiver: "0xCA7D376a28833DeABEe24Fa9ff3eAd15C951e03a",
    },
    {
      name: "BNB",
      icon: bnbImage,
      price: data?.data?.bnbPrice,
      wallet: <Web3ModalProvider></Web3ModalProvider>,
      chainId: 56,
      scanUrl: "https://bscscan.com/tx/",
      receiver: "0x2e5a0262C786AA982B22444f9A8694ea50B068D3",
    },
  ];
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [amount, setAmount] = useState(0);
  const [amountSender, setAmountSender] = useState(0);

  const amountValidate = (balance) => {
    if (isNaN(amountSender)) {
      return "Only Number is allowed";
    }

    if (amountSender === 0 || amountSender === "") {
      return "Please type amount";
    }

    if (amountSender < 0) {
      return "Invalid amount";
    }

    if (amountSender < 0.001) {
      return "Minimum buy 0.001 BNB";
    }

    if (amountSender > balance) {
      return "Not enough balance";
    }
    return false;
  };
  const dataObject = {
    ...data.data,
    updateData,
    coins,
    setSelectedCoin,
    selectedCoin,
    amount,
    amountSender,
    setAmountSender,
    setAmount,
    amountValidate,
  };

  return (
    <InfoContext.Provider value={dataObject}>{children}</InfoContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
