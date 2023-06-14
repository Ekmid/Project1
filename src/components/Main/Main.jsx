import React from 'react';
import styles from './Main.module.css';
import Rocket from './img/rocket_launch_icon_251995.svg';
import Square from './img/square_draw_icon_252083.svg';
import Pencil from './img/pencil_pen_icon_252081.svg';
import Roller from './img/roller_paint_icon_252077.svg';
import Layers from './img/layers_icon_252068.svg';

const Main = () => {
  return (
    <>
        <main className={styles.main}>
          <div className={styles.title}>
            <span>Мы предлагаем</span>
          </div>
          <div className={styles.products}>
            <div className={styles.pr1}>
              <img src={Rocket}></img>
              <span>Ракету</span>
            </div>
            <div className={styles.pr2}>
              <img src={Layers}></img>
              <span>Слои</span>
            </div>
            <div className={styles.pr3}>
              <img src={Pencil}></img>
              <span>Карандаш</span>
            </div>
            <div className={styles.pr4}>
              <img src={Square}></img>
              <span>Квадрат</span>
            </div>
            <div className={styles.pr5}>
              <img src={Roller}></img>
              <span>Валик</span>
            </div>
          </div>
        </main>
    </>
  )
}

export default Main