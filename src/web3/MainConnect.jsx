import React, { useContext, useEffect, useRef } from "react";
import Success from "../components/modal/Success";
import dxeImage from "../assets/dexicon.png";

import { ToastContainer } from "react-toastify";

import { InfoContext } from "../provider/ContextProvider";

const MainConnect = () => {
  const {
    dxePrice,
    setAmountSender,
    selectedCoin,
    setSelectedCoin,
    setAmount,

    coins,
    amount,
  } = useContext(InfoContext);

  const sendCoinRef = useRef(0);

  const handleSelectCoin = (e, selectedName) => {
    const coin = coins.find(({ name }) => name === selectedName);
    setSelectedCoin(coin);
  };

  const updateDXE = () => {
    const amountInUSD = sendCoinRef.current.value * selectedCoin.price;

    const newAmountDxe = amountInUSD * dxePrice;

    setAmount(
      newAmountDxe.toString().length > 8
        ? parseFloat(newAmountDxe.toFixed(8))
        : newAmountDxe
    );
    setAmountSender(sendCoinRef.current.value);
  };

  useEffect(() => {
    updateDXE();
  }, [selectedCoin]);

  return (
    <>
      <ToastContainer></ToastContainer>

      <div>
        <div className="flex justify-around flex-wrap  gap-3 py-6 cursor-pointer">
          {coins.map(({ name, icon }, idx) => {
            return (
              <div
                className={`flex items-center gap-1 border-2 px-3 py-2 rounded-box ${
                  selectedCoin.name === name && "bg-white text-black"
                }`}
                key={idx}
                onClick={(e) => {
                  handleSelectCoin(e, name);
                }}
              >
                <h3 className="">{name}</h3>
                <img src={icon} className="w-6 h-6"></img>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col mx-auto gap-3 max-w-80">
          <div className="flex flex-col text-left gap-3">
            <span className="px-3">You send {selectedCoin.name}</span>
            <div className="join pr-3 gap-1 items-center border-white border-[3px] rounded-full">
              <input
                className="input join-item bg-black w-full"
                placeholder="0"
                onChange={updateDXE}
                ref={sendCoinRef}
              />
              <img src={selectedCoin.icon} className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col text-left gap-3">
            <span className="px-3">You receive $DXE</span>
            <div className="join pr-3 gap-1 items-center border-white border-[3px] rounded-full">
              <input
                className="input join-item bg-black w-full"
                placeholder="0"
                readOnly={true}
                value={amount}
              />
              <img src={dxeImage} className="w-7 h-7" />
            </div>
          </div>
        </div>

        <>
          <div className="pt-6">{selectedCoin.wallet}</div>
        </>

        <a
          href="https://web3paymentwidget.com"
          target="_blank"
          className="flex items-center w-fit mx-auto"
        >
          <span className="text-neutral-500 text-xs">Powered by </span>
          <img
            src="https://web3paymentwidget.com/wp-content/uploads/2024/04/Screenshot-2024-04-08-at-3.19.46%E2%80%AFAM.png"
            className="w-24"
          />
        </a>
      </div>
    </>
  );
};

export default MainConnect;
