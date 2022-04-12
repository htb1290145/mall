<template>
  <div id="home-recommends">
    <div class="recommends-item" v-for="item in recommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommends",
  props: {
    recommends: {
      type: Array,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
#home-recommends {
  display: flex;
  width: 100%;
  height: 137px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  background-color: var(--color-background);
  text-align: center;
  font-size: 12px;
}
.recommends-item {
  flex: 1;
  height: 97px;
}
.recommends-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

</style>