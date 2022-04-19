import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../public/yunus_center.png'
import magnifyIcon from '../../../public/icon_magnify.svg'
import burgerIcon from '../../../public/icon_burger.svg'
import crossIcon from '../../../public/icon_cross.svg'
import { useRouter } from 'next/router';

const Navbar = () => {
    const { nav, navContainer, navScroll, navActive, dropdown, mainList, burger, cross } = styles
    const [scrolled, setScrolled] = useState(false)
    const router = useRouter();

    const handleScroll = () => {

        const offset = window.scrollY;

        if (offset > 80) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(()=> {
        if(window.innerWidth > 800){
            window.addEventListener('scroll', handleScroll)
        }
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={scrolled ? navScroll : nav}>
            <div className={`container ${navContainer}`}>
                <div>
                    <img src={logo.src} alt='brand-yc'/>
                </div>
                <div>
                    <ul className={mainList}>
                        <li>
                            <Link href='/'>
                                <a className={router.pathname == "/" ? navActive : ""}>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>About
                            <ul className={dropdown}>
                                <li>About Us</li>
                                <li>About Us</li>
                                <li>About Us</li>
                                <li>About Us</li>
                            </ul>
                        </li>
                        <li><Link href='/'>Social Business</Link></li>
                        <li><Link href='/'>Visit Programs</Link></li>
                        <li><Link href='/'>Publications</Link></li>
                        <li><Link href='/'>Media</Link></li>
                        <li><Link href='/'>YSBC</Link></li>
                        <li><Link href='/'>Prof. Yunus</Link></li>
                        <li><img src={magnifyIcon.src} alt='brand-yc'/></li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={burgerIcon.src} alt='brand-yc' className={burger}/>
                <img src={crossIcon.src} alt='brand-yc' className={cross}/>
            </div>
        </nav>
    );
};

export default Navbar;