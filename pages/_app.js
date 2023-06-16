import "@/styles/globals.css";
import Head from 'next/head';
import Header from '@/components/Header'
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Resmi Nike Sites</title>
        <meta name="description" content="Nike; yenilikçi ürünler, deneyimler ve hizmetlerle dünya çapında sporculara ilham veriyor." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
