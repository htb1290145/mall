import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutation-type'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    //新商品默认选中状态
    payload.checked = true
    state.cartList.push(payload)
  },
  //商品按钮
  checkedChange(state, payload) {
    //商品按钮状态改变
    state.cartList.checked = payload
  },
  //商品数量加减
  increaseCount(state, payload) {
    payload.count += 1
  },
  decreaseCount(state, payload) {
    payload.count -= 1
  },
}