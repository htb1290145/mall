<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
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
    ></tab-control>
  </div>
</template>

<script>
import HomeBanner from "@/views/home/childrenComps/HomeBanner.vue";
import HomeRecommend from "@/views/home/childrenComps/HomeRecommend.vue";
import HomeFeature from "@/views/home/childrenComps/HomeFeature.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/common/tabControl/TabControl.vue";

import { getHomeMulitdata, getHomeGoods } from "@/network/home.js";
export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: [],
    };
  },
  created() {
    getHomeMulitdata()
      .then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      .catch((err) => {
        console.log(err);
      }),
      getHomeGoods()
        .then((res) => {
          this.goods = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
</script>

<style>
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
</style>

