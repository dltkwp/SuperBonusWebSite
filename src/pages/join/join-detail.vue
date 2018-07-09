<template>
  <div>
        <top></top>
        <menus></menus>

        <div class="pages">
            <div class="container"> 首页 &gt; 加入我们 &gt;  {{vdetail.productName}} </div>
        </div>
        <div class="container">
            <div class="row">
            <div class="col-lg-3 col-md-4">
                <div class="slidelist">
                <ul>
                    <li @click="reloadPage(index)"  :class="{active:id==item.id}" v-for="(item,index) in productList" :key="index">{{item.productName}}</li>
                </ul>
                </div>
            </div>
            <div class="col-lg-9 col-md-8">
                <div class="pages-content">
                <div class="pages-title">
                    {{vdetail.productName}}
                </div>
                <div class="pages-inner" v-html="vdetail.description"></div>
                <div class="pages-footer text-center">
                    <div class="btn btn-danger w200" @click="showQrcode()">立即加盟</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <footers></footers>

        <div class="modal fade" id="QrCodeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-regist" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">请扫描二维码进行支付</h4>
                    </div>
                    <div class="modal-body text-center">
                        <img :src="qrcodeUrl" style="width:70%; margin:30px;">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="paySuccessCallBack">已付款</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    </div>
                </div>
            </div>
        </div>

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
  components: { Top, Menus, Banner, Footers },
  data: function() {
    return {
        id: '',
        vdetail: {
            productName: '',
            description: ''
        },
        productList: [],
        pageNo: 1,
        pageSize: 3,
        qrcodeUrl: ''
    };
  },
  mounted: function() {
    let _this = this;
    _this.id = _this.$route.query.id;
    _this.queryProducts ( () => {
        _this.detail ()
    })
  },
  methods: {
    detail () {
        let _this = this
        try {
            _this.$axios
            .get("products/" + _this.id)
            .then(result => {
                let data = result.data;
                if (data) {
                   _this.vdetail = data
                }
            })
            .catch(err => {});
        } catch (error) {
            console.error(error)
        }
    },
    queryProducts (callback) {
        let _this = this
        try {
            let params = []
            params.push('pageNum=' + _this.pageNo)
            params.push('pageSize=' + _this.pageSize)
                _this.$axios
                .get("products?" + params.join('&'))
                .then(result => {
                    let data = result.data;
                    if(data.list.length===0) {
                        alert('空页面怎么处理')
                    } else {
                        _this.productList = data.list
                        if (!_this.id) {
                            _this.id = data.list[0].id
                        }
                        callback && callback ()
                    }
                })
                .catch(err => {
                    console.error(err)
                });
        } catch (error) {
            console.error(error)
        }
    },
    reloadPage (index) {
        let _this = this
        let cur = _this.productList[index]
        window.location.href = '/join/v_detail?id=' + cur.id
        setTimeout(() => {
            window.location.reload()
        },200)
    },
    showQrcode () {
        let _this = this

        if (!utils.isLogin()) {
            $("#LoginModal").modal('show')
        } else {
            let userInfo = localStorage.getItem(superConst.SUPER_TOKEN_PC_KEY)
            if (userInfo) {
                userInfo = JSON.parse (userInfo)

                let params = {
                    openId: userInfo.openId,
                    productId: _this.id
                }
                _this.$axios
                    .post(superConst.API_BASE_WEBCHAT_URL + "pay/qrcode", params)
                    .then(result => {
                        let data = result.data;
                        if (data.code && data.code!= 200 && data.code != 201) {
                           Message({ message: data.msg, type: 'error' })
                        }else{
                            _this.createQrcode(data.code_url)
                        }
                    })
                    .catch(err => {});
            }
        }
    },
    createQrcode (content) {
        let _this = this
        let params = []
            params.push('width=230')
            params.push('height=230')
            params.push('content=' + content)
        _this.$axios
            .get(superConst.API_BASE_WEBCHAT_URL + "qrcode?" + params.join('&'))
            .then(result => {
                let data = result.data;
                if (data.code && data.code!= 200 && data.code != 201) {
                    Message({ message: data.msg, type: 'error' })
                }else{
                    _this.qrcodeUrl = "data:image/png;base64," + data.qrCodeBase64
                    $("#QrCodeModal").modal("show")
                }
            })
            .catch(err => {});

    },
    paySuccessCallBack () {
        window.location.href = '/info/v_info'
    }

  }
};
</script>
