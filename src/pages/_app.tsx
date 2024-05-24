import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "@/componenets/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
