import React from 'react';
import styles from './Footer.module.css';
import tg from './img/telegram-svgrepo-com.svg';
import vk from './img/iconfinder-social-media-applications-32vk-4102593_113806.svg';
import yt from './img/youtube-color-svgrepo-com.svg';

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
          <div className={styles.title}>
            <span>Write to us</span>
          </div>
          <div className={styles.social}>
            <span>We are in social</span>
          </div>
          <div className={styles.contacts}>
            <div className={styles.c1}>
            <a href='#'><img src={tg}></img></a>
            </div>
            <div className={styles.c2}>
            <a href='#'><img src={yt}></img></a>
            </div>
            <div className={styles.c3}>
              <a href='#'><img src={vk}></img></a>
            </div>
          </div> 
          <span className={styles.last}>2023 (с) — All righs preserved</span>
        </footer>
    </>
  )
}

export default Footer