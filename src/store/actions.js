import { ADD_COUNTER, ADD_TO_CART } from './mutation-type'

export default {
  // context={state,payload}
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(
      (item) => item.iid === payload.iid
    )
    //如果已存在，只增加计数。不存在则添加进去
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
    // if (oldProduct) {
    //   context.commit('addCounter', oldProduct)
    // } else {
    //   payload.count = 1
    //   context.commit('addToCart', payload)
    // }
  },
}
