import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* LOGO */}
        <h1 className={styles.logo}>
          <a href="./" >mDev</a>
        </h1>

        {/* MENU */}
        <div className={styles.navMenu}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href='/'>Home</Link>
            </li>

            <li className={styles.navItem}>
              <Link href='/about'>About</Link>
            </li>

            <li className={styles.navItem}>
              <Link href='/portfolio'>Portfolio</Link>
            </li>

            <li className={styles.navItem}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>

          {/*  BUTTONS */}
          <div className={styles.navBtn}>
            {/* Button for Theme Light/Dark */}
            {/* Button for Toggle Menu */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
