import Head from "next/head";
import Home from "./home";
import Header from "../components/layout/Header";
import Input from "@/components/form/Input";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      
    </div>
  );
}
