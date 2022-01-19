import { Common } from '@/common/Common'
import Vue from 'vue'
import request from './request'

/**
 * 合同API
 */
export class ContractApi {
    static get uploadUrl() {
        return `${Vue.prototype.$config.apiServer}api/Contract/addWithImg`
    }

    /**
     * 新增
     * @param data
     * @param success
     * @param fail
     */
    static add(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Contract/add`
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

    /**
     * 新增(带图片上传)
     * @param data
     * @param success
     * @param fail
     */
    static addWithImg(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
        // console.log(data)
        const url = `${Vue.prototype.$config.apiServer}api/Contract/addWithImg`
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

    /**
     * 修改
     * @param data
     * @param success
     * @param fail
     */
    static update(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Contract/update`
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
    static remove(codes: string[], success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Contract/remove`
        request.delete(url, { data: codes }).then(res => {
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
        const url = `${Vue.prototype.$config.apiServer}api/Contract/getpage${query}`
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
        const url = `${Vue.prototype.$config.apiServer}api/Contract/getall${query}`
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

    static upload(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Contract/upload`
        request.post(url, para.data).then(res => {
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
