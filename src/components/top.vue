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
                    <div class="form-group">
                        <input type="password" class="form-control form-md" placeholder="请输入密码" maxlength="20" v-model="login.pwd">
                    </div>
                    <div class="form-group hide">
                        <div class="row">
                            <div class="col-md-8">
                                <input type="text" class="form-control form-md" placeholder="请输入验证码(连续3次输入密码错误显示）">
                            </div>
                            <div class="col-md-4">
                                <img src="img/captcha.jpeg" class="captcha">
                            </div>
                        </div>
                    </div>
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

        <div class="modal fade" id="releaseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-regist" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">发布须知</h4>
                    </div>
                    <div class="modal-body">
                        第一步：<br><br>
                        荣誉威客<span class="font-red">完成付费</span>，填写<span class="font-red">荣誉威客注册麦克表</span>，完善个人资料。
                        <br><br>
                        第二步：<br><br>
                        荣誉威客有意向发布产品时，应先联系超级悬赏平台威客咨询服务人员（<span class="font-red">100国大使馆商务中心秘书长</span>），进行简单的发布产品前的沟通工作并填写<span class="font-red">发布悬赏申请表</span>，确认威客为<span class="font-red">直接发布人或间接发布人</span>，说明悬赏佣金奖励机制，确认无误后，交由立项组进行下一步项目审核程序。
                        <br><br>
                        第三步：<br><br>
                        立项组根据项目的具体情况，应向发布产品方收取以下基本资料：<br>
                        <span class="icon-circle"></span><span class="font-red">企业营业执照副本扫描件</span>（根据2014年10月1日生效的《企业经营异常名录管理暂行办法》需确保未在企业经营异常名录中且所售商品属于经营范围内）
                        <br><span class="icon-circle"></span><span class="font-red">实体商品提供质检报告复印件或产品质量合格证明扫描件。</span>（需提供近一年内送检的质量报告，或相对应批次产品的质检报告，需有国家质量监督检验中心检验专用章，第三方质检机构（具有CNAS/CMA/CMAF认证）也可以）
                        <br><span class="icon-circle"></span>超级悬赏平台销售委托书
                        <br><span class="icon-circle"></span>销售许可证
                        <br><span class="icon-circle"></span>基本信息表和悬赏产品概述（超级悬赏平台项目组提供表格，发布悬赏方完成填写）
                        <br>
                        <span class="font-red">（国外产品需另外提供）：</span>
                        <br><span class="icon-circle"></span>海关检验检疫证明扫描件
                        <br><span class="icon-circle"></span>进口报关单扫描件
                        <br><span class="icon-circle"></span>产品购销合同扫描件
                        <br><span class="icon-circle"></span>授权销售证明扫描件
                        <br><br>
                        第四步：<br><br>
                        超级悬赏平台项目组根据发布方提供的产品信息确认<span class="font-red">项目性质</span>以及超级悬赏平台<span class="font-red">是否已有同类型的产品</span>。
                        <br><br>
                        第五步：<br><br>
                        超级悬赏项目组调研待发布的产品的<span class="font-red">市场价格、产品及有潜在需求客户</span>的分析。
                        <br><br>
                        第六步：<br><br>
                        同发布悬赏方沟通<span class="font-red">产品底价</span>和<span class="font-red">悬赏佣金数额</span>，最终确定发布悬赏产品流程。
                    </div>
                    <div class="modal-footer">
                        <a  class="btn btn-black btn-block btn-lg" href="javascript:;;"  data-dismiss="modal">我已知晓</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import utils from '@/util/util'
import superConst from "@/util/super-const"

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
                isShowImageCode: false
            },
            regist:{
                mobile: '',
                pwd: '',
                imgCode: '',
                isChecked: 0,
                isShowImageCode: false
            }
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
           if (!mobile) {
               alert('手机号不可为空')
               return false
           }

           let pwd = _this.login.pwd
           if (!pwd) {
               alert('密码不可为空')
               return false
           }
            _this.$axios
                .get("login",{
                    userName: mobile,
                    pwd: pwd
                })
                .then(result => {
                    let data = result.data;
                    alert('登录成功')
                    localStorage.setItem(mt.SUPER_TOKEN_PC_KEY,data)
                    $("#LoginModal").modal('hide')
                })
                .catch(err => {});
            
        }
    }
}
</script>

<style>

</style>
