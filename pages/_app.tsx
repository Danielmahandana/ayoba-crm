import '../styles/globals.css';
import type { AppProps } from 'next/app';
import StoreContextProvider from '../context/StoreContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}

export default MyApp;
