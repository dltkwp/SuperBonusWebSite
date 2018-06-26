<template>
    <div>
        <top></top>
        <menus></menus>
        <banner></banner>
        
        <div class="doom bg-white" data-scroll-reveal>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <a href="javascript:;;" class="bg-wyfb btn-tool" data-toggle="modal" data-target="#Code">
                  <h3>我要发布</h3>
                  <p>Release</p>
                </a>
              </div>
              <div class="col-md-6">
                <router-link to="undertake/v_undertake" class="bg-wycj btn-tool">
                  <h3>我要承接</h3>
                  <p>Undertake</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <joiner></joiner>

        <div class="doom bg-white pad-t-30" data-scroll-reveal>
          <div class="doom-body">
            <div class="container">
              <div class="row">

                <div class="col-md-4 pad-t-30">
                  <a href="javascript:">
                    <div class="img-item">
                      <img src="@/assets/img/pic_plate_internation.png">
                      <div class="img-item-hover">
                        <img src="@/assets/img/item-hover.png">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4 pad-t-30">
                  <a href="javascript:">
                    <div class="img-item">
                      <img src="@/assets/img/pic_plate_product.png">
                      <div class="img-item-hover">
                        <img src="@/assets/img/item-hover.png">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4 pad-t-30">
                  <a href="javascript:">
                    <div class="img-item">
                      <img src="@/assets/img/pic_plate_order.png">
                      <div class="img-item-hover">
                        <img src="@/assets/img/item-hover.png">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4 pad-t-30">
                  <a href="javascript:">
                    <div class="img-item">
                      <img src="@/assets/img/pic_plate_reward.png">
                      <div class="img-item-hover">
                        <img src="@/assets/img/item-hover.png">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4 pad-t-30">
                  <a href="javascript:">
                    <div class="img-item">
                      <img src="@/assets/img/pic_plate_life.png">
                      <div class="img-item-hover">
                        <img src="@/assets/img/item-hover.png">
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4 pad-t-30">
                  <a href="javascript:">
                    <div class="img-item">
                      <img src="@/assets/img/pic_plate_company.png">
                      <div class="img-item-hover">
                        <img src="@/assets/img/item-hover.png">
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <projects></projects>
        <meet></meet>
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
import Meet from "@/components/meet.vue"

export default {
  components: {
    Top,
    Menus,
    Banner,
    Footers,
    Joiner,
    Projects,
    Meet
  },
  data () {
    return {}
  },
  mounted () {
    
  },
  methods: {}
}
</script>

<style>
</style>
