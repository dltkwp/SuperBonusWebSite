<template>
  <div>
        <top></top>
        <menus></menus>

        <div class="pages">
            <div class="container"> 首页 &gt; 我要承接 &gt;  {{vdetail.productName}} </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="pages-content">
                    <div class="pages-title">
                        {{vdetail.productName}}
                    </div>
                    <div class="pages-inner" v-html="vdetail.description"></div>
                    <div class="pages-footer text-center">
                        <div class="btn btn-danger w200">立即加盟</div>
                    </div>
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

export default {
  components: {
    Top,
    Menus,
    Banner,
    Footers
  },
  data: function() {
    return {
        id: '',
        vdetail: {
            productName: '',
            description: ''
        },
        productList: [],
        pageNo: 1,
        pageSize: 3
    };
  },
  mounted: function() {
    let _this = this;
    _this.id = _this.$route.query.id;
    _this.detail ()
  },
  methods: {
    detail () {
        let _this = this
        try {
            _this.$axios
            .get("projects/" + _this.id + '?hasDesc=false')
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
    }
  }
};
</script>

<style>
</style>
