<template>
  <view class="collection">
    <topBar tips="收藏" />
    <view class="content">
      <view class="article-content padding-t">
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
// import {xxx} from "taro-ui-vue";

// 自定义组件
import topBar from "../../blocks/topBar/topBar.vue";

// 当前页面scss
import "./collection.scss";

export default {
  name: "collection",
  components: {
    topBar
  },
  props: {
    
  },
  data() {
    return {
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
          if (list[i].collected == 1) {
            _this.mineList.push(list[i]);
          }
        }
        // console.log(res.data);
      },
    });
  },
  methods: {
    articleDetails(uid) {
      Taro.navigateTo({
        url: "pages/article/details/details"+"?uid="+uid,
      });
    },
  },
};
</script>
