<template>
    <div class="slider">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators hide">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      </ol>

      <div class="carousel-inner" role="listbox">
        <div @click="jumpUrl(index)" class="item" :class="{active: index ==0}" v-for="(item,index) in advs" :key="index">
            <a href="javascript:;;">
              <img :src="item.imgUrl" alt="...">
            </a>
            <div class="carousel-caption"> </div>
        </div>
      </div>

      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
            advs: []
        }
    },
    methods: {
        queryProjects () {
            let _this = this
            try {
                 _this.$axios
                    .get("advs?client=pc")
                    .then(result => {
                        let list = result.data;
                        if(list.length===0) {
                            list.push({
                                imgUrl:'https://bonus.oss-cn-beijing.aliyuncs.com/product/DE80CF29F55A4827B87EF0E99036EBC7',
                                type: 'about',
                                href:'/common/v_about'
                            })
                        } else {
                            _this.$lodash.forEach(list,function(item) {
                                item.imgUrl = mtConst.IMAGE_STATIC_URL + item.images
                            })
                        }
                        _this.advs = list
                    })
                    .catch(err => {});
            } catch (error) {
                console.error(error)
            }
        },
        jumpUrl (index) {
          let _this = this
          let cur = _this.advs[index]
          if  (cur) {
              let url = ''
              switch (cur.type) {
                case "product":{
                    url = '?id=' + cur.href 
                }break;
                case "project":{
                    url = '/join/v_detail?id=' + cur.href
                }break;
                case "about":{
                    url = cur.href
                }break;
              }
              window.location.href = url 
          }
          
        }
    }
}
</script>

<style>

</style>
