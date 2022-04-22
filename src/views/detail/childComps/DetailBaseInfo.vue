<template>
  <!-- 判断goods数据对象是否为空，决定是否渲染 -->
  <div id="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <h5>{{ goods.title }}</h5>
    <div id="price">
      <p id="newPrice">{{ goods.newPrice }}</p>
      <p id="oldPrice">{{ goods.oldPrice }}</p>
      <p v-if="goods.discount" id="discount">{{ goods.discount }}</p>
    </div>
    <div id="columns">
      <p>{{ goods.columns[0] }}</p>
      <p>{{ goods.columns[1] }}</p>
      <p>{{ goods.services[goods.services.length - 1].name }}</p>
    </div>
    <div id="services">
      <div v-for="index in goods.services.length-1" :key="index">
        <img  :src="goods.services[index-1].icon"/>
        <span >{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
#detail-base-info {
  width: 100%;
}
#detail-base-info h5 {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
}
#detail-base-info #price {
  display: flex;
  height: 24px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 15px;
}
#price #newPrice {
  color: var(--color-high-text);
  font-size: 20px;
  margin-right: 5px;
}
#price #oldPrice {
  font-size: 14px;
  text-decoration: line-through;
  line-height: 28px;
  margin-right: 5px;
}
#price #discount {
  background-color: var(--color-tint);
  width: 66px;
  height: 20px;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  line-height: 20px;
}
#detail-base-info #columns {
  display: flex;
  justify-content: space-between;
  height: 22px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
#detail-base-info #services {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
}
#services div {
  flex: 1;
  height: 50px;
  line-height: 50px;
}
#services img {
  width: 12px;
  height: 12px;
}
#services span {
  font-size: 12px;
}
</style>