import RecruitmentComponent from '@/pages/recruitment/recruitment.vue'
import RecruitmentDetailComponent from '@/pages/recruitment/recruitment-detail.vue'
import RecruitmentListComponent from '@/pages/recruitment/recruitment-list.vue'

export default [{
  path: '/recruitment/v_recruitment',
  name: 'Recruitment',
  meta: {
    parentKey: 'Recruitment',
    childrenKey: 'Index'
  },
  component: RecruitmentComponent
},
{
  path: '/recruitment/v_detail',
  name: 'RecruitmentDetail',
  meta: {
    parentKey: 'Recruitment',
    childrenKey: 'Index'
  },
  component: RecruitmentDetailComponent
},
{
  path: '/recruitment/v_list',
  name: 'RecruitmentList',
  meta: {
    parentKey: 'Recruitment',
    childrenKey: 'Index'
  },
  component: RecruitmentListComponent
}]
