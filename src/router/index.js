import Vue from 'vue'
import Router from 'vue-router'
import IndexVue from '@/pages/index.vue'

import joinDetailRouter from './join'
import usRouter from './us'
import underTakeRouter from './undertake'
import recruitmentRouter from './recruitment'
import meetRouter from './meet'
import infoRouter from './info'
import undertakeReleaseRouter from './release'

import commonRouter from './common'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'IndexVue',
    meta: {
      parentKey: 'Index'
    },
    component: IndexVue
  },
  {
    path: '/v_index',
    name: 'IndexVueEx',
    meta: {
      parentKey: 'Index'
    },
    component: IndexVue
  }
  ].concat(joinDetailRouter).concat(usRouter).concat(commonRouter)
    .concat(underTakeRouter).concat(infoRouter).concat(undertakeReleaseRouter)
    .concat(recruitmentRouter).concat(meetRouter)
})
