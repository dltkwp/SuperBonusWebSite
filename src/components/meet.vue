<template>
    <div class="doom bg-white" data-scroll-reveal>
          <div class="doom-head">
            <div class="doom-title">
              <span class="icon-globe"></span>
            </div>
            <p class="text-center mar-t-15">全球商务信息共享圆桌会</p>
          </div>
          <div class="doom-body">
            <div class="container">
              <div class="row">
                <div class="col-md-4"  v-for="(item,index) in list" :key="index">
                  <div class="news-item">
                    <div class="news-item-title">
                      {{item.categoryName}}
                      <router-link class="pull-right"  :to="{path:'/meet/v_list',query:{cid:item.id}}">READ MORE ></router-link>
                    </div>
                    <div class="news-item-body">
                      <ul>
                          <router-link :to="{path:'/meet/v_detail',query:{id:item.id}}">
                            <li class="active">
                              <div class="news-info-left">
                                <img :src="item.imgUrl">
                              </div>
                              <div class="news-info-right">
                                <div class="news-info-title">{{item.title}}</div>
                                <div class="news-info-time">{{item.newstime}}</div>
                              </div>
                            </li>
                          </router-link>
                      </ul>
                    </div>
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
import superConst from '@/util/super-const.js'
import vEmpty from '@/components/empty.vue'

export default {
    components: {
        vEmpty
    },
    mounted() {
        let _this = this
        _this.queryMeets()
    },
    data() {
        return {
            pageNo: 1,
            pageSize: 3,
            parentTotalPage:0,
            list: []
        }
    },
    methods: {
        queryMeets () {
            let _this = this
            try {
                let params = []
                params.push('pageNum=' + _this.pageNo)
                params.push('pageSize=' + _this.pageSize)
                params.push('isNewstime=true')
                params.push('type=desk')
                 _this.$axios
                    .get("news?" + params.join('&'))
                    .then(result => {
                        let data = result.data;
                        if (data && data.list) {
                            if(data.list.length===0) {
                                _this.parentTotalPage = 0
                                _this.list = []
                            } else {
                                let list = data.list
                                _this.$lodash.forEach(list,function(item) {
                                    item.imgUrl = superConst.IMAGE_STATIC_URL + item.imageCode
                                    item.newstime = _this.$moment(item.createDate).format('YYYY/MM/DD')
                                })
                                _this.list = list
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