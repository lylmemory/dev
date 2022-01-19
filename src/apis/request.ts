import Vue from 'vue'
import axios from 'axios'
// import store from '@/store'
import router from '@/router'

const service = axios.create({
    baseURL: Vue.prototype.$config?.server,
    headers: {
        'content-Type': 'application/json; charset=utf-8'
    }
})

// 请求拦截
service.interceptors.request.use(
    (config: any) => {
        // const user: any = store.state.user
        let user:any
        const userStr = localStorage.getItem('user')
        if (userStr !== null) {
            user = JSON.parse(userStr)
        } else {
            router.replace('/login')
        }
        // console.log('request interceptors: user', user)

        if (user) {
            if (user.token) {
                const tokenEntity = user.token
                if (tokenEntity) {
                    const tokenStr = tokenEntity.token
                    config.headers.token = tokenStr
                } else {
                    router.replace('/login')
                }
            } else {
                router.replace('/login')
            }
        } else {
            console.log('未登录')
            router.replace('/login')
        }
        return config
    },
    (error: any) => {
        Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error: any) => {
        return Promise.reject(error)
    }
)
export default service
