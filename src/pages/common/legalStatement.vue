<template>
    <div>
        <top></top>
        <menus></menus>
        <page :type="'legalStatement'"></page>
        <footers></footers>
    </div>
</template>

<script>
import Top from "@/components/top.vue"
import Menus from "@/components/menus.vue"
import Footers from "@/components/footer.vue"
import Page from "@/components/page.vue"

export default {
    components: {
    Top,
    Menus,
    Footers,
    Page
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
