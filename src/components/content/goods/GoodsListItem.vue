<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    //监听图片加载
    imageLoad() {
      //bus事件总线，管理事件
      //1.首页和详情页都使用此组件，但分开监听各自的事件
      if (this.$route.path.indexOf('home')) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf('detail')) {
        this.$bus.$emit("detailItemImageLoad");
      }
    },
    //跳转详情页
    itemClick() {
      //动态路由 跳转到具体商品的详情页面
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  /* 单行文本溢出显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
