import "@/styles/globals.css";
import { AppProvider } from "./contexts/PortfolioContext";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}
