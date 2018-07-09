<template>
    <div>
        <top></top>
        <menus></menus>
        <div class="doom example">
            <div class="pages">
                <div class="container">
                    <a href="#">首页</a>&nbsp;&gt;&nbsp;发布项目 
                </div>
            </div>
            <div class="container">
                <div class="col-md-12 ">
                    <div class="panel panel-default">
                        <div class="panel-heading">发布项目</div>
                        <div class="panel-body">
                            <form class="form-horizontal form-bonus">
                                <div class="form-group">
                                    <div class="col-lg-12 ">
                                        <div class="order-title">企业信息</div>
                                    </div>
                                </div>
                                <div class="form-group mar-t-30">
                                    <label for="inputEmail3" class="col-sm-2 control-label">公司名称*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="请输入公司名称" maxlength="20" v-model="company">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">联系人*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="请输入联系人姓名" maxlength="20" v-model="contact">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">手机号*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="请输入联系人手机号" maxlength="11" v-model="phone">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-lg-12 ">
                                        <div class="order-title">项目信息</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">项目名称*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="请输入项目名称" maxlength="20" v-model="projectName">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">地区</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="请输入项目产品所在位置或产地" maxlength="20" v-model="area">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">性质</label>
                                    <div class="col-sm-6">
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptionsABS" value="实体产品"  v-model="properties"> 实体产品
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptionsABS" value="虚拟产品"  v-model="properties"> 虚拟产品
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">产品价格*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="产品对外市场价格" maxlength="20" v-model="originPrice">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">平台价格*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="与平台合作低价"  maxlength="20" v-model="price">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">产品描述*</label>
                                    <div class="col-sm-6">
                                        <textarea class="form-control" placeholder="对产品进行简单表述"  maxlength="500" v-model="intoduction"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">图片</label>
                                    <div class="col-sm-6">
                                        <div class="img-update" v-for="(item,index) in images" :key="index">
                                            <div class="icon-update">
                                                <img :src="item.imageUrl" style="height: 100px; width: 100px;"/>
                                            </div>
                                            <span class="icon-delete" @click="deleteImg(index)">
                                                <i class="glyphicon glyphicon-remove"></i>
                                            </span>
                                        </div>
                                        <div class="img-update" @click="uploadFileClick" v-if="images.length<5">
                                            <div class="icon-update"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-lg-12 ">
                                        <div class="order-title">产品概述</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">产品数量</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" placeholder="请填写产品数量"   maxlength="5" v-model="projectNumber">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">销售周期</label>
                                    <div class="col-sm-6">
                                        <select class="form-control"  v-model="cycle">
                                            <option value="1">1个月</option>
                                            <option value="3">3个月</option>
                                            <option value="6">6个月</option>
                                            <option value="12">1年</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">项目背景</label>
                                    <div class="col-sm-6">
                                        <textarea class="form-control" placeholder="项目的详细描述"   maxlength="500" v-model="context"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">目标客户</label>
                                    <div class="col-sm-6">
                                        <textarea class="form-control" placeholder="对项目目标客户群体描述"   maxlength="500" v-model="target"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">优劣势</label>
                                    <div class="col-sm-6">
                                        <textarea class="form-control" placeholder="产品的优劣势是什么？建议4条以上"   maxlength="500" v-model="superiority"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">产品卖点</label>
                                    <div class="col-sm-6">
                                        <textarea class="form-control" placeholder="产品的卖点是什么？"    maxlength="500" v-model="sellingPoint"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">同行竞品</label>
                                    <div class="col-sm-6">
                                        <textarea class="form-control" placeholder="请输入竞品名称"   maxlength="500" v-model="competitor"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <a href="javascript:;;" @click="submit" class="btn btn-md btn-danger w200">提交</a>
                                    </div>
                                </div>
                            </form>
                        </div>
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
    import utils from '@/util/util'
    import _ from '@/util/lodash'
    
    import { Message } from 'element-ui'
    import { mobileValidate, numberValidae, pwdValidate } from "@/util/validate"


    export default {
        components: {
            Top,  Menus, Banner, Footers
        },
        data: function() {
            return {
                company: '',
                contact: '',
                phone: '',
                projectName: '',
                area: '',
                properties: '实体产品',
                originPrice: '', // 产品价格
                price: '', // 平台价格
                intoduction: '', // 简单描述
                images: [], // 图片数组
                projectNumber: '',
                cycle: 1,
                context: '', // 项目的详细描述
                target: '', // 哪些人群是目标客户群
                superiority: '', //描述下产品的优劣势是什么？
                sellingPoint: '', //卖点
                competitor: '', //竞品
            };
        },
        mounted: function() {
            let _this = this;
        },
        methods: {
            submit () {
                let _this = this
                let company = _this.company
                let contact = _this.contact
                let phone = _this.phone
                let projectName  = _this.projectName
                let area = _this.area
                let properties = _this.properties
                let originPrice = _this.originPrice
                let price = _this.price
                let intoduction = _this.intoduction
                let images = _this.images
                let projectNumber = _this.projectNumber
                let cycle = _this.cycle
                let context = _this.context
                let target = _this.target
                let superiority = _this.superiority
                let sellingPoint = _this.sellingPoint
                let competitor = _this.competitor

                if (!company) {
                    Message({ message: '公司名称不可为空', type: 'warning' })
                    return false;
                }
                if (!contact) {
                    Message({ message: '联系人不可为空', type: 'warning' })
                    return false;
                }
                if (!mobileValidate(phone)) {
                    Message({ message: '手机号格式不正确', type: 'warning' })
                    return false;
                }
                if (!projectName) {
                    Message({ message: '项目名称不可为空', type: 'warning' })
                    return false;
                } 
                if (!originPrice) {
                    Message({ message: '产品价格不可为空', type: 'warning' })
                    return false;
                } 
                if (!price) {
                    Message({ message: '平台价格不可为空', type: 'warning' })
                    return false;
                }
                if (!intoduction) {
                    Message({ message: '描述不可为空', type: 'warning' })
                    return false;
                }

                let param = {
                    company: company,
                    contact: contact,
                    phone: phone,
                    projectName: projectName,
                    originPrice: originPrice,
                    price: price,
                    properties: properties,
                    cycle: cycle
                }
                area && (param.area = area)
                intoduction && (param.intoduction = intoduction)
                projectNumber && (param.projectNumber = projectNumber)
                context && (param.context = context)
                target && (param.target = target)
                superiority && (param.superiority = superiority)
                sellingPoint && (param.sellingPoint = sellingPoint)
                competitor && (param.competitor = competitor)

                if(images.length > 0 ) {
                    let tmpArr = []
                    for(let index in images) {
                        tmpArr.push(images[index].imageCode)
                    }
                   param.images = tmpArr.join(',');
                }

                 _this.$axios({
                        url: superConst.API_BASE_WEBCHAT_URL + 'projects/apply',
                        method: 'POST',
                        data: param
                    })
                    .then(result => {
                        let res = result.data
                        if (res.code && res.code != 200 && res.code != 201) {
                           Message({ message: data.msg, type: 'error' })
                        } else {
                           Message({ message: '操作成功', type: 'success' })
                           setTimeout(function () {
                               window.location.href = '/info/v_info'
                           }, 1000)
                        }
                    })
                    .catch(err => {});
            },
            deleteImg (index) {
                let _this = this
                _this.images.splice(index,1)
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
                    Message({ message: '图片类型必须是.gif,jpeg,jpg,png中的一种', type: 'warning' })
                    return false;
                    }

                    var imgSize = size / 1024 / 1024;
                    if (imgSize > 1) {
                    Message({ message: '图片大小超过1M,请上传小于1M的图片.', type: 'warning' })
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

                            let item = {
                                imageUrl:  superConst.IMAGE_STATIC_URL + imageCode,
                                imageCode: imageCode
                            }

                            _this.images.push(item)
                        }
                    })
                    .catch(err => {});
                }
                }
            }
        }
    }
</script>

<style>

</style>
