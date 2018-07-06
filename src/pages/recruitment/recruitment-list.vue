<template>
    <div>
        <top></top>
        <menus></menus>

        <div class="pages">
            <div class="container"> 首页&gt;诚聘精英 </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="slidelist">
                        <ul>
                            <li @click="areaItemClick(index)" :class="{active:categoryId==item.id}" v-for="(item,index) in categoryList" :key="index">{{item.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8">
                    <div class="row">
                        <div class="col-md-4" v-for="(item,index) in list" :key="index">
                            <div class="projects-item">
                                <router-link :to="{path:'/recruitment/v_detail',query:{id: item.id}}">
                                    <div class="projects-head">
                                        <img :src="item.imgUrl">
                                    </div>
                                    <div class="projects-body">
                                        <div class="projects-title">{{item.title}}</div>
                                        <div class="projects-info"></div>
                                    </div>
                                    <div class="projects-footer"></div>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-12" v-if="parentTotalPage==0">
                            <v-empty :isShow="parentTotalPage==0"></v-empty>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <page :pageSize="pageSize" v-if="parentTotalPage>0" :total="parentTotalPage" show-total :current="pageNo" @on-change="parentCallback"></page>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footers></footers>

    </div>
</template>

<script>

import Top from "@/components/top.vue"
import Menus from "@/components/menus.vue"
import Banner from "@/components/banner.vue"
import Footers from "@/components/footer.vue"
import Joiner from "@/components/join.vue"
import Projects from "@/components/projects.vue"
import mtConst from "@/util/super-const"
import { Page } from 'iview'
import vEmpty from '@/components/empty.vue'

export default {
  components: {
    Top,
    Menus,
    Banner,
    Footers,
    Joiner,
    Page,
    Projects,
    vEmpty
  },
   data () {
    return {
        categoryList: [],
        parentTotalPage:0,
        categoryId: '',
        pageNo: 1,
        pageSize: 15,
        list: []
    }
  },
  mounted () {
    let _this = this
    _this.categoryId = _this.$route.query.cid || ''
    console.log(_this.categoryId,12312234238423423)
    _this.queryCategoryList()
    _this.queryList()
  },
  methods: {
    parentCallback(cPage) {
      let _this = this;
      _this.categoryList = []
      _this.pageNo = cPage;
      _this.queryList();
    },
    areaItemClick (index) {
        let _this = this
        let cur = _this.categoryList[index]
        _this.categoryId = cur.id
        _this.pageNo = 1
        _this.queryList()
    },
    queryCategoryList () {
       let _this = this
        try {
            let params = []
                _this.$axios
                .get("newsCategory?type=recruitment")
                .then(result => {
                     let tempArr = [{id: '', name: '全部'}]
                    _this.categoryList = tempArr.concat(result.data)
                })
                .catch(err => {});
        } catch (error) {
            console.error(error)
        }
    },
    queryList () {
       let _this = this
        try {
                let params = []
                params.push('pageNum=' + _this.pageNo)
                params.push('pageSize=' + _this.pageSize)
                params.push('type=recruitment')

                if (_this.categoryId) {
                    params.push('category=' + _this.categoryId)
                }
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
                                item.imgUrl = mtConst.IMAGE_STATIC_URL + item.imageCode
                            })
                            _this.parentTotalPage = data.total
                            _this.list = list
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
