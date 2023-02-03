/** @format */

import { WebProvider } from "@components/Provider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WebProvider>
      <Component {...pageProps} />
    </WebProvider>
  );
}
