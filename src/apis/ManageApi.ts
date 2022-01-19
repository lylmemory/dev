import { Common } from '@/common/Common'
import Vue from 'vue'
import request from './request'

/**
 * 管理API
 */
export class ManageApi {
    /**
     * 新增
     * @param data
     * @param success
     * @param fail
     */
    static add(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.apiServer}api/Manage/add`
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
        const url = `${Vue.prototype.$config.apiServer}api/Manage/update`
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
        const url = `${Vue.prototype.$config.apiServer}api/Manage/remove`
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
     * 通过code查询任务相关信息
     * @param para
     * @param success
     * @param fail
     */
    static getInfo(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(para)
        const url = `${Vue.prototype.$config.apiServer}api/Manage/GetInfo${query}`
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
        const url = `${Vue.prototype.$config.apiServer}api/Manage/getpage${query}`
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
        const url = `${Vue.prototype.$config.apiServer}api/Manage/getall${query}`
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
    static getAllUserTask(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(para)
        const url = `${Vue.prototype.$config.apiServer}api/Manage/getAllUserTask${query}`
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
     * 获取指定用户当前任务
     * @param para
     * @param success
     * @param fail
     */
    static getUserCurrentTask(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(para)
        const url = `${Vue.prototype.$config.apiServer}api/Manage/getUserCurrentTask${query}`
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
