/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-17 09:57:27
 * @LastEditTime: 2020-06-17 10:29:03
 */ 
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import styles from './index.less';

function Login({dispatch}) {
  console.log(dispatch)

  const loginsubmit = () => {
    dispatch({
      type: 'distribute/login',
      payload: {}
    })
  }

  return (
    <div>
      <Button onClick={()=>loginsubmit()}>hahaha </Button>
      login
    </div>
  )
}

function mapStateToProps({distribute}){
  return {distribute}
}

export default connect(mapStateToProps)(Login)