import UndertakeComponent from '@/pages/undertake/undertake.vue'
import UndertakeDetailComponent from '@/pages/undertake/undertake-detail.vue'

export default [{
  path: '/undertake/v_undertake',
  name: 'UnderTake',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: UndertakeComponent
},
{
  path: '/undertake/v_undertakedetail',
  name: 'UnderTake',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: UndertakeDetailComponent
}
]
