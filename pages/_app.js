import '../styles/globals.css'
import 'antd/dist/antd.css';
import { ApolloProvider } from "@apollo/client";
import client from "./../client/client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    )
}

export default MyApp
