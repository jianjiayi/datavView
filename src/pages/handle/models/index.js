/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-17 09:59:58
 * @LastEditTime: 2020-06-22 14:38:35
 */ 
import * as api from '../service/index.js';

export default {
  namespace: 'handle',
  
  state: {
    isLogin: false,
  },

  effects: {
    *login({ payload }, { call, put }){
      const { code, data } = yield call(api.login, {});
      if(code === 0){
        yield put({
          type: 'save',
          payload: {
            isLogin: true
          }
        })
      }
    }
  },

  reducers: {
    save(state, action){
      return {...state, ...action.payload}
    }
  }
}