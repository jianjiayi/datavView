/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-17 10:59:41
 * @LastEditTime: 2020-06-17 14:19:14
 */ 
import React from 'react';
import ScalePage from '@components/ScalePage/index.js';
import Header from '@components/Header/index.js';
import NavBar from '@components/NavBar/index.js';

import styles from './index.less'

function ScaleLayout(props) {
 const ScaleProps = {
    width: 1440, 
    height: 810
  }

  return (
    <div className={`${styles['bg-container']}`}>
      <ScalePage {...ScaleProps}>
        <Header></Header>
        <NavBar></NavBar>
        { props.children }
      </ScalePage>
    </div>
  );
}

export default ScaleLayout
