import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Yunus Centre - Global Hub for Social Business</title>
        <meta
          name="description"
          content="Since October 2006, when Professor Muhammad Yunus and Grameen Bank jointly received the Nobel Peace Prize, local and international interest in Professor Yunus’ work has grown exponentially. To address this ever-growing need, Professor Yunus founded Yunus Centre in July 2008 to promote and disseminate his work and philosophy, especially the concept and practice of social business."
        />
        <link rel="icon" href="/yc-fav.svg" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
