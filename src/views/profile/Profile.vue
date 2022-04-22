<template>
  <div>
    <h2>我的</h2>
    <p>father:{{ data }}</p>
    <son :son-data="data" @btnClick="fatherClick"></son>
  </div>
</template>

<script>
import Son from './son.vue'
export default {
  components: { Son },
  name: 'Profile',
  data() {
    return {
      data: [1, 2],
    }
  },
  methods: {
    fatherClick(sonData) {
      sonData = [999]
      // console.log(sonData)
    },
  },
}
</script>

<style></style>
