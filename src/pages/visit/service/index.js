/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-17 09:57:19
 * @LastEditTime: 2020-06-17 10:06:56
 */ 
import request from '@http';

export async function login(params){
  return request(`/user/login`, {
    method: 'post',
    data: params
  })
}