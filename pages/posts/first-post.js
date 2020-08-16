import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";

export default () => {
  return <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Button variant="contained" color="primary">
        New button
      </Button>
      <Link href="/">
        Back to home
      </Link>
    </h2>
  </Layout>
}