<template>
    <div>
        <top></top>
        <menus></menus>
    
        <div class="about-banner">
            <img src="@/assets/img/joinus.jpg" style="width:100%;">
        </div>
    
        <div class="doom bg-white" data-scroll-reveal>
            <div class="doom-head">
                <div class="doom-title">
                    <span class="icon-recruitment"></span>
                </div>
                <p class="text-center mar-t-15">诚聘精英</p>
            </div>
    
            <div class="doom-body recuritment">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4" v-for="(item,index) in list" :key="index">
                            <div class="news-item">
                                <div class="news-item-title">
                                    {{item.categoryName}}
                                    <a href="#" class="pull-right">READ MORE ></a>
                                </div>
    
                                <div class="news-item-body">
                                    <ul>
                                        <router-link :to="{path:'/recruitment/v_detail',query:{id:item.id}}">
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
    import mtConst from '@/util/super-const.js'

    export default {
        components: {
            Top,Menus,Footers
        },
        mounted() {
            let _this = this
            _this.queryMeets()
        },
        data() {
            return {
                pageNo: 1,
                pageSize: 3,
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
                    params.push('type=recruitment')
                    _this.$axios
                        .get("news?" + params.join('&'))
                        .then(result => {
                            let data = result.data;
                            if (data && data.list) {
                                if(data.list.length===0) {
                                    alert('空页面怎么处理')
                                } else {
                                    let list = data.list
                                    _this.$lodash.forEach(list,function(item) {
                                        item.imgUrl = mtConst.IMAGE_STATIC_URL + item.imageCode
                                        item.newstime = _this.$moment(item.createDate).format('YYYY/MM/DD')
                                    })
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

    <style>

    </style>
