import "@/styles/globals.css";
import useBgColor from "@/hooks/useBgColor";

export default function App({ Component, pageProps }) {
useBgColor()
  return <Component {...pageProps} />;
}
