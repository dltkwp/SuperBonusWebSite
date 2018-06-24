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
                  <div class="col-md-4 hide">
                    <div class="join-item">
                      <a href="javascript:;;">
                        <div class="media">
                          <div class="media-left">
                            <img src="@/assets/img/pic_join_dawei.png"> </div>
                            <div class="media-body">
                              <h4 class="media-heading">大威威客</h4>
                                <div class="media-content">
                                  <p class="price">¥60000</p>
                                  <p class="join-content">
                                    大威威客即除享受荣誉威客的四项基本权利外，还可以优先获得承接优质项目的权利，同时获得对接全国334个地级市3000个项目和10万的企业客户资源池的权利，最大程度的在全国范围内推广大威威客的产品和项目。
                                </p>
                              </div>
                            </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 hide">
                    <div class="join-item">
                      <a href="javascript:;;">
                        <div class="media">
                          <div class="media-left">
                            <img src="@/assets/img/pic_join_chaowei.png"> </div>
                          <div class="media-body">
                            <h4 class="media-heading">超威威客</h4>
                            <div class="media-content">
                              <p class="price">¥200000</p>
                              <p class="join-content">
                                  超威威客即超级悬赏共享平台的最高级别合作伙伴，成为超威威客可以获得更高的收益和回报。
                            </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
</template>

<script>
import mtConst from '@/util/super-const.js'

export default {
    data () {
        return {
            pageNo:1,
            pageSize:3,
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
                                alert('空页面怎么处理')
                            } else {
                                let list = data.list
                                _this.$lodash.forEach(list,function(item) {
                                    item.imgUrl = mtConst.IMAGE_STATIC_URL + item.images
                                })
                                _this.productList = list
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
