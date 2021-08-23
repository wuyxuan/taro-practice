<template>
  <view class="index">
    <topBar tips="taroDemo" />
    <view class="content padding-all">
      <view class="font-default">常用菜单</view>
      <view class="nav-item white-back-color margin-b">
        <AtGrid :data="mainList" :onClick="(item) => changePage(item.href)" />
      </view>
      <view class="font-default">辅助菜单</view>
      <view class="nav-item white-back-color">
        <AtGrid :data="secondList" :onClick="(item) => goOutPage(item.href)" />
      </view>
    </view>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";
import { AtGrid } from "taro-ui-vue";

// 自定义组件
import topBar from "../blocks/topBar/topBar.vue";

// 引入图标
// css
import "./index.scss";
export default {
  components: {
    topBar,
    AtGrid,
  },
  data() {
    return {
      mainList: [],
      secondList: [],
    };
  },
  created() {
    let _this = this;
    Taro.request({
      url: "https://wuyxuan.github.io/test.github.io/json/index.json", //仅为示例，并非真实的接口地址
      success: function (res) {
        _this.mainList = res.data.mainList;
        _this.secondList = res.data.secondList;
        // console.log(res.data);
      },
    });
  },
  methods: {
    changePage(href) {
      Taro.navigateTo({
        url: href,
      });
    },
    goOutPage(href) {
      window.location.assign(href);
    },
  },
};
</script>
