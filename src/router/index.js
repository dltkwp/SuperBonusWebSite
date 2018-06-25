import Vue from 'vue'
import Router from 'vue-router'
import IndexVue from '@/pages/index.vue'

import joinDetailRouter from './join'
import usRouter from './us'
import aboutRouter from './about'
import underTakeRouter from './undertake'
import cooperateRouter from './cooperate'
import cultureRouter from './culture'
import recruitmentRouter from './recruitment'

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
        ].concat(joinDetailRouter).concat(usRouter).concat(aboutRouter)
        .concat(underTakeRouter).concat(cooperateRouter).concat(cultureRouter)
        .concat(recruitmentRouter)
})