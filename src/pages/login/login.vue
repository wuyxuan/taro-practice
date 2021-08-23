<template>
  <view class="login">
    <view class="welcome white-back-color">
      <img class="wel-img" src="../../asset/login.png" alt="" />
    </view>
    <view class="login-from margin-t">
      <AtForm className="padding-r">
        <AtInput
          name="account"
          title="账号"
          type="text"
          placeholder="请输入账号"
          :value="accountValue"
          :onChange="(value) => handle1(value)"
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          :value="passValue"
          :onChange="(value) => handle2(value)"
        />
      </AtForm>
      <view class="margin-t padding-lr">
        <AtButton type="primary" :onClick="() => login()">登录</AtButton>
      </view>
    </view>
    <AtToast
      :isOpened="isOpened1"
      text="登录成功"
      status="success"
      :onClose="() => goIndex('/pages/index/index')"
    ></AtToast>
    <AtToast :isOpened="isOpened2" status="error" text="登录失败"></AtToast>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";
import { AtForm, AtInput, AtButton, AtToast } from "taro-ui-vue";

// 自定义组件
// import xx from "xxx";

// 当前页面scss
import "./login.scss";

export default {
  name: "login",
  components: {
    AtForm,
    AtInput,
    AtButton,
    AtToast,
  },
  props: {},
  data() {
    return {
      isOpened1: false,
      isOpened2: false,
      accountValue: "",
      passValue: "",
    };
  },
  created() {
    window.addEventListener('keydown', this.handleKeyDown, true)
  },
  methods: {
    handle1(value) {
      this.accountValue = value;
      // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
      return value;
    },
    handle2(value) {
      this.passValue = value;
      // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
      return value;
    },
    login() {
      //   console.log(this.accountValue);
      //   console.log(this.passValue);
      if (this.accountValue == "admin" && this.passValue == "admin123") {
        let userInfo = {userName:this.accountValue,account:"12341234",userImg:"https://wuyxuan.github.io/test.github.io/img/taro-vue/img/pomegranate.png"};
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        this.isOpened1 = true;
      } else {
        this.isOpened2 = true;
      }
    },
    goIndex(href) {
      Taro.redirectTo({
        url: href,
      });
    },
    handleKeyDown (e) {
      let key = null
      if (window.event === undefined) {
        key = e.keyCode
      } else {
        key = window.event.keyCode
      }
      if (key === 13) {
        this.login()
      }
    },
  },
};
</script>