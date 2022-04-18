<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper.vue";
import SwiperItem from "@/components/common/swiper/SwiperItem.vue";
export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  updated(){
    console.log('更新了');
  }
};
</script>

<style>
.detail-swiper {
  height: 250px;
  overflow: hidden;
}
</style>