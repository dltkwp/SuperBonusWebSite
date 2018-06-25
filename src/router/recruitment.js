import RecruitmentComponent from '@/pages/recruitment/recruitment.vue'

export default [{
    path: '/recruitment/v_recruitment',
    name: 'Recruitment',
    meta: {
        parentKey: 'Recruitment',
        childrenKey: 'Index'
    },
    component: RecruitmentComponent
}]