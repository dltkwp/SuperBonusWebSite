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
                                <li class="active">
                                    <a href="javascript:;;" @click="showRegistModal">注册</a>
                                </li>
                            </ul>
                        </div>

                        <div class="nav-member-info" v-if="isLoginStatus">
                            <router-link to="/info/v_info" >
                                <img src="img/icon_recruit_1.png" class="img-circle img-sm">仰望明天
                            </router-link>
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
                        <input type="text" class="form-control form-md" placeholder="请输入短信验证码" maxlength="8" v-model="login.checkCode">
                         <a class="btn btn-black btn-block btn-lg" href="javascript:;;" @click="sendSmsCode">{{showText}}</a>
                    </div>
                    <!-- <div class="form-group hide">
                        <div class="row">
                            <div class="col-md-8">
                                <input type="text" class="form-control form-md" placeholder="请输入验证码(连续3次输入密码错误显示）">
                            </div>
                            <div class="col-md-4">
                                <img src="img/captcha.jpeg" class="captcha">
                            </div>
                        </div>
                    </div> -->
                </form>
                </div>
                <div class="modal-footer">
                <a  class="btn btn-black btn-block btn-lg" href="javascript:;;" @click="loginSubmit">登录</a>
                <p class="text-center mar-t-15"> 
                    <a href="javascript:;;" @click="goToRegist" class="font-black font-16 text-center">还没有账号？立即注册</a>
                </p>
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
    },
    methods: {
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


           if (!mobile) {
               alert('手机号不可为空')
               return false
           }

           if (_this.login.type == 'pwd') {
                if (!pwd) {
                    alert('密码不可为空')
                    return false
                }
           } else if (_this.login.type == 'checkCode') {
                if (!checkCode) {
                    alert('验证码不可为空')
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
                        alert(data.msg)
                    } else {
                        alert('登录成功')
                        localStorage.setItem(mt.SUPER_TOKEN_PC_KEY,data)
                        $("#LoginModal").modal('hide')
                        window.location.href = '/info/v_info'
                    }
                })
                .catch(err => {});
           }
        },
        sendSmsCode () {
           let _this = this

           if (!_this.login.mobile) {
               alert('手机号不可为空')
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
                        alert(data.msg)
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
                        alert('短信发送成功')
                    }
                })
                .catch(err => {});

        }
    }
}
</script>

<style>

</style>
