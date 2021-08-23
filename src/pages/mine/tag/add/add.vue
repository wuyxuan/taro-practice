<template>
  <view class="add">
    <topBar tips="添加备注" />
    <view class="content">
      <view class="tips white-back-color">请输入你的备注</view>
      <AtForm>
        <AtInput
          name="title"
          title="标题"
          type="text"
          placeholder="请输入"
          :value="value1"
          :onChange="(value) => handle1(value)"
        />
        <AtTextarea
          name="content"
          :value="value2"
          :onChange="(value) => handle2(value)"
          :maxLength="200"
          placeholder="请输入内容..."
        />
      </AtForm>
      <AtButton class="submit" type="primary" :onClick="() => addnote()"
        >提交</AtButton
      >
      <AtModal
        :isOpened="isopendAm"
        confirmText="确认"
        :onClose="() => handleClose()"
        :onConfirm="() => handleConfirm()"
        :content="content"
      />
    </view>
  </view>
</template>

<script>
// taro组件
import Taro from "@tarojs/taro";
import { AtForm, AtInput, AtTextarea, AtModal, AtButton } from "taro-ui-vue";

// 自定义组件
import topBar from "../../../blocks/topBar/topBar.vue";

// 当前页面scss
import "./add.scss";

export default {
  name: "add",
  components: {
    AtForm,
    AtInput,
    AtTextarea,
    AtModal,
    AtButton,
    topBar,
  },
  props: {},
  data() {
    return {
      value1: "",
      value2: "",
      isopendAm: false,
      content: "",
    };
  },
  created() {},
  methods: {
    handle1(value) {
      this.value1 = value;
      // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
      return value;
    },
    handle2(value) {
      this.value2 = value;
      // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
      return value;
    },
    addnote() {
      let uid = Number(Taro.getCurrentInstance().router.params.lastUid);
      uid += 1;
      if (this.value1 != "" && this.value2 != "") {
        this.isopendAm = true;
        let time = this.getNowDate();
        const data = {
          title: this.value1,
          content: this.value2,
          time: time,
          uid: uid,
        };
        this.content = JSON.stringify(data);
        this.isopendAm = true;
      } else {
        this.content = "请输入完整";
        this.isopendAm = true;
      }
    },
    handleClose() {
      this.isopendAm = false;
    },
    handleConfirm() {
      this.isopendAm = false;
    },
    getNowDate() {
      var d = new Date();
      var vYear = d.getFullYear();
      var vMon = d.getMonth() + 1;
      var vDay = d.getDate();
      var h = d.getHours();
      var m = d.getMinutes();
      var se = d.getSeconds();
      var s =
        vYear +
        "-" +
        (vMon < 10 ? "0" + vMon : vMon) +
        "-" +
        (vDay < 10 ? "0" + vDay : vDay) +
        " " +
        (h < 10 ? "0" + h : h) +
        ":" +
        (m < 10 ? "0" + m : m) +
        ":" +
        (se < 10 ? "0" + se : se);
      return s;
    },
  },
};
</script>