<template>
  <div class="cart-item">
    <check-button class="cart-checked" :is-checked="cartItem.checked" @click.native="checkClick"></check-button>
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
        <span class="cart-item-price">￥{{ itemTotalPrice }}</span>
        <div class="cart-item-count">
          <button @click="decreaseCount">-</button>
          <span>x{{ cartItem.count }}</span>
          <button @click="increaseCount">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from '@/components/common/checkButton/CheckButton.vue'
export default {
  name: 'CartItem',
  components: {
    CheckButton,
  },
  props: {
    //引用数据类型可以更改属性值
    cartItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    //对象模型修改checked属性
    checkClick() {
      this.cartItem.checked = !this.cartItem.checked
      this.$store.commit('checkedChange', this.cartItem.checked)
    },
    //对象模型修改count属性
    increaseCount() {
      this.$store.commit('increaseCount', this.cartItem)
    },
    decreaseCount() {
      this.$store.commit('decreaseCount', this.cartItem)
    },
  },
  computed: {
    itemTotalPrice() {
      return (this.cartItem.realPrice * this.cartItem.count).toFixed(2)
    },
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
.cart-checked {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.cart-item-image {
  width: 65px;
  height: 80px;
}
.cart-item-image img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.cart-item-info {
  width: 220px;
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
  display: inline-block;
  margin-left: 60px;
}
.cart-item .active {
  background-color: red;
}
</style>
