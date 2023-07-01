import React from 'react';
import styles from './Main.module.css';
import Rocket from './img/rocket_launch_icon_251995.svg';
import Square from './img/square_draw_icon_252083.svg';
import Pencil from './img/pencil_pen_icon_252081.svg';
import Roller from './img/roller_paint_icon_252077.svg';
import Layers from './img/layers_icon_252068.svg';
import Card from '../Cards/Card';

const Main = () => {
  return (
    <>
        <main className={styles.main}>
        
        <div className={styles.title}>
            <span>We can give you</span>
          </div>
          <div className={styles.products}>
          
            <div className={styles.pr1}>
              <a href='#'>
              <img src={Rocket}></img>
              <span>Speed</span>
              </a>
            </div>
            <div className={styles.pr2}>
              <a href='#'>
              <img src={Layers}></img>
              <span>Complexity</span>
              </a>
            </div>
            <div className={styles.pr3}>
              <a href='#'>
              <img src={Pencil}></img>
              <span>Beauty</span>
              </a>
            </div>
            <div className={styles.pr4}>
              <a href='#'>
              <img src={Square}></img>
              <span>Structurality</span>
              </a>
            </div>
          </div>
          

          <div className={styles.cardsTitle}>
            Choose the position!
          </div>
          <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </main>
    </>
  )
}

export default Main