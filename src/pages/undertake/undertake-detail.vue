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
                      <div class="btn btn-lg btn-danger mar-r-20"  data-toggle="modal" data-target="#Code">
                        立即承接
                      </div>
                      <div class="btn btn-lg btn-default"  data-toggle="modal" data-target="#Code">
                          推荐他人
                        </div>
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
    
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import Menus from "@/components/menus.vue";
import Banner from "@/components/banner.vue";
import Footers from "@/components/footer.vue";
import mtConst from "@/util/super-const"


export default {
  components: {
    Top,
    Menus,
    Banner,
    Footers
  },

  data: function() {
    return {
      id: "",
      vdetail: {},
      productList: [],
      pageNo: 1,
      pageSize: 3
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
          .get("projects/" + _this.id + "?hasDesc=true")
          .then(result => {
            let data = result.data;
            if (data) {
              if(data.images){
                  let arr = data.images.split(',')
                  if (arr.length==0){
                    data.imageUrl = ''
                  }else {
                    data.imageUrl =  mtConst.IMAGE_STATIC_URL + arr[0]
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
    }
  }
};
</script>

<style>
</style>
