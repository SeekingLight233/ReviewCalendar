import '../theme/index.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-ui/lib/styles/base.less';
import { Button, Select,Form, TextField, Paper,Avatar} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import 'muse-ui/dist/muse-ui.css';
import { Calendar,Loading,MessageBox,} from 'element-ui';
import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';
import axios from '../node_modules/axios';


theme.add('custom-theme', {
  primary: colors.redA200,
  secondary: colors.pinkA200
});
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(TextField);
Vue.use(Paper);
Vue.use(Avatar);
Vue.use(Calendar);
Vue.use(Loading.directive);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
