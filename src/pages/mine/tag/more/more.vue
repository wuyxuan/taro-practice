<template>
  <view class="more">
    <topBar tips="备注详情" />
    <view class="content  padding-lr white-back-color">
      <view clas="at-article">
        <view class="at-article__h1"> {{ details.title }} </view>
        <view class="at-article__content">
          <view class="at-article__section">
            <view class="at-article__h3">{{ details.time }}</view>
            <view class="at-article__p">
              {{ details.content }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";

// 自定义组件
import topBar from "../../../blocks/topBar/topBar.vue";

// 当前页面scss
import "./more.scss";

export default {
  name: "more",
  components: {
    // xxx,
    topBar,
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
      url: "https://wuyxuan.github.io/test.github.io/json/tag.json", //仅为示例，并非真实的接口地址
      success: function (res) {
        const listArr = res.data.noteList;
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