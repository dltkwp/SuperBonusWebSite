<template>
    <div>
        <top></top>
        <menus></menus>

          <div class="bg-white">
            <div class="about-banner">
            <img src="@/assets/img/gycjxs.jpg" style="width:100%;">
            </div>
            <div class="doom bg-white" data-scroll-reveal>
            <div class="doom-head">
                <div class="doom-title">
                <span class="icon-aboutus"></span>
                </div>
                <p class="text-center mar-t-15">关于超级悬赏</p>
            </div>
            <div class="doom-body">
                <div class="container">
        
                <div class="intro-text">
                    超级悬赏隶属于北京萧湃国际市场营销策划有限公司(中华人民共和国商务部 -中国世界贸易组织 研究会 (副部级单位)),是全球大型商务对接悬赏平台,平台是基于萧湃国际与各国驻华使馆及中国 334 个地级市政府及商界资源建立的全球商务共享服务系统,为个人及组织(统称"威客")提供项目
                    对接为主要业务的高额佣金平台。涉及各个领域的项目设立,精高端人群承接项目等服务。
                    <br>
                    <h3>超级悬赏企业文化
                    <small class="font-danger">CORPORTE CULTURE</small>
                    </h3>
        
                    <b>超级悬赏愿景 :</b> 国际化、共享化、专业化,做全球第一商务资源共享平台;
                    <br>
                    <b>超级悬赏使命 :</b> 让营销更简单,让赚钱更容易,让项目国际化,让资源共享化;
                    <br>
                    <b>超级悬赏价值观 :</b> 以市场需求为导向,以项目质量为核心,以资源共享为目的,实现全球共享经济;
                    <br>
                    <b>超级悬赏管理理念 :</b> 以市场需求为导向,以项目质量为核心,以资源共享为目的,实现全球共享经济;
                    <br>
                    <b>超级悬赏合作理念 :</b> 超级悬赏，有福共享。
                    <br>
                    <h3>超级悬赏全球商务顾问团队 </h3>
                    由100多名国外驻华大使馆商 务参赞组成，代表各国在中国的商务交流活动，涉及领 域包括全球范围的教育，经 济，文化，健康，经济等多 方面，顾问团在"一带一路"的大背景下，遵照各国的友 好双边关系及贸易，投资等合作原则，积极推动全球商 务交流活动。
                    <h3>超级悬赏业务覆盖 </h3>
                    超级悬赏业务覆盖100个国家和中国334个地市;
                    <br>
                    <br>
                    <b>优势市场</b>
                    <br> （1）印度
                    <br> （2）非洲：埃及、利比亚、突尼斯、色及利亚、摩洛哥、埃塞俄比亚、肯尼亚、坦桑尼亚、乌干达、卢旺达、布隆迪、塞舌尔、乍得、中非、喀麦隆、赤道几内亚、加蓬、刚果（金）、刚果（布）、赞比亚、津巴布韦、安哥拉、莫桑比克、博茨瓦纳、纳米比亚、南非、马达加斯加、毛里求斯等
                    <br> （3）"一带一路"覆盖的其他国家：新加坡、马来西亚、印度尼西亚、缅甸、泰国、老挝、柬埔寨、越南、文莱、菲律宾、伊朗、伊拉克、土耳其、约旦、黎巴嫩、以色列、沙特阿拉伯、阿曼、阿联酋、卡塔尔、科威特、巴林、希腊、塞浦路斯、巴基斯坦、孟加拉国、斯里兰卡、马尔代夫、尼泊尔、不丹、哈萨克斯坦、乌兹别克斯坦、土库曼斯坦、塔吉克斯坦、吉尔吉斯斯坦、俄罗斯、乌克兰、白俄罗斯、格鲁吉亚、阿塞拜疆、亚美尼亚、摩尔多瓦、波兰、立陶宛、爱沙尼亚、拉脱维亚、捷克、斯洛伐克、匈牙利、斯洛文尼亚、克罗地亚、波黑、黑山、塞尔维亚、阿尔巴尼亚、罗马尼亚、保加利亚、马其顿等
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
