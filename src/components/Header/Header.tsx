import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Header;
