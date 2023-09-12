import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import Layout from "@/layout/Layout";
//Burada bazi seyleri css ile ezecegimiz icin en alta yazdik

export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
