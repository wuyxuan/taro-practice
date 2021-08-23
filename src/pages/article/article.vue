<template>
  <view class="article">
    <topBar tips="文章" />
    <view class="content padding-tb">
      <view class="padding-lr"
        ><tab :tabList="tabList" @getIndex="receiveSon"
      /></view>
      <view v-if="index === 0" class="article-content padding-t">
        <view
          class="
            article-content-item
            d-flex
            white-back-color
            padding-all
            font-default
            margin-b
          "
          v-for="item in articleList"
          :key="item.id"
          @tap="articleDetails(item.uid)"
        >
          <img class="item-img" :src="item.imgSrc" alt="" />
          <view class="item-content padding-l">
            <view class="item-title">{{ item.title }}</view>
            <view class="item-content">{{ item.content }}</view>
            <view class="item-time">{{ item.time }}</view>
          </view>
        </view>
      </view>
      <view v-if="index === 1" class="article-content padding-t">
        <view
          class="
            article-content-item
            d-flex
            white-back-color
            padding-all
            font-default
            margin-b
          "
          v-for="item in mineList"
          :key="item.id"
          @tap="articleDetails(item.uid)"
        >
          <img class="item-img" :src="item.imgSrc" alt="" />
          <view class="item-content padding-l">
            <view class="item-title">{{ item.title }}</view>
            <view class="item-content">{{ item.content }}</view>
            <view class="item-time">{{ item.time }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";
// import {  } from "taro-ui-vue";

// 自定义组件
import topBar from "../blocks/topBar/topBar.vue";
import tab from "../blocks/tab/tab.vue";

// 当前页面scss
import "./article.scss";

export default {
  name: "article",
  components: {
    topBar,
    tab,
  },
  props: {},
  data() {
    return {
      index: 0,
      tabList: [
        { id: 0, title: "推荐" },
        { id: 1, title: "我的" },
      ],
      articleList: [],
      mineList: [],
    };
  },
  created() {
    let _this = this;
    Taro.request({
      url: "https://wuyxuan.github.io/test.github.io/json/article.json", //仅为示例，并非真实的接口地址
      success: function (res) {
        const list = res.data.articleList;
        // console.log(list);
        for (const i in list) {
          if (list[i].collected == 0) {
            _this.articleList.push(list[i]);
          } else {
            _this.mineList.push(list[i]);
          }
        }
        // console.log(res.data);
      },
    });
  },
  methods: {
    receiveSon(index) {
      this.index = index;
    },
    articleDetails(uid) {
      Taro.navigateTo({
        url: "pages/article/details/details"+"?uid="+uid,
      });
    },
  },
};
</script>