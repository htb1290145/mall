<template>
  <div class="son">
    <p>son:{{ sonData }}</p>
    <button @click="btnClick">修改</button>
  </div>
</template>

<script>
export default {
  name: 'Son',
  // data() {
  //   return{
  //     sonData:[555]
  //   }
  // },
  props: {
    sonData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {},
  methods: {
    btnClick() {
      this.$emit('btnClick', this.sonData)
    },
  },
}
</script>

<style></style>
