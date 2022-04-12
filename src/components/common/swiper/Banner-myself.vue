<template>
  <div class="banner">
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in banner" :key="item.index">
          <img :src="item.image" alt="" id="banner-img" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banner: Array,
  },
  data() {
    return {
      banner1: this.banner,
      length: this.banner.length,
    };
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#banner-img {
  width: 375px;
}
</style>