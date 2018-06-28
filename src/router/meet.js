import MeetComponent from '@/pages/meet/meet-detail.vue'
import MeetListComponent from '@/pages/meet/meet-list.vue'

export default [{
  path: '/meet/v_detail',
  name: 'Meet',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: MeetComponent
},
{
  path: '/meet/v_list',
  name: 'Meet',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: MeetListComponent
}]
