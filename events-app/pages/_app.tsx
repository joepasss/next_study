import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>All Events</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
