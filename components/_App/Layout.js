import React from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Connectors - Digital Africa</title>
      </Head>

      {children}

      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
