/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-01 15:45:04
 * @LastEditTime: 2020-06-10 09:42:12
 */ 
const errorRoutes = require('../pages/Error/router');
const userRoutes = require('../pages/User/router');
const homeRoutes = require('../pages/home/router')

exports.routesConfig= [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      ...homeRoutes,
      ...userRoutes,
      ...errorRoutes,
    ],
  },
]