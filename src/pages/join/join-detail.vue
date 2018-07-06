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
    }
  }
};
</script>
