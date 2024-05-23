import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const CustomApp = () => {
  return (
    <>
        <Navbar/>
    </>
  )
}

export default CustomApp

const Navbar:React.FC  =() => {
return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <a className={styles.navLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};