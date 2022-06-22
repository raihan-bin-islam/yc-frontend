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
    dropdownParent,
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
    // router.push("/media/news");
  };

  const HandleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleSearch = (e) => {
    // console.log(e);
    e.code === "Enter" && router.push(`/search?keyword=${e.target.value}`);
    console.log(e.target.value);
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
          <Link href="/">
            <a>
              <img src={logo.src} alt="brand-yc" />
            </a>
          </Link>
        </div>
        <div className={menuContainer}>
          <ul className={mainList} ref={navRef}>
            <li>
              <Link href="/">
                <a onClick={HandleMenuClose} className={router.pathname == "/" ? navActive : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a onClick={HandleMenuClose} className={router.pathname == "/about" ? navActive : ""}>
                  About
                </a>
              </Link>
            </li>
            <li className={dropdownParent}>
              <Link href="#">
                <a
                  className={
                    router.pathname.includes("/social-business") && router.pathname !== "/media/videos/social-business"
                      ? `${navActive} ${dropdownParent}`
                      : dropdownParent
                  }
                >
                  Social Business
                </a>
              </Link>
              <ul className={dropdown}>
                <Link href="/social-business/concept">
                  <a onClick={HandleMenuClose}>
                    <li>Concept</li>
                  </a>
                </Link>
                <Link href="/social-business/issues">
                  <a onClick={HandleMenuClose}>
                    <li>Issues</li>
                  </a>
                </Link>
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>FAQs</li>
                  </a>
                </Link>
                <Link href="/social-business/organisations">
                  <a onClick={HandleMenuClose}>
                    <li>Organizations</li>
                  </a>
                </Link>
                <Link href="/social-business/events">
                  <a onClick={HandleMenuClose}>
                    <li>Events</li>
                  </a>
                </Link>
              </ul>
              {/* <ul className={dropdown}>
                <li>About Us</li>
              </ul> */}
            </li>
            <li className={dropdownParent}>
              <Link href="#">
                <a
                  className={
                    router.pathname.includes("/visit-programs") ? `${navActive} ${dropdownParent}` : dropdownParent
                  }
                >
                  Visit Programs
                </a>
              </Link>
              <ul className={dropdown}>
                <Link href="/visit-programs/our-programs">
                  {/* <Link href="#"> */}
                  <a onClick={HandleMenuClose}>
                    <li>Our Programs</li>
                  </a>
                </Link>
                <Link href="/visit-programs/offshore-programs">
                  {/* <Link href="#"> */}
                  <a onClick={HandleMenuClose}>
                    <li>Offshore Programs</li>
                  </a>
                </Link>
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>SB Volunteer</li>
                  </a>
                </Link>
              </ul>
            </li>
            <li className={dropdownParent}>
              <Link href="#">
                <a
                  className={
                    router.pathname.includes("/publications") ? `${navActive} ${dropdownParent}` : dropdownParent
                  }
                >
                  Publications
                </a>
              </Link>
              {/* dropdown menu */}
              <ul className={dropdown}>
                {/* <Link href="/publications/recommended-readings"> */}
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Recommended Readings</li>
                  </a>
                </Link>
                {/* <Link href="/publications/book-reviews"> */}
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Book Reviews</li>
                  </a>
                </Link>
                {/* <Link href="/publications/intern-magazine"> */}
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Intern Magazine</li>
                  </a>
                </Link>
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Newsletter</li>
                  </a>
                </Link>
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Booklet</li>
                  </a>
                </Link>
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>YC Brochure</li>
                  </a>
                </Link>
                <a onClick={HandleMenuClose} href="http://socialbusinesspedia.com/" target="__blank">
                  <li>More to SB Pedia</li>
                </a>
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>YC Spotlight</li>
                  </a>
                </Link>
              </ul>
            </li>
            <li className={dropdownParent}>
              <Link href="#">
                <a className={router.pathname.includes("/media") ? `${navActive} ${dropdownParent}` : dropdownParent}>
                  Media
                </a>
              </Link>
              <ul className={dropdown}>
                <Link href="/media/news">
                  {/* <Link href="#"> */}
                  <a onClick={HandleMenuClose}>
                    <li>News</li>
                  </a>
                </Link>
                {/* <Link href="/media/press-release"> */}
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Press Release</li>
                  </a>
                </Link>
                {/* <Link href="/media/rejoinders"> */}
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Rejoinders</li>
                  </a>
                </Link>
                {/* <Link href="/media/photo-gallery"> */}
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Photo Gallery</li>
                  </a>
                </Link>
                {/* <Link href="/media/videos"> */}
                <Link href="#">
                  <a onClick={HandleMenuClose}>
                    <li>Video Library</li>
                  </a>
                </Link>
              </ul>
            </li>
            <li>
              <Link href="/ysbc">
                <a onClick={HandleMenuClose} className={router.pathname == "/ysbc" ? navActive : ""}>
                  YSBC
                </a>
              </Link>
            </li>
            <li>
              <Link href="/professor-yunus">
                <a onClick={HandleMenuClose} className={router.pathname == "/professor-yunus" ? navActive : ""}>
                  Professor Yunus
                </a>
              </Link>
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
          <input type="text" placeholder="search your query.." onKeyUp={handleSearch} />
          <span className={inputCross} onClick={HandleSearchClose}>
            <img src={crossIcon.src} alt="brand-yc" />
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
