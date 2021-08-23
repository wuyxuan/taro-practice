<template>
  <view class="collected">
    <view
      class="d-flex font-default tools"
      @tap="collection()"
      v-if="collected == 0"
    >
      <img class="img" src="../../../asset/collection-1.png" alt="" />
      <view class="text">收藏</view>
    </view>
    <view
      class="d-flex font-default tools"
      @tap="collection()"
      v-else-if="collected == 1"
    >
      <img class="img" src="../../../asset/collection-1.png" alt="" />
      <view class="text">取消收藏</view>
    </view>
    <AtModal
      :isOpened="isopendAm"
      confirmText="确认"
      :onClose="() => handleClose()"
      :onConfirm="() => handleConfirm()"
      :content="content"
    />
  </view>
</template>

<script>
// taro组件
import { AtModal } from "taro-ui-vue";

// 自定义组件
// import xxxxx from "xxxxx";

// 当前页面scss
import "./collected.scss";

export default {
  name: "collected",
  components: {
    // xxx,
    AtModal,
  },
  props: {
    uid: Number,
    collected: Number,
  },
  data() {
    return {
      isopendAm: false,
      content: "",
    };
  },
  created() {
    if (this.$props.collected === 0) {
      this.content = "收藏uid为" + this.$props.uid + "的文章";
    } else {
      this.content = "取消收藏uid为" + this.$props.uid + "的文章";
    }
  },
  methods: {
    collection() {
      this.isopendAm = true;
    },
    handleClose() {
      this.isopendAm = false;
    },
    handleConfirm() {
      this.isopendAm = false;
    },
  },
};
</script>