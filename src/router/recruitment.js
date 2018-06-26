import RecruitmentComponent from '@/pages/recruitment/recruitment.vue'
import RecruitmentDetailComponent from '@/pages/recruitment/recruitment-detail.vue'

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
}]
