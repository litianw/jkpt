// 引入axios
import axios from "axios";
import to from 'await-to-js'
//引入loading组件(以实际项目为准)
import {Loading} from 'element-ui';



// 创建的axios的实列 instance
const instance = axios.create({
    baseURL: "/jgpt", // 基准地址  可直接配置路径,也可代理路径(以实际项目为准)
    timeout: -1 ,// 超时时间
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
// 请求拦截
// 声明变量接收logding
let loadingInstance
instance.interceptors.request.use((config) => {
    // 设置请求头
    // let token = localStorage.getItem('token')
    // config.headers.Authorization = token
    config.data = JSON.stringify(config.data);
    console.log("请求路径：",config.url);
    //设置logding配置 赋值
    loadingInstance = Loading.service({
        lock: true,
        text: '拼命加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
    });
    // 返回请求头
    return config
}, err => {
    // 请求失败返回失败信息
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use((res) => {
    // 响应成功则关闭loading加载
    loadingInstance.close();
    //返回响应数据
    return res.data
}, err => {
    // 响应失败则关闭loading加载
    setTimeout(() => {
        loadingInstance.close();
    }, 1000);
    // 响应失败返回失败信息
    return Promise.reject(err)
})
export function isObj(obj) {
    const typeCheck = typeof obj !== 'undefined' && typeof obj === 'object' && obj !== null
    return typeCheck && Object.keys(obj).length > 0
}
export async function _get(url, qs, headers) {
    const params = {
        url,
        method: 'get',
        params: qs ? qs : ''
    }
    if (headers) {
        params.headers = headers
    }
    const [err, res] = await to(instance(params))
    if (!err && res) {
        return res
    } else {
        return console.log(err)
    }
}

export async function _post(url, qs, body) {
    const params = {
        url,
        method: 'post',
        params: isObj(qs) ? qs : {},
        data: isObj(body) ? body : {}
    }
    const [err, res] = await to(instance(params))
    if (!err && res) {
        return res
    } else {
        return console.log(err)
    }
}
export async function _put(url, qs, body) {
    const params = {
        url,
        method: 'put',
        params: isObj(qs) ? qs : {},
        data: isObj(body) ? body : {}
    }
    const [err, res] = await to(instance(params))
    if (!err && res) {
        return res
    } else {
        return console.log(err)
    }
}

export async function _delete(url, qs, body) {
    const params = {
        url,
        method: 'delete',
        params: isObj(qs) ? qs : {},
        data: isObj(body) ? body : {}
    }
    const [err, res] = await to(instance(params))
    if (!err && res) {
        return res
    } else {
        return console.log(err)
    }
}


