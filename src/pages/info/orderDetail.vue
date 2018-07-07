<template>
    <div>
        <top></top>
        <menus></menus>
        <div class="doom example">
            <div class="pages">
                <div class="container"> <a href="javascript:;;">首页</a>&nbsp;&gt;&nbsp;<a href="javascript:;;">个人中心</a>&nbsp;&gt;&nbsp;<a href="javascript:;;">我的订单</a>&nbsp;&gt;&nbsp;支付成功 </div>
            </div>
            <div class="container">
                <div class="pages-content">
                    <div class="pages-inner ">
                        <div class="flex-transverse">
                            <div class="icon-suc">
                            </div>
                            <div class="flex-vertical">
                                <h3>支付成功</h3>
                                <p class="font-lightgrey">您已成功支付该订单</p>
                            </div>
                        </div>
                        <div class="order-title">
                            订单信息
                        </div>
                        <div class="row">
                            <div class="col-md-12 pad-tb-20">
                                <div class="font-grey flex-transverse font-13">
                                    <div class="flex-vertical w200">
                                        <p>订单编号：{{vdetail.orderNo}}</p>
                                        <p>订单总价：¥ {{vdetail.payment}}</p>
                                    </div>
                                    <div class="flex-vertical w200">
                                        <p>付款时间：{{vdetail.createDate}}</p>
                                        <p>实际付款：¥ {{vdetail.payment}}</p>
                                    </div>
                                    <div class="flex-vertical w200">
                                        <p>支付方式：微信付款</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pages-footer">
                        <router-link to="/v_index" class="btn btn-md btn-danger w200 mar-r-10" >返回首页</router-link>
                        <router-link to="/info/v_info" class="btn btn-md btn-danger w200" >完善个人信息</router-link>
                    </div>
                </div>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<script>
    import Top from "@/components/top.vue";
    import Menus from "@/components/menus.vue";
    import Banner from "@/components/banner.vue";
    import Footers from "@/components/footer.vue";
    import superConst from "@/util/super-const"
    import utils from '@/util/util'
    export default {
        components: {
            Top, Menus, Banner, Footers
        },
        data: function() {
            return {
                id: "",
                vdetail: {},
            };
        },
        mounted: function() {
            let _this = this;
            _this.id = _this.$route.query.id;
            _this.detail();
        },
        methods: {
            detail() {
                let _this = this;
                try {
                    _this.$axios
                        .get(superConst.API_BASE_WEBCHAT_URL + "orders/" + _this.id)
                        .then(result => {
                            let data = result.data;
                            if (data) {
                                data.createDate = _this.$moment(data.createDate).format('YYYY/MM/DD')
                                data.payDate = _this.$moment(data.payDate).format('YYYY/MM/DD')
                                _this.vdetail = data;
                            }
                        })
                        .catch(err => {});
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style>

</style>
