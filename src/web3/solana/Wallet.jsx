import React, { FC, useMemo } from "react";

import {
  ConnectionProvider,
  WalletProvider,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  CoinbaseWalletAdapter,
  WalletConnectWalletAdapter,
  HuobiWalletAdapter,
  TrustWalletAdapter,
  FractalWalletAdapter,
  SaifuWalletAdapter,
  SolflareWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl, Connection } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { SendSOLToRandomAddress } from "./SendSOLToRandomAddress";

export const Wallet = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const endpoint = "https://go.getblock.io/7022e46db4d4478a9445d349516a42d8/";

  const wallets = useMemo(
    () => [
      /**
       * Wallets that implement either of these standards will be available automatically.
       *
       *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
       *     (https://github.com/solana-mobile/mobile-wallet-adapter)
       *   - Solana Wallet Standard
       *     (https://github.com/anza-xyz/wallet-standard)
       *
       * If you wish to support a wallet that supports neither of those standards,
       * instantiate its legacy wallet adapter here. Common legacy adapters can be found
       * in the npm package `@solana/wallet-adapter-wallets`.
       */

      new SolflareWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new TrustWalletAdapter(),
      new PhantomWalletAdapter(),
      new WalletConnectWalletAdapter({
        network,
        options: {
          relayUrl: "wss://relay.walletconnect.com",
          // example WC app project ID
          projectId: "09412ca882921e14c0d6e881f47855f7",
          metadata: {
            name: "DexExplore",
            description: `Worlds First Crypto Explorer, Explore Multichain is few clicks`,
            url: "https://dexexplore.com", // origin must match your domain & subdomain
            icons: ["https://dexexplore.com/dexicon.png"],
          },
        },
      }),
      new HuobiWalletAdapter(),
      new FractalWalletAdapter(),
      new SaifuWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
            <WalletMultiButton />
            <SendSOLToRandomAddress></SendSOLToRandomAddress>
          </div>
          {/* Your app's components go here, nested within the context providers. */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
