项目主要适配H5，小程序端未做适配
项目使用到taro中的 taro-vue、路由功能、request
项目中使用到taro-ui-vue中的 Button、Avatar、Article、Curtain、Model、Form、Input、Textarea、Grid、List等。
图标图片均为iconfonts上下载的。
登录用户存储使用localstorage
json文件和部分图片存放在github仓库中
目录结构：asset防置静态资源
pages为页面文件
pages中的blocks放置公共组件
app.scss中将常用的公共css提取了出来

项目启动：
安装：npm -install
启动：npm run dev:h5 // 开发环境
      npm run build:h5 //生产环境
生产环境具体配置请自行查阅
此项目仅为个人练习

附：taro链接：http://taro-docs.jd.com/taro/docs/README
taro-ui链接：https://taro-ui.jd.com/#/docs/introduction