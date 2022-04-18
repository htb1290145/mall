<template>
  <div class="detail">
    <!-- 导航 -->
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar.vue";

import DetailSwiper from "@/views/detail/childComps/DetailSwiper.vue";

import { getDetailData } from "@/network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailData(this.iid)
  },
  methods: {
    getDetailData(iid) {
      getDetailData(iid).then((res) => {
        this.topImages = res.result.itemInfo.topImages;
      });
    },
  },
};
</script>

<style>
</style>