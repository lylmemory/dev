import { Common } from '@/common/Common'
import Vue from 'vue'
import request from './request'

/**
 * 工作日志API
 */
export class WorklogApi {
    static get uploadUrl() {
        return `${Vue.prototype.$config.apiServer}api/Worklog/addWithImg`
    }

    /**
     * 新增
     * @param data
     * @param success
     * @param fail
     */
    static add(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Worklog/add`
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

    // /**
    //  * 新增(带图片上传)
    //  * @param data
    //  * @param success
    //  * @param fail
    //  */
    // static addWithImg(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
    //     // console.log(data)
    //     const url = `${Vue.prototype.$config.apiServer}api/Worklog/addWithImg`
    //     request.post(url, data).then(res => {
    //         if (res.status === 200) {
    //             if (res.data.success) {
    //                 if (success) {
    //                     success(res.data)
    //                 }
    //             } else {
    //                 if (fail) {
    //                     fail(res.data.message)
    //                 }
    //             }
    //         }
    //     })
    // }

    /**
     * 修改
     * @param data
     * @param success
     * @param fail
     */
    static update(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Worklog/update`
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
        const url = `${Vue.prototype.$config.apiServer}api/Worklog/remove`
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
    static getInfo(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(para)
        const url = `${Vue.prototype.$config.apiServer}api/Worklog/getinfo${query}`
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
     * 分页查询数据
     * @param para
     * @param success
     * @param fail
     */
    static getPage(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(para)
        const url = `${Vue.prototype.$config.apiServer}api/Worklog/getpage${query}`
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
        const url = `${Vue.prototype.$config.apiServer}api/Worklog/getall${query}`
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
        const url = `${Vue.prototype.$config.apiServer}api/Worklog/upload`
        request.post(url, para).then(res => {
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
