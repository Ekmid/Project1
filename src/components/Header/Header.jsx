import React from 'react';
import styles from './Header.module.css';
import Logo from "./img/logo.svg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
				<h1>БезделушкиИкс</h1>
        <navbar>
          <span>Выбери цифру:</span>
          <a href='https://www.youtube.com/watch?v=NE-ZaOADSv4&pp=ygUO0YbQuNGE0YDQvNCwIDE%3D'>Один</a>
          <a href='https://www.youtube.com/watch?v=zqVyfgAij3U&pp=ygUO0YbQuNGE0YDQvNCwIDI%3D'>Два</a>
          <a href='https://www.youtube.com/watch?v=i8NDeu8KU5w&pp=ygUO0YbQuNGE0YDQvNCwIDM%3D'>Три</a>
          <a href='https://www.youtube.com/watch?v=RLl1pTu3_J8&pp=ygUO0YbQuNGE0YDQvNCwIDQ%3D'>Четыре</a>
        </navbar>
        <button>Купить!</button>
      </header>
    </>
  )
};

export default Header;