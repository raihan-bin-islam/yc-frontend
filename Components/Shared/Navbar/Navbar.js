import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../public/yunus_center.png'


const Navbar = () => {
    const { nav, navContainer, navScroll } = styles
    const [scrolled, setScrolled] = useState(false)

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
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/'>About</Link></li>
                        <li><Link href='/'>Social Business</Link></li>
                        <li><Link href='/'>Visit Programs</Link></li>
                        <li><Link href='/'>Publications</Link></li>
                        <li><Link href='/'>Media</Link></li>
                        <li><Link href='/'>YSBC</Link></li>
                        <li><Link href='/'>Prof. Yunus</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;