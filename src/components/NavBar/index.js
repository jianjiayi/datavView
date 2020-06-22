/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-17 14:03:57
 * @LastEditTime: 2020-06-17 15:30:12
 */ 
import React from 'react';
import styles from './index.less';

function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li className={`${styles.item}`}>
        <span className={styles.text}>数据采集</span>
      </li>
      <li className={`${styles.item}  ${styles.active}`}>
        <span className={styles.text}>数据采集</span>
      </li>
      <li className={`${styles.item}`}>
        <span className={styles.text}>数据采集</span>
      </li>
      <li className={`${styles.item}`}>
        <span className={styles.text}>数据采集</span>
      </li>
      <li className={`${styles.item}`}>
        <span className={styles.text}>数据采集</span>
      </li>
    </ul>
  )
}

export default NavBar
