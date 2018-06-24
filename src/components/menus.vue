<template>
   <div class="nav-cjxs">
    <div class="container">
      <ul>
        <li :class="{active:parentKey=='Index'}">
          <router-link to="/v_index">首页</router-link>
        </li>
        <li :class="{active:parentKey=='Us'}">
          <router-link to="/us/v_us">我们</router-link>
        </li>
        <li>
            <a href="#">理事主页</a>
        </li>
        <li>
          <a href="activity.html">活动</a>
        </li>
        <li  :class="{active:parentKey=='About'}">
            <router-link to="/about/v_about">关于超级悬赏</router-link>
        </li>
        <li :class="{active:parentKey=='Join'}">  
            <router-link to="/join/v_detail">加入我们</router-link>
        </li>
        <li class="hide">
          <a href="#">English</a>
        </li>
        <li>
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
    mounted () {
      let _this = this
      let meta = _this.$route.meta;
      _this.parentKey = meta.parentKey;
      _this.childrenKey = meta.childrenKey||'';
    }
  }
</script>

<style>
</style>
