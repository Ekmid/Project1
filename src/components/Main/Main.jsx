import React from 'react';
import styles from './Main.module.css';
import Rocket from './img/rocket_launch_icon_251995.svg';
import Square from './img/square_draw_icon_252083.svg';
import Pencil from './img/pencil_pen_icon_252081.svg';
import Roller from './img/roller_paint_icon_252077.svg';
import Layers from './img/layers_icon_252068.svg';
import f1 from './img/1.png';
import f2 from './img/2.jpg';
import f3 from './img/3.png';
import f4 from './img/4.jpeg';
import f5 from './img/5.jpeg';
import f6 from './img/6.jpg';
import f7 from './img/7.jpg';
import f8 from './img/8.jpg';

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

            <div className={styles.card}>
              <a>
                <img src={f1}></img>
                <span>Price: 100 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
            <div className={styles.card}>
              <a>
                <img src={f2}></img>
                <span>Price: 500 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
            <div className={styles.card}>
              <a>
                <img src={f3}></img>
                <span>Price: 600 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
            <div className={styles.card}>
            <a>
                <img src={f4}></img>
                <span>Price: 1000 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
            <div className={styles.card}>
            <a>
                <img src={f5}></img>
                <span>Price: 2340 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
            <div className={styles.card}>
            <a>
                <img src={f6}></img>
                <span>Price: 1324 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
            <div className={styles.card}>
            <a>
                <img src={f7}></img>
                <span>Price: 1034 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
            <div className={styles.card}>
            <a>
                <img src={f8}></img>
                <span>Price: 1135 $</span>
                <br></br>
                <button>Buy</button>
              </a>
            </div>
          </div>
        </main>
    </>
  )
}

export default Main