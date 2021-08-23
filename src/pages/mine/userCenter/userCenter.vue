<template>
  <view class="userCenter">
    <topBar tips="账号" />
    <view class="conent padding-all white-back-color font-default">
      <view class="images d-flex border-b padding-b">
        <view class="text-title">头像：</view
        ><view
          ><AtAvatar
            :image="userInfo.userImg"
          ></AtAvatar
        ></view>
      </view>
      <view class="account d-flex padding-t">
        <view class="text-title">账号：</view><view>{{userInfo.account}}</view>
      </view>
      <view class="account"></view>
    </view>
  </view>
</template>

<script>
// taro组件
import { AtAvatar } from "taro-ui-vue";

// 自定义组件
import topBar from "../../blocks/topBar/topBar.vue";

// 当前页面scss
import "./userCenter.scss";

export default {
  name: "userCenter",
  components: {
    AtAvatar,
    topBar,
  },
  props: {},
  data() {
    return {
      userInfo: {
        userName: "",
        account: "",
        userImg: "",
      },
    };
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = userInfo;
  },
  methods: {},
};
</script>