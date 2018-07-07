<template>
    <div>
        <top></top>
        <menus></menus>
       
       <div class="doom example">
        <div class="pages">
            <div class="container"> 首页 &nbsp;&gt;&nbsp; 圆桌会 &nbsp;&gt;&nbsp; {{detail.title}}  </div>
        </div>
            <div class="container">
                <div class="pages-content">
                     <div class="pages-title">
                        {{detail.title}} 
                    </div>
                    <div class="pages-inner"  v-html="detail.description"></div>
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
    import superConst from "@/util/super-const"
    
    export default {
        components: { Top, Menus, Banner, Footers},
        data() {
            return {
                id: '',
                detail:{}
            };
        },
        mounted() {
            let _this = this
            _this.id = _this.$route.query.id
            _this.queryDetail ()
        },
        methods: {
            queryDetail () {
                let _this = this
                try {
                    _this.$axios
                        .get("news/" + _this.id)
                        .then(result => {
                            let data = result.data
                            data.imgUrl = superConst.IMAGE_STATIC_URL + data.imageCode
                            _this.detail = data
                        })
                        .catch(err => {});
                } catch (error) {
                    console.error(error)
                }
            }
        }
    };
</script>
