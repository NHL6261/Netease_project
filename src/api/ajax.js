import axios from 'axios'
import qs from 'querystring'

// 创建axios,生成实例
const instance = axios.create({
    baseURL:'/api'
})

// 请求拦截器
instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    return config
})

// 响应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        console.log(error.message)
        alert("请求出错")
        return new Promise(() => {})
    }
)
export default instance