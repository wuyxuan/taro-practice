<template>
  <view class="about">
    <topBar tips="关于" />
    <view class="content white-back-color font-default">
        <view class="content-title">
            关于此H5
        </view>
        <view class="content-main  padding-all margin-t">
            此H5使用的技术栈：vue、taro-vue、taro-ui-vue，静态json和图片放在github上，加载会比较慢。当然taro有更合适vue的ui官方库，nutui。
            目前此taro程序也只适配了H5页面。此项目仅作为个人练习，不足之处请谅解。
        </view>
    </view>
  </view>
</template>

<script>
// taro组件
// import {xxx} from "taro-ui-vue";

// 自定义组件
import topBar from "../../blocks/topBar/topBar.vue";

// 当前页面scss
import "./about.scss";

export default {
  name: "about",
  components: {
    // xxx,
    topBar
  },
  props: {
    
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>