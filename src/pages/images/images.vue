<template>
  <view class="images">
    <topBar tips="图片" />
    <view class="content padding-all">
      <view class="d-flex img-list-box">
        <view
          class="img-box white-back-color"
          v-for="item in imgList"
          :key="item.id"
        >
          <img
            :src="item.imgSrc"
            :alt="item.alt"
            @click="enlargeImg(item.imgSrc)"
          />
          <!-- <img :src=item.imgSrc :alt=item.alt :onClick="()=> this.enlargeImg(item.imgSrc)" /> -->
          <span>{{ item.alt }}</span>
        </view>
      </view>
    </view>
    <AtCurtain
      :isOpened="isOpened"
      :onClose="() => close()"
      closeBtnPosition="top-right"
    >
      <img style="width: 100%" :src="atSrc" />
    </AtCurtain>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";
import { AtList, AtListItem, AtCurtain, AtButton } from "taro-ui-vue";

// 自定义组件
import topBar from "../blocks/topBar/topBar.vue";

// 当前页面scss
import "./images.scss";

export default {
  name: "images",
  components: {
    AtList,
    AtListItem,
    AtCurtain,
    AtButton,
    topBar,
  },
  props: {},
  data() {
    return {
      isOpened: false,
      isClose: false,
      atSrc: "",
      imgList: [],
    };
  },
  created() {
    let _this = this;
    Taro.request({
      url: "https://wuyxuan.github.io/test.github.io/json/images.json", //仅为示例，并非真实的接口地址
      success: function (res) {
        _this.imgList = res.data.imgList;
        // console.log(res.data);
      },
    });
  },
  methods: {
    enlargeImg(src) {
      this.atSrc = src;
      this.isOpened = true;
    },
    close() {
      this.isOpened = false;
    },
  },
};
</script>