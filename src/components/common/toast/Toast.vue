<template>
  <div class="toast" v-show="isToastShow">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: '',
    },
    isToastShow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  height: 30px;
  border-radius: 5px;
  padding: 5px 5px;
  text-align: center;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 12px;
}
</style>
