<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">
        购物车
        <span v-show="isCartNumberShow">({{ cartNumber }})</span>
      </div>
    </nav-bar>
    <!-- 中间内容区域 -->
    <better-scroll class="cart-better-scroll">
      <cart-item
        v-for="item in $store.state.cartList"
        :key="item.index"
        :cart-item="item"
      ></cart-item>
    </better-scroll>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import BetterScroll from '@/components/common/betterScroll/BetterScroll.vue'
import CartItem from '@/components/common/cartItem/CartItem.vue'
export default {
  name: 'Cart',
  data() {
    return {
      cartNumber: null,
      isCartNumberShow: false,
    }
  },
  components: {
    NavBar,
    BetterScroll,
    CartItem,
  },
  methods: {},
}
</script>

<style>
.cart-nav-bar {
  background-color: var(--color-tint);
  color: white;
}
.cart-better-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>
