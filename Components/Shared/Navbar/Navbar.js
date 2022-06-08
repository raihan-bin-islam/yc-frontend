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
                <a className={router.pathname == "/" ? navActive : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname == "/about" ? navActive : ""}>About</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname.includes("/social-business") ? navActive : ""}>Social Business</a>
              </Link>
              <ul className={dropdown}>
                <Link href="/social-business/concept">
                  <a>
                    <li>Concept</li>
                  </a>
                </Link>
                <Link href="/social-business/issues">
                  <a>
                    <li>Issues</li>
                  </a>
                </Link>
                <Link href="/social-business/faq">
                  <a>
                    <li>FAQs</li>
                  </a>
                </Link>
                <Link href="/social-business/organisations">
                  <a>
                    <li>Organizations</li>
                  </a>
                </Link>
                <Link href="/social-business/events">
                  <a>
                    <li>Events</li>
                  </a>
                </Link>
              </ul>
              {/* <ul className={dropdown}>
                <li>About Us</li>
              </ul> */}
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname == "/visit-programs" ? navActive : ""}>Visit Programs</a>
              </Link>
              <ul className={dropdown}>
                {/* <Link href="/visit-programs/our-programs"> */}
                <Link href="#">
                  <a>
                    <li>Our Programs</li>
                  </a>
                </Link>
                {/* <Link href="/visit-programs/offshore-programs"> */}
                <Link href="#">
                  <a>
                    <li>Offshore Programs</li>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <li>SB Volunteer</li>
                  </a>
                </Link>
              </ul>
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname == "/publications" ? navActive : ""}>Publications</a>
              </Link>
              {/* dropdown menu */}
              <ul className={dropdown}>
                {/* <Link href="/publications/recommended-readings"> */}
                <Link href="#">
                  <a>
                    <li>Recommended Readings</li>
                  </a>
                </Link>
                {/* <Link href="/publications/book-reviews"> */}
                <Link href="#">
                  <a>
                    <li>Book Reviews</li>
                  </a>
                </Link>
                {/* <Link href="/publications/intern-magazine"> */}
                <Link href="#">
                  <a>
                    <li>Intern Magazine</li>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <li>Newsletter</li>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <li>Booklet</li>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <li>YC Brochure</li>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <li>More to SB Pedia</li>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <li>YC Spotlight</li>
                  </a>
                </Link>
              </ul>
            </li>
            <li>
              <Link href="#">
                <a className={router.pathname == "/media" ? navActive : ""}>Media</a>
              </Link>
              <ul className={dropdown}>
                {/* <Link href="/media/news"> */}
                <Link href="#">
                  <a>
                    <li>News</li>
                  </a>
                </Link>
                {/* <Link href="/media/press-release"> */}
                <Link href="#">
                  <a>
                    <li>Press Release</li>
                  </a>
                </Link>
                {/* <Link href="/media/rejoinders"> */}
                <Link href="#">
                  <a>
                    <li>Rejoinders</li>
                  </a>
                </Link>
                {/* <Link href="/media/photo-gallery"> */}
                <Link href="#">
                  <a>
                    <li>Photo Gallery</li>
                  </a>
                </Link>
                {/* <Link href="/media/videos"> */}
                <Link href="#">
                  <a>
                    <li>Video Library</li>
                  </a>
                </Link>
              </ul>
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
