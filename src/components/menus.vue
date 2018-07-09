<template>
  <div class="nav-cjxs">
  
    <div class="container">
  
      <ul>
        <li :class="{active:parentKey=='Index'}">
          <router-link to="/v_index">首页</router-link>
        </li>
        <li :class="{active:parentKey=='About'}">
          <router-link to="/common/v_about">超级悬赏</router-link>
        </li>
        <li :class="{active:parentKey=='Culture'}">
          <router-link to="/common/v_culture">企业文化</router-link>
        </li>
        <li :class="{active:parentKey=='Cooperate'}">
          <router-link to="/common/v_cooperate">合作联盟</router-link>
        </li>
        <li :class="{active:parentKey=='Recruitment'}">
          <router-link to="/recruitment/v_recruitment">诚聘精英</router-link>
        </li>
        <li :class="{active:parentKey=='ConnectUs'}">
          <router-link to="/common/v_connect">联系我们</router-link>
        </li>
        <li class="hide">
          <div class="form-group has-black has-feedback">
            <label class="control-label sr-only" for="inputSuccess5">Hidden label</label>
            <input type="text" class="form-control" id="inputSuccess5" aria-describedby="inputSuccess5Status">
            <span class="glyphicon  glyphicon-search form-control-feedback" aria-hidden="true"></span>
            <span id="inputSuccess5Status" class="sr-only">(success)</span>
          </div>
        </li>
      </ul>
    </div>
  
  </div>
</template>

<script>
  export default {
  
    data() {
  
      return {
  
        parentKey: "Index",
  
        childrenKey: "Index",
  
      }
  
    },
  
    mounted() {
  
      let _this = this
  
      let meta = _this.$route.meta;
  
      _this.parentKey = meta.parentKey;
  
      _this.childrenKey = meta.childrenKey || '';
  
    }
  
  }
</script>

<style>
  
</style>
