import { Common } from '@/common/Common'
import Vue from 'vue'
import request from './request'

export class UserApi {
    /** 新增 */
    static add(data: any, success?: (data: any) => void, fail?: (data: any) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/User/Add`
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

    /** 修改 */
    static update(data: any, success?: (data: any) => void, fail?: (data: any) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/User/Update`
        request.put(url, data).then(res => {
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

    /**
     * 删除
     * @param data
     * @param success
     * @param fail
     */
    static remove(ids: string[], success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.server}api/User/Remove`
        request.delete(url, { data: ids }).then(res => {
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

    /**
     * 分页查询数据
     * @param para
     * @param success
     * @param fail
     */
    static getPage(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(para)
        const url = `${Vue.prototype.$config.server}api/Worklog/GetPage${query}`
        request.get(url).then(res => {
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

    /**
     * 查询所有数据
     * @param para
     * @param success
     * @param fail
     */
    static getAll(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(para)
        const url = `${Vue.prototype.$config.server}api/Worklog/GetAll${query}`
        request.get(url).then(res => {
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
