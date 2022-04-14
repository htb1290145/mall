<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
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
  name: "BetterScroll",
  mounted() {
    // querySelector取类的DOM元素不准确 通过ref读取
    let wrapper = this.$refs.wrapper;
    let scroll = new BScroll(wrapper, {
      click: true,
      observeDOM: true,
      observeImage: true,
      pullUpLoad: true,
    });
    //监听滚动事件
    scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // scroll.on("pullingUp", () => {
    //   console.log("上拉加载更多");
    //   //请求数据完成 并将新的数据展示

    //   //数据展示完成后，调用finishPullUp()，才能进行下次pullingUp事件
    //   setTimeout(() => {
    //     scroll.finishPullUp();
    //   }, 2000);
    // });
  },
};
</script>

<style>
</style>