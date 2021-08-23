<template>
  <view class="mine">
    <topBar tips="我的" />
    <view class="content padding-tb">
      <view class="avatar padding-all margin-b white-back-color d-flex">
        <view
          ><AtAvatar
            :image="userInfo.userImg"
          ></AtAvatar
        ></view>
        <view class="nick-name padding-lr flex-grow font-default">
          <view>{{ userInfo.userName }}</view>
          <view>账号：{{ userInfo.account }}</view>
        </view>
        <view class="wei-code">
          <img
            class="wei-code-img"
            src="https://wuyxuan.github.io/test.github.io/img/taro-vue/ercode.png"
            alt=""
          />
        </view>
      </view>
      <AtList>
        <AtListItem
          v-for="item in aList"
          :key="item.id"
          :title="item.title"
          arrow="right"
          :iconInfo="item.iconInfo"
          :onClick="() => goChildren(item.href)"
        />
      </AtList>
    </view>
    <view class="copyright">&copy;2021 taro-vue&taro-ui-vue</view>
  </view>
</template>

<script>
// taro组件
import { AtAvatar, AtList, AtListItem } from "taro-ui-vue";
import Taro from "@tarojs/taro";

// 自定义组件
import topBar from "../blocks/topBar/topBar.vue";

// css
import "./mine.scss";
export default {
  components: {
    topBar,
    AtAvatar,
    AtList,
    AtListItem,
  },
  data() {
    return {
      userInfo: {
        userName: "",
        account: "",
        userImg:""
      },
      aList: [
        {
          title: "收藏",
          iconInfo: { size: 25, color: "#FFC07D", value: "star" },
          href: "pages/mine/collection/collection",
        },
        {
          title: "备注",
          iconInfo: { size: 25, color: "#FF6C84", value: "tag" },
          href: "pages/mine/tag/tag",
        },
        {
          title: "设置",
          iconInfo: { size: 25, color: "#9FC6F8", value: "settings" },
          href: "pages/mine/setting/setting",
        },
      ],
    };
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = userInfo;
    // console.log(userInfo)
  },
  methods: {
    goChildren(href) {
      Taro.navigateTo({
        url: href,
      });
    },
  },
};
</script>
