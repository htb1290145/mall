<template>
  <div id="goods-list">
    <p>GoodsList</p>
    <hr />

    <p>{{ goods }}</p>
    <goods-list-item></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      goodsItem: {},
    };
  },
  
};
</script>

<style>
</style>