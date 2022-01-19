import { Common } from '@/common/Common'
import Vue from 'vue'
import request from './request'

/**
 * 工作日志API
 */
export class WorklogImgAPI {
    /**
     * 新增
     * @param data
     * @param success
     * @param fail
     */
    static add(data: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.server}api/WorklogImg/add`
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
        const url = `${Vue.prototype.$config.server}api/WorklogImg/update`
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
        const url = `${Vue.prototype.$config.server}api/WorklogImg/remove`
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
     * 根据Id查询单条数据
     * @param id
     * @param success
     * @param fail
     */
    static select(id:any, success?: (i: any) => void, fail?: (i: string) => void) {
        const query = Common.joinQuery(id)
        const url = `${Vue.prototype.$config.server}api/WorklogImg/select${query}`
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
        const url = `${Vue.prototype.$config.server}api/WorklogImg/getall${query}`
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
        const url = `${Vue.prototype.$config.server}api/WorklogImg/getpage${query}`
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
     * 图片上传
     * @param para
     * @param success
     * @param fail
     */
    static upload(para: any, success?: (i: any) => void, fail?: (i: string) => void) {
        const url = `${Vue.prototype.$config.server}api/WorklogImg/upload`
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
