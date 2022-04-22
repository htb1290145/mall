<template>
  <div class="detail">
    <!-- 导航 -->
    <detail-nav-bar
      id="detail-nav-bar"
      @item-click="itemClick"
      ref="detailNavBar"
    ></detail-nav-bar>
    <better-scroll
      id="detail-better-scroll"
      @scroll="scroll"
      ref="detailScroll"
      :probeType="3"
    >
      <!-- v-bind不支持驼峰写法，因为html会把属性名都变成小写 -->
      <detail-swiper :top-images="topImages" id="Swiper"></detail-swiper>
      <div class="info">
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info
          :detail-info="detailInfo"
          @imageLoad="imageLoad"
          id="Goods-Info"
        ></detail-goods-info>
        <detail-param-info
          :param-info="detailParamInfo"
          ref="paramInfo"
          id="Detail-Param-Info"
        ></detail-param-info>
      </div>
    </better-scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top v-show="isBackTopShow" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import BetterScroll from '@/components/common/betterScroll/BetterScroll.vue'

import DetailNavBar from '@/views/detail/childComps/DetailNavBar.vue'
import DetailSwiper from '@/views/detail/childComps/DetailSwiper.vue'
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo.vue'
import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo.vue'
import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo.vue'
import DetailParamInfo from '@/views/detail/childComps/DetailParamInfo.vue'
import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar'

import { getDetailData, Goods, Shop, GoodsParam } from '@/network/detail.js'
import { backTopMixin } from '@/common/mixin.js'
import { debounce } from '@/common/debounce.js'

export default {
  name: 'Detail',
  components: {
    BetterScroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailParamInfo: {},
      //顶部导航栏的滚动距离
      themeTopYs: [],
      //防抖函数
      getThemeTopYs: null,
    }
  },
  //create获取数据
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid
    //2.根据iid请求数据
    this.getDetailData(this.iid)
    //3.添加防抖函数
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop)
    })
  },
  methods: {
    //监听滚动位置
    scroll(position) {
      //BackTop是否显示
      this.isBackTopShow = position.y <= -1000
      //滚动到对应区域，显示对应的navbar
      if (position.y > -this.$refs.paramInfo.$el.offsetTop) {
        this.$refs.detailNavBar.currentIndex = 0
      } else if (position.y <= -this.$refs.paramInfo.$el.offsetTop) {
        this.$refs.detailNavBar.currentIndex = 1
      }
    },
    //顶部导航点击，滚动到响应位置
    itemClick(index) {
      //1.scrollToElement更方便
      switch (index) {
        case 0:
          this.$refs.detailScroll.scrollToElement('#Swiper')
          break
        case 1:
          this.$refs.detailScroll.scrollToElement('#Detail-Param-Info')
          break
      }
      //2.数组保存各个组件的offsetTop,根据索引号确定滚动的位置
      // this.$refs.detailScroll.scrollTo(0, -this.themeTopYs[index]);
    },
    //图片加载完成
    imageLoad() {
      //2.数组保存各个组件的offsetTop,根据索引号确定滚动的位置。确保图片全部加载完成
      // this.getThemeTopYs()
    },
    //添加到购物车 Vuex
    addToCart() {
      //1.获取购物车页面需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.detailInfo.desc
      product.realPrice = this.goods.realPrice
      product.iid = this.iid
      //2.添加到购物车
      this.$store.dispatch('addCart',product)
    },
    /*
     *网络请求相关
     */
    getDetailData(iid) {
      getDetailData(iid).then((res) => {
        const result = res.result
        //1.轮播图
        this.topImages = result.itemInfo.topImages
        //2.商品基本信息
        // console.log(res);
        this.goods = new Goods(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        )
        //3.店铺信息
        this.shop = new Shop(result.shopInfo)
        //4.详情页面中的详细商品信息
        this.detailInfo = result.detailInfo
        // 5.参数信息
        this.detailParamInfo = new GoodsParam(
          result.itemParams.info,
          result.itemParams.rule
        )
      })
    },
  },
}
</script>

<style>
.detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
}
#detail-nav-bar {
  width: 100%;
}
#detail-better-scroll {
  position: absolute;
  top: 44px;
  left: 0px;
  right: 0px;
  bottom: 49px;
  /* 100% - 顶部导航栏 */
  /* height: calc(100% - 44px); */
  overflow: hidden;
}
.info {
  padding: 10px 8px;
}
</style>
