<template>
  <view class="setting">
    <topBar tips="设置" />
    <view class="content">
      <view class="setting-box">
        <AtList>
          <AtListItem
            v-for="item in settingList"
            :key="item.id"
            :title="item.title"
            arrow="right"
            :onClick="() => goChildren(item.title, item.href)"
          />
        </AtList>
        <AtModal
          :isOpened = "isopendAm"
          confirmText="确认"
          :onClose="() => handleClose()"
          :onConfirm="() => handleConfirm()"
          content="邮箱：w1241419934@163.com"
        />
      </view>
      <view class="logout margin-t">
        <AtList>
          <AtListItem
            className="text-center"
            title="退出"
            :onClick="() => logout()"
          />
        </AtList>
        <AtToast
          :isOpened="isOpened"
          text="退出成功"
          :onClose="() => goChildren('/pages/index/index')"
        ></AtToast>
      </view>
    </view>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";
import { AtList, AtListItem, AtToast, AtModal } from "taro-ui-vue";

// 自定义组件
import topBar from "../../blocks/topBar/topBar.vue";

// 当前页面scss
import "./setting.scss";

export default {
  name: "setting",
  components: {
    AtList,
    AtListItem,
    AtToast,
    AtModal,
    topBar,
  },
  props: {},
  data() {
    return {
      isOpened: false,
      isopendAm: false,
      settingList: [
        { title: "账号", href: "/pages/mine/userCenter/userCenter" },
        { title: "关于", href: "/pages/mine/about/about" },
        { title: "建议与反馈", href: "/xxx" },
      ],
    };
  },
  created() {},
  methods: {
    goChildren(title, href) {
      if (title == "建议与反馈") {
        this.isopendAm = true;
      } else {
        Taro.navigateTo({
          url: href,
        });
      }
    },
    logout() {
      this.isOpened = true;
      localStorage.removeItem("userName");
    },
    handleClose(){
      this.isopendAm = false;
    },
    handleConfirm(){
      this.isopendAm = false;
    }
  },
};
</script>