<template>
    <div>
        <top></top>
        <menus></menus>

        <div class="pages">
            <div class="container"> 首页&gt;我要承接 </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="slidelist">
                    <ul>
                        <li @click="areaItemClick(index)" :class="{active:areaId==item.id}" v-for="(item,index) in areaList" :key="index">{{item.area}}</li>
                    </ul>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8">
                    <div class="row">
                        <div class="col-md-4" v-for="(item,index) in projectsList" :key="index">
                            <div class="projects-item">
                                <router-link :to="{path:'/undertake/v_undertakedetail',query:{id: item.id}}">
                                    <div class="projects-head">
                                        <img :src="item.imgUrl" v-if="item.images&&item.images.length>0">
                                    </div>
                                    <div class="projects-body">
                                    <div class="projects-title">{{item.projectName}}</div>
                                    <div class="projects-info">{{item.intoduction}}</div>
                                    </div>
                                    <div class="projects-footer">
                                    <ul>
                                        <li>
                                            <p class="projects-footer-title">悬赏标价</p>
                                            <p class="projects-footer-price">{{item.pricing}}</p>
                                        </li>
                                        <li>
                                        <p class="projects-footer-title">赏金</p>
                                        <p class="projects-footer-price font-red">{{item.price}}</p>
                                        </li>
                                    </ul>
                                    </div>
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
import superConst from "@/util/super-const"
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
        areaList: [],
        parentTotalPage:0,
        areaId: '',
        pageNo: 1,
        pageSize: 15,
        projectsList: []
    }
  },
  mounted () {
    let _this = this
    _this.queryAreas()
    _this.queryProjects()
  },
  methods: {
    parentCallback(cPage) {
      let _this = this;
      _this.areaList = []
      _this.pageNo = cPage;
      _this.queryProjects();
    },
    areaItemClick (index) {
        let _this = this
        let cur = _this.areaList[index]
        _this.areaId = cur.id
        _this.pageNo = 1
        _this.queryProjects()
    },
    queryAreas () {
       let _this = this
        try {
            let params = []
                _this.$axios
                .get("area")
                .then(result => {
                    let tempArr = [{
                        id: '',
                        area: '全部'
                    }]
                    _this.areaList = tempArr.concat(result.data)
                })
                .catch(err => {});
        } catch (error) {
            console.error(error)
        }
    },
    queryProjects () {
       let _this = this
        try {
                let params = []
                params.push('pageNum=' + _this.pageNo)
                params.push('pageSize=' + _this.pageSize)

                if (_this.areaId) {
                    let areaItem = _this.$lodash.find(_this.areaList,{ id: _this.areaId });
                    if (areaItem) {
                        params.push('areas=' + areaItem.area)
                    }
                }
                _this.$axios
                .get("projectsOnline?" + params.join('&'))
                .then(result => {
                    let data = result.data;
                    if (data && data.list) {
                        if(data.list.length===0) {
                            _this.parentTotalPage = 0
                            _this.projectsList = []
                        } else {
                            let list = data.list
                            _this.$lodash.forEach(list,function(item) {
                                if(item.images){
                                    let imageArr = item.images.split(',')
                                    item.imgUrl = superConst.IMAGE_STATIC_URL + imageArr[0]
                                }
                            })
                            _this.parentTotalPage = data.total
                            _this.projectsList = list
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
