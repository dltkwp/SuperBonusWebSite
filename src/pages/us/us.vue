<template>
    <div>
        <top></top>
        <menus></menus>

        <div class="bg-white">
            <div class="about-banner">
                <img src="@/assets/img/qyjs.jpg" style="width:100%;">
            </div>
            <div class="doom bg-white" data-scroll-reveal>
            <div class="doom-head">
                <div class="doom-title">
                <span class="icon-aboutus"></span>
                </div>
                <p class="text-center mar-t-15">简介</p>
            </div>
            <div class="doom-body">
                <div class="container">
                <div class="intro-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;北京萧湃国际市场营销策划有限公司隶属于中国世界贸易组织研究会（中华人民共和国商务部副部级事业单位），致力于在"一带一路"的战略背景下，建立全球商务共享服务体系，打造以中国为中心的商务资源对接悬赏平台。北京萧湃国际市场营销策划有限公司旗下的"超级悬赏共享平台"是为平台会员（统称"威客"）提供项目设立、对接的高额佣金平台，受众群体为在全球各个产业领域享有成就的高端企业家以及商务白领人士。目前，经过为期近两年的发展，"超级悬赏共享平台"的业务规模已经覆盖亚洲、欧洲、非洲、美洲等100多个国家，并在此基础之上建立了100国大使馆商圈，在国家"一带一路"大的战略背景下积极推动中国企业走出国门，国际企业走入中国，促进中国与全球企业的沟通及互动。<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;现在，北京萧湃国际市场营销策划有限公司凭借广泛的政府关系、企业资源、各国大使馆、商务部以及国际圆桌会议等各个渠道，已经汇集了大批稀有资源性项目、高商业附加值项目，并与各方关系建立了商务联盟合作机制。与此同时，公司正在凭借强有力的运营团队积极开拓国际及中国市场。<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;公司现有国内员工60余人，专家博士团200余人，并在印度、非洲等近200个国家和地区设有办事处，为客户提供全方位专业化的服务。公司秉承"人才为本，精于事，厚于人"的经营理念，尚诚信，讲协作，以精诚的态度为客户提供优质的服务，为推进中国企业走向国际市场贡献应有之力。公司以成为企业的"国际市场部"为战略口号，具备国际市场部所有功能，"海阔凭鱼跃，天高任鸟飞"，我们愿与企业成为长期战略合作伙伴，共同成长，携手并进。我们着力于为企业节省开拓海外市场的"时间成本、人力成本、物资成本"，以专心专注的服务态度，针对企业项目提供一对一支持，为提高企业国际市场竞争力，扩大海外市场占有率，振兴民族品牌而不惜用尽洪荒之力！！！
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
