<template>
      <div class="doom" data-scroll-reveal>
            <div class="doom-head">
              <div class="doom-title">
                <span class="icon-join"></span>
              </div>
              <p class="text-center mar-t-15">加入我们</p>
            </div>
            <div class="doom-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-4" v-for="(item,index) in productList" :key="index">
                    <div class="join-item">
                       <router-link :to="{path:'/join/v_detail',query:{id: item.id}}">
                          <div class="media">
                            <div class="media-left">
                              <img :src="item.imgUrl"> 
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">{{item.productName}}</h4>
                                <div class="media-content">
                                    <p class="price">¥ {{item.price.toFixed(2)}}</p>
                                    <p class="join-content" :title="item.intoduction">{{item.intoduction}}</p>
                                </div>
                              </div>
                          </div>
                       </router-link>
                    </div>
                  </div>

                  <div class="col-md-12" v-if="parentTotalPage==0">
                      <v-empty :isShow="parentTotalPage==0"></v-empty>
                  </div>

                </div>
              </div>
            </div>
        </div>
</template>

<script>
import mtConst from '@/util/super-const.js'
import vEmpty from '@/components/empty.vue'

export default {
    components: {
        vEmpty
    },
    data () {
        return {
            pageNo:1,
            pageSize:3,
            parentTotalPage:0,
            productList:[]
        }
    },
    mounted () {
        let _this = this
        _this.queryProducts ()
    },
    methods: {
        queryProducts () {
            let _this = this
            try {
                let params = []
                params.push('pageNum=' + _this.pageNo)
                params.push('pageSize=' + _this.pageSize)
                 _this.$axios
                    .get("products?" + params.join('&'))
                    .then(result => {
                        let data = result.data;
                        if (data && data.list) {
                            if(data.list.length===0) {
                                _this.parentTotalPage = 0
                                _this.productList = []
                            } else {
                                let list = data.list
                                _this.$lodash.forEach(list,function(item) {
                                    item.imgUrl = mtConst.IMAGE_STATIC_URL + item.images
                                })
                                _this.productList = list
                                _this.parentTotalPage = data.total
                            }
                        }
                    })
                    .catch(err => {});
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style>

</style>
