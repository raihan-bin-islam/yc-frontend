import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../../public/yunus_center.png";
import magnifyIcon from "../../../public/icon_magnify.svg";
import burgerIcon from "../../../public/icon_burger.svg";
import crossIcon from "../../../public/icon_cross.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const { nav, navContainer, navScroll, navActive, dropdown, mainList, burger, cross } = styles;
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // menu open and close state
  const [menuOpen, setMenuOpen] = useState(true);
  const [menuClose, setMenuClose] = useState(false);
  const navRef = useRef();

  const HandleMenuOpen = () => {
    navRef.current.style.left = "0";
    setMenuOpen(false);
    setMenuClose(true);
  };

  const HandleMenuClose = () => {
    navRef.current.style.left = "-100%";
    setMenuOpen(true);
    setMenuClose(false);
  };

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? nav + " " + navScroll : nav}>
      <div className={`container-layout ${navContainer}`}>
        <div>
          <img src={logo.src} alt="brand-yc" />
        </div>
        <div>
          <ul className={mainList} ref={navRef}>
            <li>
              <Link href="/">
                <a className={router.pathname == "/" ? navActive : ""}>Home</a>
              </Link>
            </li>
            <li>
              About
              <ul className={dropdown}>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
              </ul>
            </li>
            <li>
              <Link href="/social-business">
                <a className={router.pathname == "/social-business" ? navActive : ""}>Social Business</a>
              </Link>
            </li>
            <li>
              <Link href="/visit-programs">
                <a className={router.pathname == "/visit-programs" ? navActive : ""}>Visit Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/publications">
                <a className={router.pathname == "/publications" ? navActive : ""}>Publications</a>
              </Link>
            </li>
            <li>
              <Link href="/media">
                <a className={router.pathname == "/media" ? navActive : ""}>Media</a>
              </Link>
            </li>
            <li>
              <Link href="/ysbc">
                <a className={router.pathname == "/ysbc" ? navActive : ""}>YSBC</a>
              </Link>
            </li>
            <li>
              <Link href="/prof-yunus">
                <a className={router.pathname == "/prof-yunus" ? navActive : ""}>Prof. Yunus</a>
              </Link>
            </li>
            <li>
              <img src={magnifyIcon.src} alt="brand-yc" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        {menuOpen && <img src={burgerIcon.src} alt="brand-yc" className={burger} onClick={HandleMenuOpen} />}
        {menuClose && <img src={crossIcon.src} alt="brand-yc" className={cross} onClick={HandleMenuClose} />}
      </div>
    </nav>
  );
};

export default Navbar;
