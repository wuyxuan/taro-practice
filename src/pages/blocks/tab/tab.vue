<template>
  <view class="tab">
    <view class="tab-box d-flex">
      <view
        class="noSelect"
        :class="[{ selected: item.index == current }]"
        v-for="item in newTabList"
        :key="item.id"
        @tap="selectChange(item.index)"
      >
        {{ item.title }}
      </view>
    </view>
  </view>
</template>

<script>
// taro组件
// import {xxx} from "taro-ui-vue";

// 自定义组件

// 当前页面scss
import "./tab.scss";

export default {
  name: "tab",
  components: {},
  props: {
    tabList: Array,
  },
  data() {
    return {
      newTabList: [],
      current: 0,
    };
  },
  created() {
    let newTabList = this.$props.tabList;
    for (const index in newTabList) {
      newTabList[index].index = Number(index);
    }
    this.newTabList = newTabList;
  },
  methods: {
    selectChange(index) {
      this.current = index;
      this.$emit('getIndex',index);
    },
  },
};
</script>
