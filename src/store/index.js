import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const state = {
  cartList: [],
  // isAllChecked: false
}
export default new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions,
  // mutations: {
  //   //mutations的用处是修改state的状态
  //   //每一个方法所做的事情尽可能单一。否则无法跟踪变化。
  //   addCounter(state, payload) {
  //     payload.count++
  //   },
  //   addToCart(state, payload) {
  //     state.cartList.push(payload)
  //   },
  // },

  // actions: {
  //   // context={state,payload}
  //   addCart(context, payload) {
  //     //pay添加新商品
  //     //判断商品是否存在
  //     // let oldProduct = null
  //     // for (let item of state.cartList) {
  //     //   if (item.iid === payload.iid) {
  //     //     oldProduct = item
  //     //   }
  //     // }
  //     //高阶做法find。如果find中的函数条件成立，则返回item
  //     let oldProduct = context.state.cartList.find(
  //       (item) => item.iid === payload.iid
  //     )
  //     //如果已存在，只增加计数。不存在则添加进去
  //     if (oldProduct) {
  //       // oldProduct.count += 1
  //       context.commit('addCounter', oldProduct)
  //     } else {
  //       payload.count = 1
  //       context.commit('addToCart', payload)
  //       // state.cartList.push(payload)
  //     }
  //   },
  // },
  modules: {},
})