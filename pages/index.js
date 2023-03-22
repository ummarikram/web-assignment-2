import Body from '@/components/Body';
import Categories from '@/components/Categories';
import Header from '@/components/Header';
import Head from 'next/head'


export default function Index() {
  return (
    <>
      <Head>
        <title>People Per Hour</title>
        <meta name="description" content="Ummar Ikram" />
        <meta name="google-site-verification" content="rOtlkN26Shaj2eatcabyjYEgRQyb_Zlp1VX8tx8uW0A" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <Header />
      <Categories />
      <Body />

    </>
  );
}
