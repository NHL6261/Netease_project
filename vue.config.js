// 适配
// npm install postcss-px2rem  lib-flexible --save  在入口文件里引入
// 配置postcs-px2rem
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 75 //750px 
})

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    port: 8787, //运行端口号
    open: true, // 自动打开浏览器
    quiet: true, // 限制日志输出
    "proxy": {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      },
    }
  }
  }
  