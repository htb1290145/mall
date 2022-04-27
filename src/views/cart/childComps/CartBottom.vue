<template>
  <div class="cart-bottom">
    <div class="cart-bottom-left">
      <div class="cart-bottom-btn">
        <!-- <button @click="allChecked" :class="{ allChecked: this.$store.state.isAllChecked }">全选</button> -->
        <button @click="allChecked" :class="{ allChecked: isSelectAll }">全选</button>
      </div>
      <div>
        合计
        <span>￥{{ totalPrice }}</span>
      </div>
    </div>
    <div class="cart-bottom-right">
      去计算
      <span>￥({{ checkedLength }})</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartBottom',
  computed: {
    ...mapState(['cartList']),
    //合计价钱
    totalPrice() {
      //选中的才计算价钱
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked
        })
        .reduce((preValue, item) => {
          return preValue + item.realPrice * item.count
        }, 0)
        .toFixed(2)
    },
    //去计算——商品数量
    checkedLength() {
      let count = 0
      for (let item of this.$store.state.cartList) {
        if (item.checked) {
          count++
        }
      }
      return count
    },
    //判断全选按钮的状态
    isSelectAll() {
      //没有数据的时候，为false
      if (this.$store.state.cartList.length === 0) return false
      //有一个不选中，就为false
      // return !(this.$store.state.cartList.filter((item) => !item.checked).length)  遍历性能差一点
      return !this.$store.state.cartList.find((item) => !item.checked)
    },
  },
  methods: {
    //全选按钮
    allChecked() {
      // 全部选中——点击全部不选中
      // 有一个没选中——点击全部选中
      // 1 普通遍历
      // if (this.isSelectAll) {
      //   // for (let item of this.cartList) {
      //   //   item.checked = false
      //   // }
      //   this.cartList.forEach((item) => (item.checked = false))
      // } else {
      //   this.cartList.forEach((item) => (item.checked = true))
      //   // for (let item of this.cartList) {
      //   //   item.checked = true
      //   // }
      // }
      // 2 三元表达式
      this.isSelectAll
        ? this.cartList.forEach((item) => (item.checked = false))
        : this.cartList.forEach((item) => (item.checked = true))
    },
  },
}
</script>

<style>
.cart-bottom {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 3.0625rem;
  left: 0;
  right: 0;
  width: 100%;
  height: 3.125rem;
}
.cart-bottom-left {
  flex: 7;
  height: 3.125rem;
  background-color: pink;
}
.cart-bottom-right {
  flex: 5;
  height: 3.125rem;
  background-color: skyblue;
}
.allChecked {
  background-color: red;
}
</style>
