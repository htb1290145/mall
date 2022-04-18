import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Vue.use(Button.name, Button);
// Vue.use(Select.name, Select);

// 添加事件总线
Vue.prototype.$bus = new Vue()


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')