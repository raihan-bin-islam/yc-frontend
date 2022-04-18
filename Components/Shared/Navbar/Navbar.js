import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../public/yunus_center.png'

const Navbar = () => {
    const { nav, navContainer } = styles
    return (
        <nav className={nav}>
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