<template>
  <div id="app">
    <!-- 切换页面后，原页面会销毁。keep-alive保持原页面状态 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import mainTabBar from "@/components/content/mainTabBar/mainTabBar.vue";
export default {
  name: "App",
  components: { mainTabBar },
};
</script>

<style>
@import "assets/css/base.css";
</style>