import Vue from 'vue'
import iView from 'iview'
import echarts from 'echarts';
import App from './App'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css'
import '../static/theme.css'
Vue.use(iView)
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
