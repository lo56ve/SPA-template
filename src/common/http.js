'use strict'

import axios from 'axios'
import qs from 'qs'

// 拦截请求
axios.interceptors.request.use(config => {
  // 此处可显示loading
  return config
}, error => {
  // 这里的Promise.reject()是实际使用中的reject()函数
  return Promise.reject(error)
})

// 拦截相应
axios.interceptors.response.use(response => {
  // 此处可做不同响应状态码的处理
  return response
}, error => {
  return Promise.reject(error.response)
})

export default {
  post (url, data) {
    // 通过axios实例请求
    return axios({
      method: 'post',
      baseURL: 'https://cnodejs.org/api/v1',        // 请求的根路径，根据实际情况做修改
      url,
      data: qs.stringify(data),                     // 如果是post请求，将请求参数序列化
      timeout: 5000,
      headers: {                                    // 设置请求头，post和get不同
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: 'https://cnodejs.org/api/v1',
      url,
      params,                                       // get请求时带的参数
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}
