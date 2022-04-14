<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in goods"
      :goods-item="item"
      :key="item.index"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
