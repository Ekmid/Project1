import React from 'react';
import styles from './Card.module.css';
import f1 from './img/1.png';
import f2 from './img/2.jpg';
import f3 from './img/3.png';
import f4 from './img/4.jpeg';
import f5 from './img/5.jpeg';
import f6 from './img/6.jpg';
import f7 from './img/7.jpg';
import f8 from './img/8.jpg';

const Card = () => {
    return (
      <>
        <div className={styles.card}>
            <a>
                <img src={f8}></img>
                <span>Price: 1135 $</span>
                <br></br>
                <button>Buy</button>
            </a>
        </div>
      </>
  )
}

export default Card;