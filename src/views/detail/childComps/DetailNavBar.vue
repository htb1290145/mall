<template>
  <nav-bar>
    <div slot="left" id="detail-back" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="返回" />
    </div>
    <div slot="center" id="detail-center" ref="detailCenter">
      <ul>
        <li
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      //返回上一个路由
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#detail-back {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 44px;
}
#detail-back img {
  position: absolute;
  width: 22px;
  height: 22px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
#detail-center ul {
  display: flex;
  list-style: none;
}
#detail-center ul li {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
</style>