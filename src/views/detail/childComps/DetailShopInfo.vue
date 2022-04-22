<template>
  <div class="detail-shop-info">
    <div id="shop-name">
      <img :src="shop.shopLogo" alt="" />
      <p>{{ shop.name }}</p>
    </div>
    <div id="shop-message">
      <div id="sells-goods">
        <div id="sells">
          <p>{{ shop.cSells | sellCountFilter }}</p>
          <p>总销量</p>
        </div>
        <div id="goods">
          <p>{{ shop.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div id="score">
        <table>
          <tr v-for="item in shop.score" :key="item.index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'commit-better': item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {
      isBetter: null,
      detailShop: this.shop,
    };
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style>
.detail-shop-info {
  width: 100%;
  font-size: 12px;
}
/* 店铺名字 */
.detail-shop-info #shop-name {
  display: flex;
  align-content: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  vertical-align: middle;
}
#shop-name img {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 20px;
  vertical-align: middle;
}
#shop-name p {
  line-height: 80px;
  font-size: 20px;
}
/* 店铺信息 */
#shop-message {
  display: flex;
  align-items: center;
  height: 80px;
}
/* 销售数据 */
#shop-message #sells-goods {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid #ccc;
  text-align: center;
}
#sells-goods div {
  width: 50%;
  height: 60px;
  font-size: 16px;
}
#sells-goods div p {
  margin-top: 10px;
}
/* 评价 */

#score table td {
  text-align: center;
  padding: 5px 8px;
  
}
/* 样式判断 */
.score {
  color: green;
}
.better {
  background-color: green;
  color: white;
}
.score-better {
  color: red;
}
.commit-better {
  background-color: red;
  color: white;
}
</style>
