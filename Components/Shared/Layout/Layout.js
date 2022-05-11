import Head from "next/head";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import arrowUp from '../../../public/arrow_up.svg'
import arrowDown from '../../../public/arrow_down.svg'

const Layout = ({ children }) => {

  const [showUp, setShowUp] = useState(false)
  const [showDown, setShowDown] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  const scrollDown = () => {
    window.scrollTo(0, 1000);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowUp(true)
        setShowDown(false)
      } else {
        setShowUp(false)
        setShowDown(true)
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Yunus Centre - Global Hub for Social Business</title>
        <meta
          name="description"
          content="Since October 2006, when Professor Muhammad Yunus and Grameen Bank jointly received the Nobel Peace Prize, local and international interest in Professor Yunus’ work has grown exponentially. To address this ever-growing need, Professor Yunus founded Yunus Centre in July 2008 to promote and disseminate his work and philosophy, especially the concept and practice of social business."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" href="/yc-fav.svg" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar />
      {/* scroll buttons */}
      {showUp && <button className="scroll_btn_up" onClick={scrollToTop}>
        <img src={arrowUp.src} alt='arrow-up'/>
      </button>}
      {showDown && <button className="scroll_btn_down" onClick={scrollDown}>
        <img src={arrowDown.src} alt='arrow-up'/>
      </button>}
      {/* children */}
      {children}
      <Footer />
      <style jsx>{`
        .scroll_btn_up {
          position: fixed;
          right: 2.5%;
          top: 95vh;
          z-index: 1000;
          background-color: inherit;
        }
        .scroll_btn_down {
          position: fixed;
          right: 2.5%;
          top: 95vh;
          z-index: 1000;
          background-color: inherit;
        }
      `}</style>
    </>
  );
};

export default Layout;
