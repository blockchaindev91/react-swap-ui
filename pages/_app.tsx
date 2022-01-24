import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Wallet } from "../views/commons/WalletProvider";
import Navigator from "../views/commons/Navigator";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wallet>
        <Navigator />
        <Component {...pageProps} />
      </Wallet>
    </>
  );
}

export default MyApp;
