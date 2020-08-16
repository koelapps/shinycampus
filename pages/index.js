import Head from 'next/head'
import Layout from "./components/Layout";
import StickyFooter from "./StickyFooter";

export default () => {
  return (
    <div className="container">
      <Head>
        <title>Shiny Campus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StickyFooter />
      </Layout>
    </div>
  )
}
