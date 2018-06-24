import JoinDetailComponent from '@/pages/join/join-detail.vue'

export default [{
  path: '/join/v_detail',
  name: 'Join-Detail',
  meta: {
    parentKey: 'Join',
    childrenKey: 'Detail'
  },
  component: JoinDetailComponent
}]
