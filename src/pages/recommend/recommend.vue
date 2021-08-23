<template>
  <view class="recommend">
    <topBar tips="推荐" />
    <view class="content padding-all">
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

// 当前页面scss
import "./recommend.scss";

export default {
  name: "code",
  components: {
    AtGrid,
    topBar,
  },
  props: {},
  data() {
    return {
      secondList: [
        
      ],
    };
  },
  created() {
    let _this = this;
    Taro.request({
      url: "https://wuyxuan.github.io/test.github.io/json/recommend.json", //仅为示例，并非真实的接口地址
      success: function (res) {
        _this.secondList = res.data.secondList;
        // console.log(res.data);
      },
    });
  },
  methods: {
    goOutPage(href) {
      window.location.assign(href);
    },
  },
};
</script>