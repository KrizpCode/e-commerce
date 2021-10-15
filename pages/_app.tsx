import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}
export default MyApp;
