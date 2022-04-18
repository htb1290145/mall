<template>
  <div class="cart">
    <h2>购物车</h2>
    <p>father:{{ son }}+{{ grandson }}</p>
    <son
      :son="son"
      :grandson="grandson"
      @testGrandSon="testFather"
    ></son>
  </div>
</template>

<script>
import Son from "@/views/cart/son.vue";

export default {
  name: "Cart",
  data() {
    return {
      son: "son",
      grandson: "grandson",
    };
  },
  components: {
    Son,
  },
  methods: {
    testFather(){
      console.log('father');
    }
  },
};
</script>

<style>
</style>
