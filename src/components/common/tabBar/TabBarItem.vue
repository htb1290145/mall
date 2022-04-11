<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon">没有显示</slot></div>
    <div v-else><slot name="item-icon-active">没有显示</slot></div>
    <!-- 动态绑定样式 -->
    <div :style="activeStyle">
      <slot name="item-text">没有显示</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String, //接收的路由
    activeColor: {
      type: String, //接收的颜色
      default: "red",
    },
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      set(v) {},
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {  };
    },
  },
  methods: {
    itemClick() {
      //this.$route.matched[0].path 跳转前的路由  如果跳转前路由和跳转后路由一样，就终止
      // if (this.path === this.$route.matched[0].path) return false;
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 5px;
  margin-bottom: 2px;
}
</style>
