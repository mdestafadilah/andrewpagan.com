import './index.scss';
import Layout from './../components/Layouts/Layout';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        src="https://kit.fontawesome.com/1a2ad00ec6.js"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
