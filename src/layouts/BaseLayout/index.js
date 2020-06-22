/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-17 11:29:00
 * @LastEditTime: 2020-06-17 13:45:47
 */ 
import React from 'react';

import styles from './index.less';

function BaseLayout(props) {
  return (
    <div className={styles.content}>
      { props.children }
    </div>
  )
}

export default BaseLayout
