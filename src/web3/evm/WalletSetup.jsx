import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { bsc, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WalletConnect } from "./WalletConnect";
import PropTypes from "prop-types";
// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "09412ca882921e14c0d6e881f47855f7";

// 2. Create wagmiConfig
const metadata = {
  name: "DexExplore",
  description: `Worlds First Crypto Explorer, Explore Multichain is few clicks`,
  url: "https://dexexplore.com", // origin must match your domain & subdomain
  icons: ["https://dexexplore.com/dexicon.png"],
};

const chains = [bsc, mainnet];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  //   ...wagmiOptions // Optional - Override createConfig parameters
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function Web3ModalProvider() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnect></WalletConnect>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
