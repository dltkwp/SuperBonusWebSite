<template>
  <div>
    <top></top>
    <menus></menus>
    <div class="member">
      <div class="member-top">
        <div class="user-img">
          <img :src="userInfo.headImage">
        </div>
        <div class="user-name"> {{userInfo.nickname}}  </div>
        <div class="user-duty"> {{userInfo.levelName}} </div>
      </div>
      <div class="member-tab">
        <ul>
          <li :class="{active: tabIndex == 0}">
            <a href="javascript:;;" @click="tabChange(0)" >个人信息</a>
          </li>
          <li :class="{active: tabIndex == 1}">
            <a href="javascript:;;" @click="tabChange(1)" >我发布的</a>
          </li>
          <li :class="{active: tabIndex == 2}">
            <a href="javascript:;;" @click="tabChange(2)" >我承接的</a>
          </li>
          <li :class="{active: tabIndex == 3}">
            <a href="javascript:;;" @click="tabChange(3)" >我推荐的</a>
          </li>
          <li :class="{active: tabIndex == 4}">
            <a href="javascript:;;" @click="tabChange(4)" > 我的订单</a>
          </li>
        </ul>
      </div>
      <div class="member-tabcontent tab-content">
        <div role="tabpanel" class="tab-pane " :class="{active: tabIndex == 0}">
          <div class="container">
            <div class="col-md-10 col-md-offset-1">
              <div class="panel panel-default">
                <div class="panel-heading">个人信息</div>
                <div class="panel-body">
                  <form class="form-horizontal form-bonus">
                    <!-- <div class="form-goup">
                      <div class="col-md-12">
                        <div class="user-photo">
                        </div>
                      </div>
                    </div> -->
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="请输入姓名" maxlength="10" v-model="editUserInfo.nickname">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">手机号</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="请输入手机号" disabled readonly  maxlength="11" v-model="editUserInfo.username">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">性别</label>
                      <div class="col-sm-6">
                        <label class="radio-inline">
                          <input type="radio" name="inlineRadioOptions"  value="1" v-model="editUserInfo.sex" :checked='editUserInfo.sex===1'> 男
                        </label>
                        <label class="radio-inline">
                          <input type="radio" name="inlineRadioOptions"  value="2" v-model="editUserInfo.sex" :checked='editUserInfo.sex===2'> 女
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">企业</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="请输入企业名称" maxlength="140" v-model="editUserInfo.enterprise">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">职位</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="请输入您的职位" maxlength="20" v-model="editUserInfo.position">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">地址</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="请输入联系地址" maxlength="140" v-model="editUserInfo.address">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail3" class="col-sm-2 control-label">支付宝账号</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" placeholder="请输入收款支付宝账号" maxlength="20" v-model="editUserInfo.alipay">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-offset-2 col-sm-10">
                        <a href="javascript:;;" @click="userInfoSubmit" class="btn btn-md btn-danger w200">保存</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane " :class="{active: tabIndex == 1}">
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading no-border">我发布的任务</div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-suc">已完成</div>
                      <img src="img/product1.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">超级悬赏共享联盟 </div>
                      <div class="projects-info">《超级悬赏共享联盟》是一个以获取资金及人脉资源为主的商务信息平台。 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            <span class="font-12">¥</span>1000</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            <span class="font-12">¥</span>0.00</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-process">任务中</div>
                      <img src="img/product2.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">APEC商旅卡项目 </div>
                      <div class="projects-info">APEC商旅卡项目 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            60000元/张</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            1000美金
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-cancel">已取消</div>
                      <img src="img/product3.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">茶品礼盒及文化旅游项目 </div>
                      <div class="projects-info">茶品礼盒及文化旅游项目 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            16888元／组</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            10000.00
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-cancel">已取消</div>
                      <img src="img/product4.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">泰国芭提雅房产 </div>
                      <div class="projects-info">泰国芭提雅房产 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            105万-300万</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            45000.00
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane " :class="{active: tabIndex == 2}">
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading no-border">我承接的任务</div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-suc">已完成</div>
                      <img src="img/product1.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">超级悬赏共享联盟 </div>
                      <div class="projects-info">《超级悬赏共享联盟》是一个以获取资金及人脉资源为主的商务信息平台。 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            <span class="font-12">¥</span>1000</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            <span class="font-12">¥</span>0.00</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-process">任务中</div>
                      <img src="img/product2.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">APEC商旅卡项目 </div>
                      <div class="projects-info">APEC商旅卡项目 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            60000元/张</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            1000美金
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-cancel">已取消</div>
                      <img src="img/product3.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">茶品礼盒及文化旅游项目 </div>
                      <div class="projects-info">茶品礼盒及文化旅游项目 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            16888元／组</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            10000.00
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-cancel">已取消</div>
                      <img src="img/product4.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">泰国芭提雅房产 </div>
                      <div class="projects-info">泰国芭提雅房产 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            105万-300万</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            45000.00
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane " :class="{active: tabIndex == 3}">
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading no-border">我推荐的任务</div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-suc">已完成</div>
                      <img src="img/product1.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">超级悬赏共享联盟 </div>
                      <div class="projects-info">《超级悬赏共享联盟》是一个以获取资金及人脉资源为主的商务信息平台。 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            <span class="font-12">¥</span>1000</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            <span class="font-12">¥</span>0.00</p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-process">任务中</div>
                      <img src="img/product2.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">APEC商旅卡项目 </div>
                      <div class="projects-info">APEC商旅卡项目 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            60000元/张</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            1000美金
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-cancel">已取消</div>
                      <img src="img/product3.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">茶品礼盒及文化旅游项目 </div>
                      <div class="projects-info">茶品礼盒及文化旅游项目 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            16888元／组</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            10000.00
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="projects.html">
                    <div class="projects-head">
                      <div class="state-cancel">已取消</div>
                      <img src="img/product4.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">泰国芭提雅房产 </div>
                      <div class="projects-info">泰国芭提雅房产 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">
                            105万-300万</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red">
                            45000.00
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane " :class="{active: tabIndex == 4}">
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading no-border">我的订单</div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="#">
                    <div class="projects-head">
                      <div class="state-suc">已完成</div>
                      <img src="img/product1.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">超级悬赏共享联盟 </div>
                      <div class="projects-info">下单时间：2018/05/12 12:20 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <div class="pad-20 font-red text-left font-14">
                            ¥300.00
                          </div>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="projects-item">
                  <a href="pay-suc.html">
                    <div class="projects-head">
                      <img src="img/product1.jpeg">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">超级悬赏共享联盟 </div>
                      <div class="projects-info">下单时间：2018/05/12 12:20 </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <div class="pad-20 font-red text-left font-14">
                            ¥300.00
                          </div>
                        </li>
                        <li class="text-right">
                          <div class="btn btn-danger btn-sm ">待付款</div>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
  import Top from "@/components/top.vue";
  import Menus from "@/components/menus.vue";
  import Banner from "@/components/banner.vue";
  import Footers from "@/components/footer.vue";

  import superConst from "@/util/super-const"

  export default {
    components: { Top, Menus, Banner, Footers },
    data: function() {
      return {
          tabIndex: 0,
          userInfo: {
            	"address":"1234",
              "alipay":"12345",
              "enterprise":"12",
              "headImage":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYRwKH9gU1OR4pG6rgm7bDETmQdaiay004ZNDK00fGQttRKHFhibGC4EFGInurJWLNNHE4NFMMBBFQ/132",
              "id":3875155543263232,
              "levelId":44,
              "levelName":"普通成员",
              "nickname":"小才",
              "point":0.00,
              "position":"123",
              "realname":"小才",
              "sex":1,
              "username":"13478659803"
          },
          editUserInfo: {
              "address":"1234",
              "alipay":"12345",
              "enterprise":"12",
              "headImage":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYRwKH9gU1OR4pG6rgm7bDETmQdaiay004ZNDK00fGQttRKHFhibGC4EFGInurJWLNNHE4NFMMBBFQ/132",
              "id":3875155543263232,
              "levelId":44,
              "levelName":"普通成员",
              "nickname":"小才",
              "point":0.00,
              "position":"123",
              "realname":"小才",
              "sex":1,
              "username":"13478659803"
          },
          release:{
            pageNo:1,
            pageSize:15
          },
          order:{
            pageNo:1,
            pageSize:15
          }
      }
    },
    mounted: function() {
      let _this = this
      let tmp = {"expired":1532039707501,"phone":"13478659803","openId":"osA2P4uGDh1FmBXAruKI6cGeTYAI","nikeName":"小才","userId":3875155543263232,"token":"325e04e5-87ea-484a-939e-b3a1bd2c476b"}
      localStorage.setItem(superConst.SUPER_TOKEN_PC_KEY,JSON.stringify(tmp))
      _this.getUserInfo ()
    },
    methods: {
      getUserInfo () {
        let _this = this
        let loginInfo = localStorage.getItem(superConst.SUPER_TOKEN_PC_KEY)
        if (loginInfo) {
          loginInfo = JSON.parse (loginInfo)
          _this.$axios
            .get(superConst.API_BASE_WEBCHAT_URL + "users?openId=osA2P4uGDh1FmBXAruKI6cGeTYAI")
            .then(result => {
              let data = result.data
              data.realname = data.realname || data.nickname;
              _this.userInfo = data
              _this.editUserInfo = data
            })
            .catch(err => {});
        }
      },
      tabChange (index) {
        let _this = this
        _this.tabIndex = index

         switch(_this.tabIndex){
          case 1:{ _this.release.pageNo = 1 ; _this.queryRelease(); } break;
          case 2:{ _this.release.pageNo = 1 ; _this.queryRelease(); } break;
          case 3:{ _this.release.pageNo = 1 ; _this.queryRelease(); } break;
          case 4:{ _this.order.pageNo = 1   ; _this.queryOrders(); } break;
        }
      },
      userInfoSubmit () {
        let _this = this 
        let username = _this.editUserInfo.username
        if (!username) {
          alert('用户名不可为空')
          return false
        }

        _this.$axios
          .put(superConst.API_BASE_WEBCHAT_URL + "users",_this.editUserInfo)
          .then(result => {
              alert('操作成功')
          })
          .catch(err => {});

      },
      queryRelease () {
        let _this = this
        let url = superConst.API_BASE_WEBCHAT_URL 
        switch(_this.tabIndex){
          case 1:{ url = url + 'users/project/release';} break;
          case 2:{ url = url + 'users/project/undertake';} break;
          case 3:{ url = url + 'users/recommend';} break;
        }
        
        let params = []
        params.push('pageNo=' + _this.release.pageNo)
        params.push('pageSize=' + _this.release.pageSize)

        _this.$axios
          .get(url + '?' + params.join('&'))
          .then(result => {
            console.log(result)
          })
          .catch(err => {});
        
      },
      queryOrders () {
        let _this = this
      }
    }
  };
</script>
