<template>
     <div class="menu">
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-cjxs">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <router-link to="/v_index" class="navbar-brand">
                            <img src="@/assets/img/pic_logo.png">
                        </router-link>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="javascript:;;" data-toggle="modal" data-target="#Code">登录</a>
                            </li>
                            <li class="active">
                                <a href="javascript:;;" data-toggle="modal" data-target="#Code">注册</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
