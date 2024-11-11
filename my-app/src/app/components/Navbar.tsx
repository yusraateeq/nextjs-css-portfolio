"use client";
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import Image from 'next/image';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(prev => !prev);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <li className="logo"><a href="#hero">Yusra Ateeq</a></li>
      <ul className={`nav-links ${mobileMenu ? '' : 'hide-on-mobile'}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <Image
        src={menu_icon}
        alt="Menu icon"
        className="menu-icon"
        onClick={toggleMenu}
        role="button"
      />
    </nav>
  );
};

export default Navbar;
