<template>
    <div class="doom bg-white" data-scroll-reveal>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <a href="javascript:;;" class="bg-wyfb btn-tool" @click="showNoticeModal">
                        <h3>我要发布</h3>
                        <p>Release</p>
                    </a>
                </div>
                <div class="col-md-6">
                    <router-link to="undertake/v_undertake" class="bg-wycj btn-tool">
                        <h3>我要承接</h3>
                        <p>Undertake</p>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="modal fade" id="releaseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;">
            <div class="modal-dialog modal-dialog-regist" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                        <h4 class="modal-title" id="myModalLabel">发布须知</h4>
                    </div>
                    <div class="modal-body">
                        第一步：<br><br> 荣誉威客
                        <span class="font-red">完成付费</span>，填写<span class="font-red">荣誉威客注册麦克表</span>，完善个人资料。
                        <br><br> 第二步：
                        <br><br> 荣誉威客有意向发布产品时，应先联系超级悬赏平台威客咨询服务人员（
                        <span class="font-red">100国大使馆商务中心秘书长</span>），进行简单的发布产品前的沟通工作并填写<span class="font-red">发布悬赏申请表</span>，确认威客为<span class="font-red">直接发布人或间接发布人</span>，说明悬赏佣金奖励机制，确认无误后，交由立项组进行下一步项目审核程序。
                        <br><br> 第三步：
                        <br><br> 立项组根据项目的具体情况，应向发布产品方收取以下基本资料：
                        <br>
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
                        <br><br> 第四步：
                        <br><br> 超级悬赏平台项目组根据发布方提供的产品信息确认
                        <span class="font-red">项目性质</span>以及超级悬赏平台<span class="font-red">是否已有同类型的产品</span>。
                        <br><br> 第五步：
                        <br><br> 超级悬赏项目组调研待发布的产品的
                        <span class="font-red">市场价格、产品及有潜在需求客户</span>的分析。
                        <br><br> 第六步：
                        <br><br> 同发布悬赏方沟通
                        <span class="font-red">产品底价</span>和<span class="font-red">悬赏佣金数额</span>，最终确定发布悬赏产品流程。
                    </div>
                    <div class="modal-footer">
                        <a href="javascript:;;" class="btn btn-black btn-block btn-lg" @click="aIknow">我已知晓</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import superConst from "@/util/super-const"
    import utils from '@/util/util'

    export default {
        data: function() {
            return {};
        },
        mounted: function() {
            let _this = this;
        },
        methods: {
            aIknow () {
                window.location.href = '/undertake/v_release'
            },
            showNoticeModal () {
                let _this = this
                if (!utils.isLogin()) {
                    $("#LoginModal").modal('show')
                } else {
                    $("#releaseModal").modal('show')
                }
            }
        }
    }
</script>

<style>

</style>
