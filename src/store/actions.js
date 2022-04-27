import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutation-type'

export default {
  // context={state,payload}
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(
        (item) => item.iid === payload.iid
      )
      //如果已存在，只增加计数。不存在则添加进去
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品件数+1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('已添加新商品')
      }
    })
    // if (oldProduct) {
    //   context.commit('addCounter', oldProduct)
    // } else {
    //   payload.count = 1
    //   context.commit('addToCart', payload)
    // }
  },
  // 购物车按钮状态改变
  // checkedChange(context, payload) {
  //   context.commit(CHECKED_CHANGE, payload)
  // }
}