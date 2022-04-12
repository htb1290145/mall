import {
  request
} from "./request";

export function getHomeMulitdata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods() {
  return request({
    url: '/recommend'
  })
}