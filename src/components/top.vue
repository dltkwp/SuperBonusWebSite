<template>
     <div class="menu">
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-cjxs">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <router-link to="/v_index" class="navbar-brand">
                                <img src="@/assets/img/pic_logo.png">
                            </router-link>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" v-if="!isLoginStatus">
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="javascript:;;" @click="showLoginModal">登录</a>
                                </li>
                                <!-- <li class="active">
                                    <a href="javascript:;;" @click="showRegistModal">注册</a>
                                </li> -->
                            </ul>
                        </div>

                        <div class="nav-member-info" v-if="isLoginStatus">
                            <div class="dropdown profile-element">
                                <a data-toggle="dropdown" href="javascript:;;" class="dropdown-toggle" aria-expanded="false">
                                    <span class="clear">
                                        <span class="block m-t-xs">
                                            <strong class="font-bold"> {{userInfo.realName||userInfo.nikeName}}</strong>
                                        </span> 
                                        <span class="text-muted text-xs block"> 
                                            <b class="caret"></b>
                                        </span>
                                    </span>
                                </a> 
                                <ul class="dropdown-menu  m-t-xs">
                                    <li>
                                      <router-link to="/info/v_info" > 个人资料  </router-link>
                                    </li> 
                                    <li>
                                        <a href="javascript:;;" @click="logout">退出</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

            
        <div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;">
            <div class="modal-dialog modal-dialog-regist" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">登录超级悬赏</h4>
                </div>
                <div class="modal-body">
                <form class="form">
                    <div class="form-group">
                        <input type="text" class="form-control form-md" placeholder="输入手机号" maxlength="11" v-model="login.mobile">
                    </div>
                    <!-- <div class="form-group">
                        <input type="password" class="form-control form-md" placeholder="请输入密码" maxlength="20" v-model="login.pwd">
                    </div> -->
                    <div class="form-group">
                         <div class="row">
                            <div class="col-md-8">
                               <input type="text" class="form-control form-md" placeholder="请输入短信验证码" maxlength="8" v-model="login.checkCode">
                            </div>
                            <div class="col-md-4">
                                <div class="btn btn-danger btn-block btn-md" @click="sendSmsCode">{{showText}}</div>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                <a  class="btn btn-black btn-block btn-lg" href="javascript:;;" @click="loginSubmit">登录</a>
                    <!-- <p class="text-center mar-t-15"> 
                        <a href="javascript:;;" @click="goToRegist" class="font-black font-16 text-center">还没有账号？立即注册</a>
                    </p> -->
                </div>
            </div>
            </div>
        </div>

        <div class="modal fade" id="RegistModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-regist" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">注册超级悬赏</h4>
                </div>
                <div class="modal-body">
                <form class="form">
                    <div class="form-group">
                    <input type="text" class="form-control form-md" placeholder="输入手机号">
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control form-md" placeholder="请输入密码">
                    </div>
                    <div class="form-group">
                    <div class="row">
                        <div class="col-md-8">
                        <input type="text" class="form-control form-md" placeholder="请输入验证码">
                        </div>
                        <div class="col-md-4">
                        <img src="img/captcha.jpeg" class="captcha">
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" v-model="regist.isChecked" :checked='regist.isChecked==1' value="1"> 我已查看并同意<a href="javascript:;" @click="showReleaseModal">超级悬赏注册协议</a>
                        </label>
                    </div>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-black btn-block btn-lg" data-dismiss="modal">注册</button>
                    <p class="text-center mar-t-15"> 
                        <a href="javascript:;;" @click="goToLogin" class="font-black font-16 text-center">已有账号，立即登录</a>
                    </p>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import utils from '@/util/util'
import superConst from "@/util/super-const"
import { mobileValidate, numberValidate, pwdValidate } from "@/util/validate"
import { Message } from 'element-ui'

let sendTimer = null

