/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-01 15:51:25
 * @LastEditTime: 2020-06-10 10:32:43
 */ 
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

function Login({dispatch}) {
  console.log(dispatch)

  const loginsubmit = () => {
    dispatch({
      type: 'user/login',
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

function mapStateToProps({user}){
  return {user}
}

export default connect(mapStateToProps)(Login)
