<template>
  <div class="cart-item">
    <div class="cart-item-btn">按钮</div>
    <div class="cart-item-image">
      <img :src="cartItem.image" alt="商品图片" />
    </div>
    <div class="cart-item-info">
      <div class="cart-item-title">
        {{ cartItem.title }}
      </div>
      <div class="cart-item-describe">
        {{ cartItem.desc }}
      </div>
      <div class="cart-item-bottom">
        <span class="cart-item-price">￥{{itemTotalPrice}}</span>
        <span class="cart-item-count">x{{ cartItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    itemTotalPrice() {
      return (this.cartItem.realPrice * this.cartItem.count).toFixed(2)
    },
  },
  mounted() {
    console.log(this.cartItem)
  },
}
</script>

<style>
.cart-item {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 10px 5px;
  background-color: #fff;
  border: 1px solid black;
}
.cart-item-btn {
  width: 20px;
}
.cart-item-image {
  width: 70px;
  height: 80px;
}
.cart-item-image img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.cart-item-info {
  width: 240px;
  height: 80px;
  padding: 2px 5px;
}
.cart-item-title {
  font-size: 20px;
  font-weight: 700;
  height: 20px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cart-item-describe {
  margin-bottom: 8px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cart-item-bottom {
  height: 23px;
  line-height: 23px;
}
.cart-item-price {
  color: red;
  font-size: 20px;
}
.cart-item-count {
  float: right;
}
</style>
