<template>
    <div class="doom" data-scroll-reveal>
        <div class="doom-head">
        <div class="doom-title">
            <span class="icon-projects"></span>
        </div>
        <p class="text-center mar-t-15">悬赏项目</p>
        </div>
        <div class="doom-body">
        <div class="container">
            <div class="row" v-for="(item,index) in projectsList" :key="index">
                <div class="col-md-3" v-for="(sub,pindex) in item" :key="pindex">
                    <div class="projects-item">
                        <a href="javascript:;;" >
                            <div class="projects-head">
                                <img :src="sub.imgUrl">
                            </div>
                            <div class="projects-body">
                                <div class="projects-title">{{sub.projectName}}</div>
                                <div class="projects-info">{{sub.intoduction}}</div>
                            </div>
                            <div class="projects-footer">
                            <ul>
                                <li>
                                <p class="projects-footer-title">悬赏标价</p>
                                <p class="projects-footer-price">
                                    {{sub.pricing}}
                                </p>
                                </li>
                                <li>
                                    <p class="projects-footer-title">赏金</p>
                                    <p class="projects-footer-price font-red">
                                        {{sub.price}}
                                    </p>
                                </li>
                            </ul>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <router-link to="/undertake/v_undertake" class="btn btn-black">READ MORE ></router-link>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import mtConst from '@/util/super-const.js'

export default {
    components: {

    },
    mounted() {
        let _this = this
        _this.queryProjects()
    },
    data() {
        return {
            pageNo: 1,
            pageSize: 8,
            projectsList: []
        }
    },
    methods: {
        queryProjects () {
            let _this = this
            try {
                let params = []
                params.push('pageNum=' + _this.pageNo)
                params.push('pageSize=' + _this.pageSize)
                 _this.$axios
                    .get("projects?" + params.join('&'))
                    .then(result => {
                        let data = result.data;
                        if (data && data.list) {
                            if(data.list.length===0) {
                                alert('空页面怎么处理')
                            } else {
                                let list = data.list
                                console.log(list)
                                _this.$lodash.forEach(list,function(item) {
                                    item.imgUrl = mtConst.IMAGE_STATIC_URL + item.images
                                })
                                _this.projectsList = _this.$lodash.chunk(list,4)

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
