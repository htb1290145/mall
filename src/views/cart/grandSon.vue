<template>
  <div class="grand-son">
    <h3 @click="testGrandSon">grandSon:{{ this.$attrs.grandson }}</h3>
    <!-- <h3>grandSon:{{ grandson }}</h3> -->
  </div>
</template>

<script>
export default {
  name: 'Son',
  // props: {
  //   grandson: {
  //     type: String,
  //     default: "没有传递",
  //   },
  // },
  created() {
    // console.log("grandson", this.grandson);
    console.log(this.$attrs)
  },
  methods: {
    testGrandSon() {
      this.$emit('testGrandSon', '从grandSon传递来的事件')
    },
  },
}
</script>

<style>
</style>