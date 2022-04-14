<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <better-scroll class="wrapper" ref="scroll" @scroll="contentScroll">
      <!-- 轮播图 -->
      <home-banner :banners="banners"></home-banner>
      <!-- 推荐模块 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 商品模块 -->
      <home-feature></home-feature>
      <!-- 标题 -->
      <tab-control
        class="home-tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </better-scroll>
    <!-- 自定义组件想监听事件，需加.native === 子组件内部发射this.$emit至父组件 -->
    <back-top
      id="back-top"
      v-show="isShowBackTop"
      @click.native="backClick"
    ></back-top>
  </div>
</template>

<script>
import HomeBanner from "@/views/home/childrenComps/HomeBanner.vue";
import HomeRecommend from "@/views/home/childrenComps/HomeRecommend.vue";
import HomeFeature from "@/views/home/childrenComps/HomeFeature.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/common/tabControl/TabControl.vue";
import BetterScroll from "@/components/common/betterScroll/BetterScroll.vue";

import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/content/backTop/BackTop.vue";

import { getHomeMulitdata, getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
    BetterScroll,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  //created写主要逻辑
  created() {
    //轮播图和推荐数据
    this.getHomeMulitdata();
    //首页商品数据  页面一开始就请求所有数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // activated() {
  //   this.$refs.scroll.scrollTo(0, this.saveY, 0);
  //   this.$refs.scroll.refresh();
  // },
  //methods写方法
  methods: {
    /*
     *  事件监听相关的方法
     */
    //tabControl切换数据
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    //内容区域滚动
    contentScroll(position) {
      this.isShowBackTop = position.y <= -2000;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    /*
     *  网络请求相关的方法
     */
    //轮播图和推荐数据
    getHomeMulitdata() {
      getHomeMulitdata()
        .then((res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //首页商品数据  页面一开始就请求所有数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          //不能直接赋值，要把数组加入  通过 数组解构
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // for (let n of res.data.list) {
          //   this.goods[type].list.push(n)
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 999;
}
.home-tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.wrapper {
  /* 设置滚动区域的高度（去除顶部和底部导航） */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  /* height: 574px; */
}
#back-top {
  position: absolute;
  bottom: 40px;
  right: 0;
}
</style>

