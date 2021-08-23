import Vue from 'vue'
import './app.scss'
import 'taro-ui-vue/dist/style/index.scss';
import Taro from "@tarojs/taro";

const App = {
  onShow (options) {
    if(!localStorage.getItem("userInfo")){
      Taro.navigateTo({
        url: "pages/login/login",
      });
    }
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App;
