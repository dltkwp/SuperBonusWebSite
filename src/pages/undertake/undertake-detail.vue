<template>
    <div>
        <top></top>
        <menus></menus>
        <div class="pages">
            <div class="container"> 首页 &gt; 我要承接 &gt; {{vdetail.productName}} </div>
        </div>
        <div class="container">

        <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="projects-detail">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <a href="javascript:;;">
                        <img class="media-object" :src="vdetail.imageUrl">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">{{vdetail.projectName}}</h4>
                      <div class="media-subtitle">{{vdetail.intoduction}}</div>
                      <div class="flexbox projects-detail-price flexstart">
                        <div class="flexitem ">
                          <div class="flex-vertical">
                            <span class="font-lightgrey font-13">赏金</span>
                            <span class="font-red font-24 mar-t-5">{{vdetail.pricing}}</span>
                          </div>
                        </div>
                        <div class="flexitem">
                          <div class="flex-vertical">
                            <span class="font-lightgrey font-13">悬赏标价</span>
                            <span class="font-dark font-24 mar-t-5">{{vdetail.price}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="flexbox flexstart mar-t-15">

                        <label class="form-label font-lightgrey">数量</label>
                        <span>{{vdetail.projectNumber}}</span>
                      </div>
                      <div class="flexbox flexstart mar-t-15">

                          <label class="form-label font-lightgrey">有效期</label>
                          <span>{{vdetail.st}}~{{vdetail.et}}</span>
                        </div>

                        <div class="flexbox flexstart mar-t-15 projects-detail-btn">
                            <div class="btn btn-lg btn-danger mar-r-20"  @click="acceptSubmit()">立即承接</div>
                            <div class="btn btn-lg btn-default" @click="showRecommendModal">推荐他人</div>
                          </div>
                    </div>
                </li></ul></div>
              <div class="projects-detail-content">
                <div class="intro-title">目标客户 </div>
              <div class="font-grey pad-20 doom" v-html="vdetail.target"></div>
              <div class="intro-title">项目背景</div>
              <div class="font-grey pad-20 doom" v-html="vdetail.context"></div>
              <div class="intro-title">详细介绍</div>
              <div class="font-grey pad-20 doom" v-html="vdetail.description"></div>
              </div>
            </div>
          </div>
        </div>
       <footers></footers>

       <div class="modal fade" id="Recommend" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title">推荐他人</h4>
              </div>
              <div class="modal-body">
                  <div class="alert alert-info">推荐他人承接项目，项目完成后推荐人可获得相应赏金</div>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="col-sm-2 control-label"> 联系人 </label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control form-md" placeholder="请输入联系人姓名" maxlength="10" v-model="recommend.name">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label"> 联系电话 </label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control form-md" placeholder="请输入联系人电话" maxlength="11" v-model="recommend.mobile">
                      </div>
                    </div>
                  </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" @click="recommendSubmit">提交</button>
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
      id: "",
      vdetail: {},
      productList: [],
      pageNo: 1,
      pageSize: 3,
      recommend: {
        name: '',
        mobile: ''
      }
    };
  },
  mounted: function() {
    let _this = this;
    _this.id = _this.$route.query.id;
    _this.detail();
  },
  methods: {
    showRecommendModal () {
      let _this = this
      _this.recommend.name = ''
      _this.recommend.mobile = ''
      $("#Recommend").modal('show')
    },
    detail() {
      let _this = this;
      try {
        _this.$axios
          .get("projects/" + _this.id + "?hasDesc=true")
          .then(result => {
            let data = result.data;
            if (data) {
              if(data.images){
                  let arr = data.images.split(',')
                  if (arr.length==0){
                    data.imageUrl = ''
                  }else {
                    data.imageUrl =  superConst.IMAGE_STATIC_URL + arr[0]
                  }
              }
              data.st = _this.$moment(data.startDate).format('YYYY/MM/DD')
              data.et = _this.$moment(data.endDate).format('YYYY/MM/DD')
              _this.vdetail = data;
            }
          })
          .catch(err => {});
      } catch (error) {
        console.error(error);
      }
    },
    getPoint (callback) {
      let _this = this
      _this.$axios
        .get(superConst.API_BASE_WEBCHAT_URL + 'users/point')
        .then(result => {
          let data = result.data;
          callback && callback(data)
        })
        .catch(err => {});
    },
    acceptSubmit() {
      let _this = this
      if (!utils.isLogin()) {
        $("#LoginModal").modal('show')
      } else {
        _this.getPoint((data) => {
             if (data.code && data.code > 0) { // productId=20
                alert('加入超级悬赏共享平台方可进行发布和承接')
              } else {
                if(data>0){
                  let userInfo = localStorage.getItem(superConst.LOGIN_USER_INFO_KEY)
                  if (userInfo) {
                    userInfo = JSON.parse (userInfo)
                  }
                  if (userInfo) {
                    _this.$axios
                      .get("projects/" + _this.id + "/users/" + userInfo.id)
                      .then(result => {
                        let data = result.data;
                        alert('操作成功')
                      })
                      .catch(err => {});
                  }
                }else{
                  alert('加入超级悬赏共享平台方可进行发布和承接')
                }
              }
        })
      }
    },
    recommendSubmit () {
      let _this = this 
      let name = _this.recommend.name
      let moible = _this.recommend.mobile

      if (!name) {
        alert('名称不可为空') 
        return false
      }
      if (!moible) {
        alert('手机号不可为空') 
        return false
      }

      let loginInfo = localStorage.getItem(superConst.SUPER_TOKEN_PC_KEY)
      if (loginInfo) {
        loginInfo = JSON.parse (loginInfo)
        _this.$axios
          .get("projects/" + _this.id + "/users/" + loginInfo.userId)
          .then(result => {
            let data = result.data;
            alert('操作成功')
          })
          .catch(err => {});
      }
    }
  }
};
</script>

<style>
</style>
