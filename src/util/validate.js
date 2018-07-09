
export function mobileValidate (str) {
  const reg = /^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/
  return reg.test(str)
}

export function numberValidae (str) {
  const reg = /^[0-9]*$/
  return reg.test(str)
}

export function pwdValidate (str) {
  const reg = /^[a-zA-Z0-9]{8,20}$/
  return reg.test(reg)
}
