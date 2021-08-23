<template>
  <view class="tag">
    <topBar tips="备注" />
    <view class="content padding-tb">
      <view class="note-box font-default">
        <view
          class="note-item white-back-color padding-all"
          v-for="item in noteList"
          :key="item.id"
          @tap="learnMore(item.uid)"
        >
          <view class="note-item-title">标题：{{ item.title }}</view>
          <view class="note-item-content">内容：{{ item.content }}</view>
          <view class="note-item-time">时间：{{ item.time }}</view>
        </view>
      </view>
      <view class="add-note margin-all" @tap="addNote()">添加备注</view>
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
import "./tag.scss";

export default {
  name: "tag",
  components: {
    // xxx,
    topBar,
  },
  props: {},
  data() {
    return {
      noteList: [],
      lastUid:0,
    };
  },
  created() {
    let _this = this;
    Taro.request({
      url: "https://wuyxuan.github.io/test.github.io/json/tag.json", //仅为示例，并非真实的接口地址
      success: function (res) {
        _this.noteList = res.data.noteList;
        _this.lastUid = _this.noteList[_this.noteList.length -1].uid;
        // console.log(_this.lastUid)
      },
    });
  },
  methods: {
    addNote() {
      Taro.navigateTo({
        url: "pages/mine/tag/add/add"+"?lastUid="+this.lastUid,
      });
    },
    learnMore(uid){
      Taro.navigateTo({
        url: "pages/mine/tag/more/more"+"?uid="+uid,
      });
    }
  },
};
</script>