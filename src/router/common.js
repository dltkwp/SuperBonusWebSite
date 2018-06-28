import AboutComponent from '@/pages/common/about.vue'
import ConnectComponent from '@/pages/common/connect.vue'
import CultureComponent from '@/pages/common/culture.vue'
import CooperateComponent from '@/pages/common/cooperate.vue'
import LegalStatementComponent from '@/pages/common/legalStatement.vue'
import PrivacyPolicyComponent from '@/pages/common/privacyPolicy.vue'

export default [{
  path: '/common/v_about',
  name: 'About',
  meta: {
    parentKey: 'About',
    childrenKey: 'Index'
  },
  component: AboutComponent
},
{
  path: '/common/v_connect',
  name: 'About',
  meta: {
    parentKey: 'ConnectUs',
    childrenKey: 'Index'
  },
  component: ConnectComponent
},
{
  path: '/common/v_culture',
  name: 'Culture',
  meta: {
    parentKey: 'Culture',
    childrenKey: 'Index'
  },
  component: CultureComponent
},
{
  path: '/common/v_cooperate',
  name: 'Cooperate',
  meta: {
    parentKey: 'Cooperate',
    childrenKey: 'Index'
  },
  component: CooperateComponent
},
{
  path: '/common/v_legalStatement',
  name: 'LegalStatement',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: LegalStatementComponent
},
{
  path: '/common/v_privacyPolicy',
  name: 'PrivacyPolicy',
  meta: {
    parentKey: 'Index',
    childrenKey: 'Index'
  },
  component: PrivacyPolicyComponent
}]
