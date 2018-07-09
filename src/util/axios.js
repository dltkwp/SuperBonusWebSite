import axios from 'axios'
import superConst from './super-const'
export default {
  install: function (Vue) {
    axios.defaults.timeout = 9000 // 响应时间
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置请求头
    // axios.defaults.baseURL = superConst.API_BASE_URL

    axios.interceptors.request.use(
      config => {
        let token = localStorage.getItem(superConst.SUPER_TOKEN_PC_KEY)
        if (token) {
          let tokenJson = JSON.parse(token)
          config.headers.token = tokenJson.token
        }
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        let httpsIndex = config.url.indexOf('https://')
        let origainUrl = config.url
        if (httpsIndex === -1) {
          config.url = superConst.API_BASE_URL + origainUrl
        } else {
          config.url = origainUrl
        }
        return config
      },
      err => {
        return Promise.reject(err)
      })

    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        debugger
        if (error && error.response) {
          switch (error.response.status) {
            case 401:
              // 返回 401 清除token信息并跳转到登录页面
              // localStorage.setItem(superConst.SUPER_TOKEN_KEY, '')
              // window.location.href = '/v_login'
          }
          return Promise.reject(error.response.data)
        } else {
          if (error.message === 'Network Error') {
            $('#LoginModal').modal('show')
          }
          return Promise.reject(error)
        }
      })

    Object.defineProperty(Vue.prototype, '$axios', { value: axios })
  }
}
