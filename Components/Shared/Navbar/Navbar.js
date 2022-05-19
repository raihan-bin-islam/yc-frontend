/* eslint-disable @next/next/no-img-element */
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
  // styles
  const {
    nav,
    navContainer,
    navScroll,
    navActive,
    dropdown,
    mainList,
    burger,
    cross,
    searchInput,
    inputCross,
    menuContainer,
  } = styles;

  //state
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // menu open and close state
  const [menuOpen, setMenuOpen] = useState(true);
  const [menuClose, setMenuClose] = useState(false);
  const navRef = useRef();

  // search input open close
  const [searchOpen, setSearchOpen] = useState(false);

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

  const HandleSearchInput = () => {
    setSearchOpen(true);
  };

  const HandleSearchClose = () => {
    setSearchOpen(false);
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
        <div className={menuContainer}>
          <ul className={mainList} ref={navRef}>
            <li>
              <Link href="/">
                <a className={router.pathname == "/" ? navActive : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname == "/about" ? navActive : ""}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/social-business">
                <a className={router.pathname == "/social-business" ? navActive : ""}>Social Business</a>
              </Link>
              {/* <ul className={dropdown}>
                <li>About Us</li>
              </ul> */}
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname == "/visit-programs" ? navActive : ""}>Visit Programs</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname == "/publications" ? navActive : ""}>Publications</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname == "/media" ? navActive : ""}>Media</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname == "/ysbc" ? navActive : ""}>YSBC</a>
              </Link>
            </li>
            <li>
              <Link href="/professor-yunus">
                <a className={router.pathname == "/professor-yunus" ? navActive : ""}>Professor Yunus</a>
              </Link>
              <ul className={dropdown}>
                <Link href="/professor-yunus/about-professor-yunus">
                  <li>About</li>
                </Link>
                <Link href="/professor-yunus/vision">
                  <li>Vision</li>
                </Link>
                <Link href="/professor-yunus/wishlist">
                  <li>Wishlist</li>
                </Link>
                <Link href="/professor-yunus/quotes">
                  <li>Quotes</li>
                </Link>
              </ul>
            </li>
            <li>
              <img src={magnifyIcon.src} alt="brand-yc" onClick={HandleSearchInput} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        {menuOpen && <img src={burgerIcon.src} alt="brand-yc" className={burger} onClick={HandleMenuOpen} />}
        {menuClose && <img src={crossIcon.src} alt="brand-yc" className={cross} onClick={HandleMenuClose} />}
      </div>
      {/* search box */}
      {searchOpen && (
        <div className={searchInput} id="searchInput">
          <input type="text" placeholder="search your query.." />
          <span className={inputCross} onClick={HandleSearchClose}>
            <img src={crossIcon.src} alt="brand-yc" />
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
