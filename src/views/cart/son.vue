<template>
  <div class="son">
    <h3>son:{{ son }}</h3>
    <grand-son v-bind="$attrs" v-on="$listeners"  ></grand-son>
    <!-- <p>{{grandson}}</p> -->
  </div>
</template>

<script>
import grandSon from "@/views/cart/grandSon.vue";

export default {
  name: "Son",
  props: {
    son: {
      type: String,
      default: "没有传递",
    },
  },
  components: {
    grandSon,
  },
  // created() {
  //   testSon;
  // },
  methods: {
    // testSon(a){
    //   console.log('son组件');
    //   console.log(a);
    // }
  },
};
</script>

<style>
</style>