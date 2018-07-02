<template>
    <div v-html="detail.description"></div>
</template>

<script>

export default {
 components: {
  },
  props:['type'],
   data () {
    return {
        detail:{}
    }
  },
  mounted () {
    let _this = this
    _this.queryDetail ()
  },
  methods: {
      queryDetail () {
        let _this = this
        try {
            _this.$axios
                .get("customPages/type/" + _this.type)
                .then(result => {
                    _this.detail = result.data || {}
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