export default {
    data () {
        return {
            isLoading: false,
            isLoginStatus: false,
            userInfo: {},
            login: {
                mobile: '',
                pwd:'',
                imgCode:'',
                checkCode: '',
                isShowImageCode: false,
                type:'checkCode', // pwd->密码登录 checkCode -> 验证码登录
            },
            regist:{
                mobile: '',
                pwd: '',
                imgCode: '',
                isChecked: 0,
                isShowImageCode: false
            },
            maxCnt: 60,
            showText: '获取短信验证码',
            isSending: false
        }
    },
    mounted () {
        let _this = this
        _this.isLoginStatus = utils.isLogin()
        let userInfo = localStorage.getItem(superConst.SUPER_TOKEN_PC_KEY)
        if (userInfo) {
            _this.userInfo = JSON.parse(userInfo)
        }
    },
    methods: {
        logout () {
            let _this = this
            localStorage.setItem(superConst.SUPER_TOKEN_PC_KEY,'')
            window.location.href = '/v_index'
        },
        showLoginModal () {
            $("#LoginModal").modal('show')
        },
        showReleaseModal () {
            $("#releaseModal").modal('show')
        },
        showRegistModal () {
            $("#RegistModal").modal('show')
        },
        goToRegist () {
            $("#LoginModal").modal('hide')
            $("#RegistModal").modal('show')
        },
        goToLogin () {
            $("#RegistModal").modal('hide')
            $("#LoginModal").modal('show')
        },
        registSubmit () {

        },
        loginSubmit () {
           let _this = this
           if (_this.isLoading) {
               return false;
           }

           let mobile = _this.login.mobile
           let pwd = _this.login.pwd
           let checkCode = _this.login.checkCode


           if (!mobileValidate(mobile)) {
                Message({ message: '手机号格式不正确', type: 'warning' })
               return false
           }
           if (_this.login.type == 'pwd') {
                if (!pwdValidate(pwd)) {
                    Message({ message: '密码格式不正确', type: 'warning' })
                    return false
                }
           } else if (_this.login.type == 'checkCode') {
                if(!checkCode) {
                    Message({ message: '验证码格式不可为空', type: 'warning' })
                    return false
                }
                if (!numberValidate(checkCode)) {
                    Message({ message: '验证码格式不正确', type: 'warning' })
                    return false
                }
                let params = []
                params.push('phone=' + mobile)
                params.push('checkCode=' + checkCode)
                _this.$axios
                    .get(superConst.API_BASE_WEBCHAT_URL + "login?" + params.join('&'))
                    .then(result => {
                        let data = result.data;
                        if (data.code && data.code!=200 && data.code != 201) {
                            Message({ message: data.msg, type: 'error' })
                        } else {
                            Message({ message: '登录成功', type: 'success' })
                            localStorage.setItem(superConst.SUPER_TOKEN_PC_KEY,JSON.stringify(data))
                            _this.getUserDetail(function () {
                                $("#LoginModal").modal('hide')
                                window.location.href = '/info/v_info'
                            })
                        }
                    })
                    .catch(err => {});
           }
        },
        sendSmsCode () {
           let _this = this

           if (!mobileValidate(_this.login.mobile)) {
                Message({ message: '手机号格式不正确', type: 'warning' })
               return false
           }

           if (_this.isSending) {
               return false
           }

            _this.$axios
                .post(superConst.API_BASE_WEBCHAT_URL + "sms/send?phone=" + _this.login.mobile)
                .then(result => {
                    let data = result.data;
                    if (data.code && data.code!= 200 && data.code != 201 && data.code != -1) {
                        Message({ message: data.msg, type: 'error' })
                    }else{
                        _this.isSending = true
                        _this.showText = '60秒后重新获取'
                        sendTimer = window.setInterval(() => {
                            _this.maxCnt = _this.maxCnt - 1
                            if (_this.maxCnt >=0){
                                _this.isSending = true
                                _this.showText = _this.maxCnt + '秒后重新获取'
                            }
                            if (_this.maxCnt < 0) {
                                window.clearInterval (sendTimer)
                                _this.maxCnt = 60
                                _this.isSending = false
                                _this.showText = '获取短信验证码'
                            }
                        },1000)
                        Message({ message: '短信发送成功', type: 'warning' })
                    }
                })
                .catch(err => {});

        },
        getUserDetail (callback) {
            _this.$axios
                .post(superConst.API_BASE_WEBCHAT_URL + "users/login")
                .then(result => {
                    let data = result.data;
                    localStorage.setItem(superConst.SUPER_TOKEN_PC_KEY,JSON.stringify(data))
                    callback && callback()
                })
                .catch(err => {});
        }

    }
}
</script>

<style>

</style>
