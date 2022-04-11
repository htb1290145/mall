<template>
  <div id="app">
    <p>App</p>
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
