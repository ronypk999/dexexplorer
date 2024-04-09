import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const InfoContext = createContext({});

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(useLoaderData());

  const updateData = () => {
    axios
      .post(
        "https://anoxpay.com",
        JSON.stringify({
          info: 1,
          address: localStorage.getItem(
            "-walletlink:https://www.walletlink.org:Addresses"
          ),
        })
      )
      .then((d) => setData(d))
      .catch((e) => console.error(e));
  };

  const dataObject = { ...data.data, updateData };

  return (
    <InfoContext.Provider value={dataObject}>{children}</InfoContext.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
