import InfoComponent from '@/pages/info/info.vue'
import OrderDetailComponent from '@/pages/info/orderDetail.vue'

export default [{
  path: '/info/v_info',
  name: 'Info',
  meta: {
    parentKey: 'Info',
    childrenKey: 'Info'
  },
  component: InfoComponent
},
{
  path: '/order/v_detail',
  name: 'OrderDetail',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: OrderDetailComponent
}]
