/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-01 09:41:13
 * @LastEditTime: 2020-06-10 09:41:49
 */ 

// ref: https://umijs.org/config/
import { resolve } from 'path';
import { routesConfig } from '../src/router/index';

export default {
  treeShaking: true, // 去除那些引用的但却没有使用的代码
  targets: {
    ie: 11,
  },
  routes: routesConfig,
  define: {
    // 开发环境下的地址配置
    'process.env.BUILD_TYPE': 'dev'
  },
  publicPath: './',
  hash: true, // 打包文件增加hash
  //html静态资源文件路径
  history: 'hash',
  outputPath: './dist',
  // 代理配置
  proxy: {
    "/api": {
      target: "",
      changeOrigin: true,
      pathRewrite: { "^/api" : "" }
    }
  },
  alias: {
    "@": resolve(__dirname, "../src/"),
    '@utils': resolve(__dirname, "../src/utils"),
    // 组件库
    '@components': resolve(__dirname, "../src/components"),
    // 全局models
    '@models': resolve(__dirname, "../src/models"),
    // request请求
    "@http": resolve(__dirname, '../src/utils/request.js')
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: '审核系统',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
