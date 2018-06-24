import AboutComponent from '@/pages/about/about.vue'

export default [{
  path: '/about/v_about',
  name: 'About',
  meta: {
    parentKey: 'About',
    childrenKey: 'Index'
  },
  component: AboutComponent
}]
