/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-01 15:45:04
 * @LastEditTime: 2020-06-17 10:23:54
 */ 
const errorRoutes = require('../pages/Error/router');

const collectionRoutes = require('../pages/collection/router');
const handleRoutes = require('../pages/handle/router');
const reviewRoutes = require('../pages/review/router');
const visitRoutes = require('../pages/visit/router');

exports.routesConfig= [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      ...collectionRoutes,
      ...handleRoutes,
      ...reviewRoutes,
      ...visitRoutes,
      ...errorRoutes,
    ],
  },
]