export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    //如果存在timer，即函数又调用了，立马清除定时器，重新开始计时
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}