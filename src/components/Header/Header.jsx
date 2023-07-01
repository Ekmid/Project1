import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <navbar>
          <a href='#'>Main</a>
          <a href='#'>Creators</a>
          <a href='#'>About us</a>
          <a href='#'>Get contact</a>
        </navbar>
        <button>Let's go to buy!</button>
      </header>
    </>
  )
};

export default Header;