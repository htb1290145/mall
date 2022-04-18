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
BScroll.use(Pullup);
BScroll.use(ObserveDOM);

export default {
  name: "BetterScroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      // default默认值为数组或对象时，使用函数。其他类型则是这种写法
      default: 0,
    },
    pullUpload: {
      type: Boolean,
      default: false,
      threshold: 0,
    },
  },
  mounted() {
    // querySelector取类的DOM元素不准确 通过ref读取
    // this.$nextTick(() => {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 3任何时候都派发 scroll 事件
      probeType: this.probeType,
      // 设置才可点击
      click: true,
      //DOM或Image改变时，触发refresh方法，重新计算better-scroll
      observeDOM: true,
      observeImage: true,
      //上拉加载
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    //上拉加载事件
    if (this.pullUpload) {
      this.scroll.on("scrollEnd", () => {
        // 滚动到底部
        if (this.scroll.y <= this.scroll.maxScrollY + 50) {
          this.$emit("scrollToEnd");
        }
      });
    }
    // });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      //scroll对象存在才执行后面的，防止报错
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>