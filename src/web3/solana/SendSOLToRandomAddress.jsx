import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import dexicon from "../../assets/dexicon.png";
import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import { InfoContext } from "../../provider/ContextProvider";
import { toast, ToastContainer } from "react-toastify";
import Success from "../../components/modal/Success";
import axios from "axios";

export const SendSOLToRandomAddress = () => {
  const { selectedCoin, updateData, amount, amountSender } =
    useContext(InfoContext);
  const { connection } = useConnection();
  const [hash, setHash] = useState(null);

  const [buyBtnTxt, setBuyBtnTxt] = useState(`Buy with ${selectedCoin.name}`);

  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    connection._rpcWsEndpoint =
      "wss://go.getblock.io/ca3f674384dc4f1eb2034625f8932439/";
    connection._rpcWebSocket.address =
      "wss://go.getblock.io/ca3f674384dc4f1eb2034625f8932439/";
  }, [connection]);

  const { publicKey, sendTransaction, connected } = useWallet();

  useEffect(() => {
    if (publicKey) {
      localStorage.setItem("addressSolana", publicKey?.toBase58());
      updateData(publicKey?.toBase58());
    }
  }, [publicKey]);

  const onClick = useCallback(
    async (e, amountSender, amount, selectedCoin) => {
      try {
        e.target.innerText = "Processing...";
        if (!publicKey) throw new WalletNotConnectedError();

        const sol = amountSender * LAMPORTS_PER_SOL;
        const feesAndSol = sol + 1500000;

        if (sol < 5000000) {
          toast.error("Minimum amount to proceed 0.005 SOL", { theme: "dark" });
          return;
        }

        const balance = await connection.getBalance(publicKey);
        if (balance < feesAndSol) {
          toast.error("Make sure you have 0.0015 SOL extra to cover gas fees", {
            theme: "dark",
          });
          return;
        }
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(selectedCoin.receiver),
            lamports: sol,
          })
        );

        const {
          context: { slot: minContextSlot },
          value: { blockhash, lastValidBlockHeight },
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, {
          minContextSlot,
        });
        setHash(signature);

        await connection.confirmTransaction({
          blockhash,
          lastValidBlockHeight,
          signature,
        });
        setOpenModal(true);

        const apiObj = JSON.stringify({
          coinAmount: amountSender,
          dxeAmount: amount,
          address: publicKey?.toBase58(),
          refId: localStorage.getItem("refId") || null,
          hash: signature,
          receiver: selectedCoin.receiver,
          coinName: selectedCoin.name,
        });

        //send data to database
        axios
          .post("https://dexexplore.com/api.php", apiObj)
          .then(() => {
            setBuyBtnTxt(`Buy More with ${selectedCoin.name}`);
            updateData();
          })
          .catch(() => {
            setBuyBtnTxt(`Buy with ${selectedCoin.name}`);
          });
      } finally {
        e.target.innerText = "Buy Now";
      }
    },
    [publicKey, sendTransaction, connection]
  );

  return (
    <>
      <ToastContainer></ToastContainer>
      <Success
        purchase={{
          amountInBNB: amountSender,
          amountInDXE: amount,
          address: publicKey?.toBase58(),
          hash: hash,
          dxeicon: dexicon,
          coin: selectedCoin,
        }}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></Success>
      <button
        className="wallet-adapter-button wallet-adapter-button-trigger"
        onClick={(e) => {
          onClick(e, amountSender, amount, selectedCoin);
        }}
        disabled={!publicKey}
      >
        {buyBtnTxt} <img src={selectedCoin.icon} className="w-6 h-6" />
      </button>
    </>
  );
};
