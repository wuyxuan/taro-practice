<template>
  <view class="details">
    <topBar tips="文章详情" />
    <view class="content padding-all white-back-color">
      <view class="at-article">
        <view class="at-article__h1">{{details.title}}</view>
        <view class="at-article__info">
          来自{{details.auth}}
        </view>
        <view class="at-article__content">
          <view class="at-article__section">
            <view class="at-article__p">
              {{details.content}}
            </view>
            <img :src="details.imgSrc" alt="" class="at-article__img">
          </view>
        </view>
      </view>      
    </view>
    <collected :uid="details.uid" :collected="details.collected"/>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";
// 自定义组件
import topBar from "../../blocks/topBar/topBar.vue";
import collected from "../../blocks/collected/collected.vue";

// 当前页面scss
import "./details.scss";

export default {
  name: "details",
  components: {
    // xxx,
    topBar,
    collected
  },
  props: {},
  data() {
    return {
      details: {},
    };
  },
  created() {
    let uid = Taro.getCurrentInstance().router.params.uid;
    let _this = this;
    Taro.request({
      url: "https://wuyxuan.github.io/test.github.io/json/article.json", //仅为示例，并非真实的接口地址
      success: function (res) {
        const listArr = res.data.articleList;
        for (const i in listArr) {
          if (listArr[i].uid == uid) {
            _this.details = listArr[i];
            break;
          }
        }
        // console.log(_this.details);
      },
    });
  },
  methods: {},
};
</script>