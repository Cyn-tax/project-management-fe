import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/teams");
  }, [])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Project Management App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
