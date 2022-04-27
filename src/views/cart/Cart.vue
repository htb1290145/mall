<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center" class="cart-nav-bar-center">
        <div>购物车</div>
        <div v-if="$store.state.cartList.length > 0">
          <span>({{ $store.state.cartList.length }})</span>
        </div>
      </div>
    </nav-bar>
    <!-- 中间内容区域 -->
    <better-scroll class="cart-better-scroll">
      <cart-item v-for="item in $store.state.cartList" :key="item.index" :cart-item="item"></cart-item>
    </better-scroll>
    <!-- 底部汇总 -->
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import BetterScroll from '@/components/common/betterScroll/BetterScroll.vue'
import CartItem from '@/components/common/cartItem/CartItem.vue'
import CartBottom from '@/views/cart/childComps/CartBottom.vue'
export default {
  name: 'Cart',
  components: {
    NavBar,
    BetterScroll,
    CartItem,
    CartBottom,
  },
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
.cart-nav-bar-center {
  display: flex;
  justify-content: center;
}
</style>
