<template>
  <view class="top-title">
    <view class="d-flex algin-center justify-space-between">
      <view class="arrow-left" v-if="show != 0" @tap="goBack()"></view>
      <view class="top-tips">
        {{ tips }}
      </view>
      <view class="top-icon" @tap="goPage()">
        <img
          class="icon-img"
          src="../../../asset/mine.png"
          alt=""
          v-if="show == 0"
        />
        <img class="icon-img" src="../../../asset/index.png" alt="" v-else />
      </view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";

import "./topBar.scss";

export default {
  name: "topBar",
  components: {
  },
  props: {
    tips: String,
  },
  data() {
    return {
      show: 0,
    };
  },
  created() {
    let href = window.location.href;
    let hrefList = href.split("/");
    for (const i in hrefList) {
      // console.log(hrefList[i])
      if (hrefList[i] == "index") {
      this.show = 0;
      break;
    } else {
      this.show = 1;
    }
    }
  },
  methods: {
    goBack() {
      Taro.navigateBack();
    },
    goPage() {
      if (this.show == 0) {
        Taro.redirectTo({
          url: "/pages/mine/mine",
        });
      } else {
        Taro.redirectTo({
          url: "/pages/index/index",
        });
      }
    },
  },
};
</script>
