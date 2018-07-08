<template>
  <div>
    <top></top>
    <menus></menus>
    <div class="member">
      <div class="member-top">
        <div class="user-img">
          <img :src="userInfo.headImageUrl">
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
                    <div class="form-goup">
                      <div class="col-md-12">
                        <div class="user-photo" @click="uploadFileClick()">
                          <img :src="userInfo.headImageUrl" style="height:120px;width:120px;">
                        </div>
                      </div>
                    </div>
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
              <div class="col-md-3" v-for="(item,index) in releaseList" :key="index">
                <div class="projects-item">
                  <router-link :to='{path:"/undertake/v_undertakedetail",query:{id:item.projectId}}'>
                    <div class="projects-head">
                      <div class="state-suc" v-if="item.status == 'done'">已完成</div>
                      <div class="state-process" v-if="item.status == 'undertake'">任务中</div>
                      <div class="state-cancel" v-if="item.status == 'cancel'">已取消</div>
                      <div class="state-cancel" v-if="item.status == 'wait'">待审核</div>
                      
                      <img :src="item.imgUrl" v-if="item.imgUrl">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">{{item.projectName}} </div>
                      <div class="projects-info"> {{item.intoduction}} </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">没有。。</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red" v-html="item.price"></p>
                        </li>
                      </ul>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="col-md-12" v-if="parentTotalPage==0">
                  <v-empty :isShow="parentTotalPage==0"></v-empty>
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
              <div class="col-md-3" v-for="(item,index) in releaseList" :key="index">
                <div class="projects-item">
                  <router-link :to='{path:"/undertake/v_undertakedetail",query:{id:item.projectId}}'>
                    <div class="projects-head">
                      <div class="state-suc" v-if="item.status == 'done'">已完成</div>
                      <div class="state-process" v-if="item.status == 'undertake'">任务中</div>
                      <div class="state-cancel" v-if="item.status == 'cancel'">已取消</div>
                      <div class="state-cancel" v-if="item.status == 'wait'">待审核</div>
                      
                      <img :src="item.imgUrl">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">{{item.projectName}} </div>
                      <div class="projects-info"> {{item.intoduction}} </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">没有。。</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red" v-html="item.price"></p>
                        </li>
                      </ul>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="col-md-12" v-if="parentTotalPage==0">
                  <v-empty :isShow="parentTotalPage==0"></v-empty>
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
              <div class="col-md-3" v-for="(item,index) in releaseList" :key="index">
                <div class="projects-item">
                  <router-link :to='{path:"/undertake/v_undertakedetail",query:{id:item.projectId}}'>
                    <div class="projects-head">
                      <div class="state-suc" v-if="item.status == 'done'">已完成</div>
                      <div class="state-process" v-if="item.status == 'undertake'">任务中</div>
                      <div class="state-cancel" v-if="item.status == 'cancel'">已取消</div>
                      <div class="state-cancel" v-if="item.status == 'wait'">待审核</div>
                      
                      <img :src="item.imgUrl">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">{{item.projectName}} </div>
                      <div class="projects-info"> {{item.intoduction}} </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <p class="projects-footer-title">悬赏标价</p>
                          <p class="projects-footer-price">没有。。</p>
                        </li>
                        <li>
                          <p class="projects-footer-title">赏金</p>
                          <p class="projects-footer-price font-red" v-html="item.price"></p>
                        </li>
                      </ul>
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="col-md-12" v-if="parentTotalPage==0">
                  <v-empty :isShow="parentTotalPage==0"></v-empty>
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
              <div class="col-md-3" v-for="(item,index) in orderList" :key="index">
                <div class="projects-item">
                  <router-link :to='{path:"/order/v_detail",query:{id:item.id}}'>
                    <div class="projects-head">
                      <div class="state-suc">已完成</div>
                      <img :src="item.imgUrl">
                    </div>
                    <div class="projects-body">
                      <div class="projects-title">{{item.productName}} </div>
                      <div class="projects-info">下单时间：{{item.createDateStr}} </div>
                    </div>
                    <div class="projects-footer">
                      <ul>
                        <li>
                          <div class="pad-20 font-red text-left font-14"> ¥ {{item.payment}}</div>
                        </li>
                      </ul>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="col-md-12" v-if="parentTotalPage==0">
                <v-empty :isShow="parentTotalPage==0"></v-empty>
            </div>

          </div>
        </div>
        <div class="row" style="text-align:  center;">
            <div class="col-md-12">
                <page :pageSize="pageSize" v-if="parentTotalPage>0" :total="parentTotalPage" show-total :current="pageNum" @on-change="parentCallback"></page>
            </div>
        </div>
      </div>
    </div>
    <footers></footers>

     <form id="uploadImgForm" style="display:none;">
      <input type="file" name="uploadFile" id="uploadFile" multiple="multiple" style="display:none;" @change="imgUploadFileChange($event)">
     </form>

  </div>
</template>

