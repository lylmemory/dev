import { Common } from '@/common/Common'
import Vue from 'vue'
import request from './request'

export class LoginApi {
    /** 登录 */
    static login(data: any, success?: (data: any) => void, fail?: (data: any) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Login/Login`
        request.post(url, data).then(res => {
            if (res.status === 200) {
                if (res.data.success) {
                    if (success) {
                        success(res.data)
                    }
                } else {
                    if (fail) {
                        fail(res.data.message)
                    }
                }
            }
        })
    }

    /** 登录 */
    static verify(para: { username: string, token: string}, success?: (data: any) => void, fail?: (data: any) => void) {
        const query = Common.joinQuery({ username: para.username, token: para.token })
        const url = `${Vue.prototype.$config.apiServer}api/Login/Verify${query}`
        request.post(url).then(res => {
            if (res.status === 200) {
                if (res.data.success) {
                    if (success) {
                        success(res.data)
                    }
                } else {
                    if (fail) {
                        fail(res.data.message)
                    }
                }
            }
        })
    }
}
