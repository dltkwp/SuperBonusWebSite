<template>
    <div class="slider">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators hide">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      </ol>

      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <router-link to="/about/v_about">
            <img src="@/assets/img/banner_1.jpg" alt="...">
          </router-link>
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
export default {

}
</script>

<style>

</style>
