import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(Vant)

Vue.prototype.$config = {
    apiServer: 'http://localhost:8080/',
    mqtt: {
        host: '',
        port: '61614',
        username: 'admin',
        password: '123456'
    }
}

const VueRouterPush = VueRouter.prototype.push
const VueRouterReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push (to: any) {
    const call = VueRouterPush.call(this, to) as any
    return call.catch((err: any) => err)
}

VueRouter.prototype.replace = function replace (to: any) {
    const call = VueRouterReplace.call(this, to) as any
    return call.catch((err: any) => err)
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
