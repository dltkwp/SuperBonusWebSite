let moment = require('./moment')
let thkConst = require('./super-const')

const authToLogin = function (res) {
  if (res && res.code) {
    if (res.code === 401) {
      window.location.href = '/v_login'
    } else {
      this.$toast.warning(res.msg)
    }
  }
}

const getPayTypeName = function (key) {
  let res = ''
  switch (key) {
    case 'wechat' :
      res = '微信'
  }
  return res
}

/**
 * 判定是否是登录状态
 * 1: 是否登录过
 * 2: 登录过是否token过期
 */
const isLogin = function () {
  let auth = localStorage.getItem(thkConst.SUPER_TOKEN_PC_KEY)
  if (!auth) {
    return false
  } else {
    if (moment().isAfter(moment(auth.expiredAt))) {
      return false
    }
    return true
  }
}

module.exports = {
  authToLogin,
  getPayTypeName,
  isLogin
}
