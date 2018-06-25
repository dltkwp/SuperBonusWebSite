<template>
    <div>
        <top></top>
        <menus></menus>

        <div class="container">
            <div class="cooperate-list">
                <ul>
                    <li>
                        <div class="media">
                            <div class="media-left">
                                <img  src="@/assets/img/cooperate-1.jpg"> </div>
                            <div class="media-body">
                                <h4 class="media-heading">百国大使馆联盟</h4>
                                <div class="media-content">
                                    <p class="font-grey font-16">
                                        “超级悬赏共享平台”的业务规模已经覆盖亚洲、欧洲、非洲、美洲等100多个国家，并在此基础之上与100国驻中国大使馆签订了长期战略合作协议，建立起大使馆商圈合作联盟，促进国内外双边贸易及商务信息资源共享。
                                    </p>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="media">
                            <div class="media-left">
                                <img  src="@/assets/img/cooperate-2.jpg"> </div>
                            <div class="media-body">
                                <h4 class="media-heading">国内合作盟商</h4>
                                <div class="media-content">
                                    <p class="font-grey font-16">
                                        “超级悬赏共享平台”的业务与全中国334个地级省市成为合作盟商，将“超级悬赏共享平台”模式同步在国内进行推广实施。
                                    </p>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="media">
                            <div class="media-left">
                                <img  src="@/assets/img/cooperate-3.jpg"> </div>
                            <div class="media-body">
                                <h4 class="media-heading">企业威客</h4>
                                <div class="media-content">
                                    <p class="font-grey font-16">
                                        超级悬赏共享平台”的业务与全国各领域龙头企业签订长期战略合作协议，为平台项目提供合作伙伴，促成项目交易。

                                    </p>
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
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

export default {
    components: {
    Top,
    Menus,
    Banner,
    Footers,
    Joiner,
    Projects
  },
   data () {
    return {}
  },
  mounted () {
    
  },
  methods: {

  }
}
</script>

<style>

</style>