<script>
  import Top from "@/components/top.vue";
  import Menus from "@/components/menus.vue";
  import Banner from "@/components/banner.vue";
  import Footers from "@/components/footer.vue";

  import superConst from "@/util/super-const"
  import { Page } from 'iview'
  import vEmpty from '@/components/empty.vue'


  export default {
    components: { Top, Menus, Banner, Footers, vEmpty, Page },
    data: function() {
      return {
          tabIndex: 0,
          userInfo: {
            	"address":"",
              "alipay":"",
              "enterprise":"",
              "headImage":"",
              "levelId":0,
              "levelName":"",
              "nickname":"",
              "position":"",
              "realname":"",
              "sex":-1,
              "username":""
          },
          editUserInfo: {
              "address":"",
              "alipay":"",
              "enterprise":"",
              "headImage":"",
              "levelId":0,
              "levelName":"",
              "nickname":"",
              "position":"",
              "realname":"",
              "sex":-1,
              "username":""
          },
          pageNum:1,
          pageSize:12,
          parentTotalPage:0,
          releaseList: [],
          orderList: []
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
              if (data.headImage && data.headImage.indexOf('http') == -1) {
                data.headImageUrl = superConst.IMAGE_STATIC_URL +  data.headImage 
              } else {
                data.headImageUrl = data.headImage 
              }
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
          case 1:{ _this.pageNum = 1 ; _this.queryRelease(); } break;
          case 2:{ _this.pageNum = 1 ; _this.queryRelease(); } break;
          case 3:{ _this.pageNum = 1 ; _this.queryRelease(); } break;
          case 4:{ _this.pageNum = 1 ; _this.queryOrders(); } break;
        }
      },
      parentCallback(cPage) {
        let _this = this;
        _this.pageNo = cPage;
        switch(_this.tabIndex){
          case 1:{ _this.queryRelease(); } break;
          case 2:{ _this.queryRelease(); } break;
          case 3:{ _this.queryRelease(); } break;
          case 4:{ _this.queryOrders(); } break;
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
              let res = result.data
              if (res.code) {
                alert(res.msg)
              } else {
                alert('操作成功')
              }
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
        params.push('pageNum=' + _this.pageNum)
        params.push('pageSize=' + _this.pageSize)

        _this.$axios
          .get(url + '?' + params.join('&'))
          .then(result => {
            let data = result.data;
            if (data && data.list) {
                if(data.list.length===0) {
                    _this.parentTotalPage = 0
                    _this.releaseList = []
                } else {
                    let list = data.list
                    _this.$lodash.forEach(list,function(item) {
                        item.createDateStr = _this.$moment(item.createDate).format('YYYY/MM/DD HH:mm')
                        item.imgUrl = superConst.IMAGE_STATIC_URL + item.images
                    })
                    _this.parentTotalPage = data.total
                    _this.releaseList = list
                }
            }
          })
          .catch(err => {});
      },
      queryOrders () {
        let _this = this

        let params = []
        params.push('pageNum=' +   _this.pageNum)
        params.push('pageSize=' + _this.pageSize)

        _this.$axios
          .get(superConst.API_BASE_WEBCHAT_URL + 'orders?' + params.join('&'))
          .then(result => {
            let data = result.data;
            if (data && data.list) {
                if(data.list.length===0) {
                    _this.parentTotalPage = 0
                    _this.orderList = []
                } else {
                    let list = data.list
                    _this.$lodash.forEach(list,function(item) {
                        item.createDateStr = _this.$moment(item.createDate).format('YYYY/MM/DD HH:mm')
                        item.imgUrl = superConst.IMAGE_STATIC_URL + item.images
                    })
                    _this.parentTotalPage = data.total
                    _this.orderList = list
                }
            }

          })
          .catch(err => {});
      },
      uploadFileClick () {
        document.getElementById('uploadFile').value = null
        if (document.getElementById("uploadFile").value ) {
          document.getElementById("uploadImgForm").reset();
        }
        document.getElementById("uploadFile").click();
      },
      imgUploadFileChange (event) {
        let _this = this;
        if (event) {
          var filePath = "";
          var size = 0;
          var updatingCount = 0;

          if (event && event.target && event.target.files) {
            var file = event.target.files[0];
            size = file.size || 0;
            filePath = file.name;
            var index = filePath.lastIndexOf(".");
            var suffix = filePath.substring(index, filePath.length);

            if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(suffix)) {
              alert("图片类型必须是.gif,jpeg,jpg,png中的一种");
              return false;
            }

            var imgSize = size / 1024 / 1024;
            if (imgSize > 1) {
              alert("图片大小超过1M,请上传小于1M的图片.");
              return false;
            }
            var formData = new FormData();
            formData.append("file", file);

            _this.$axios({
                url: superConst.API_BASE_WEBCHAT_URL + 'upload',
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: formData
              })
              .then(result => {
                let res = result.data
                if (res.code == 200) {
                  let imageCode = res.fileCode;

                  _this.editUserInfo.headImage = imageCode
                  _this.editUserInfo.headImageUrl = superConst.IMAGE_STATIC_URL + imageCode

                  _this.userInfo = _this.editUserInfo

                  alert("操作成功");

                }
              })
              .catch(err => {});
          }
        }
      }

    }
  };
</script>

<style>
  .editInfoHeader {
    width: 120px;
    height: 120px;
    margin: 80px auto 20px auto;
    border: 5px solid #fff;
    border-radius: 50%;
  }
</style>
