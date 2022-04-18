<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 刚开始隐藏，滚动到一定位置显示 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlB"
      class="tab-control"
      v-show="isFixed"
    ></tab-control>
    <better-scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pullUpload="true"
      @scroll="contentScroll"
      @scrollToEnd="loadMore"
    >
      <!-- 轮播图 -->
      <home-banner
        :banners="banners"
        @bannerImageLoad="bannerLoad"
      ></home-banner>
      <!-- 推荐模块 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 商品模块 -->
      <home-feature></home-feature>
      <!-- 标题 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControlA"
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
import { debounce } from "@/common/debounce.js";

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
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    //回到页面滚动回原来的位置
    this.$refs.scroll.scrollTo(0, this.saveY);
  },
  deactivated() {
    //保存离开时的页面位置
    this.saveY = this.$refs.scroll.scroll.y;
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
  mounted() {
    //监听item图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
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
      //点击后，让tabControl组件的currentIndex更新
      this.$refs.tabControlB.currentIndex = index;
      this.$refs.tabControlA.currentIndex = index;
    },
    //内容区域滚动 是否显示组件
    contentScroll(position) {
      //1.判断是否显示backTop
      this.isShowBackTop = position.y <= -1000;
      //2.tabControl是否吸顶
      //一开始属于文档流，固定后脱表，下面部分会向上跳动
      this.isFixed = position.y <= -this.tabOffsetTop;
    },
    bannerLoad() {
      //获取tabControl的OffsetTop
      //所有属性都有个属性$el，可以获取组件的元素
      this.tabOffsetTop = this.$refs.tabControlA.$el.offsetTop;
    },

    // 通过refs可以直接访问组件内部（数据、方法）、访问到scroll对象
    backClick() {
      // better-scroll组件的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //上拉加载数据
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
    },
    // tabControlFixed() {
    //   console.log(this.tabOffsetTop);
    //   if
    // },
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
      getHomeGoods(type, page).then((res) => {
        //不能直接赋值，要把数组加入  通过 数组解构
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // for (let n of res.data.list) {
        //   this.goods[type].list.push(n)
        // }

        //重新计算better-scroll
        //可滑动高度scrollHeight是根据子组件高度计算，网络请求过慢时图片还未加载就计算了高度，下面的区域无法滚动
        // 有ObserveDOM
        // this.$refs.scroll.refresh();
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
  /* 使用better-scroll滚动可以实现局部滚动 */
  /* 原生滚动才需要使用fixed */
  /* position: sticky;
  top: 0px; */
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* z-index: 999; */
}
/* 兼容性差 */
/* .home-tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.tab-control {
  position: relative;
  /* z-index只对定位元素有效 */
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
  /* position: relative;
  height: calc(100% - 93px);
  overflow: hidden; */
}
</style>

