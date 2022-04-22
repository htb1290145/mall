<template>
  <div class="category">
    <h2>分类</h2>
    <div id="xx" ref="wrapper">
      <div class="content">
        <ul>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveDOM);
BScroll.use(Pullup);
export default {
  name: "Category",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      // ObserveDOM:true,
      // pullUpLoad:true
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
  },
};
</script>

<style>
#xx{
  background-color: red;
  height: 350px;
  overflow: hidden;
}
</style>
