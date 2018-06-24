import UndertakeComponent from '@/pages/undertake/undertake.vue'
import UndertakeDetailComponent from '@/pages/undertake/undertake-detail.vue'

export default [{
  path: '/undertake/v_uundertake',
  name: 'UnderTake',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: UndertakeComponent
},
{
  path: '/undertake/v_uundertakedetail',
  name: 'UnderTake',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: UndertakeDetailComponent
}]
