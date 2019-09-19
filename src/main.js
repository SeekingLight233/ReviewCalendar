import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-ui/lib/styles/base.less';
import { Button, Select,Form, TextField, Paper,Avatar} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';

// theme.use('dark');
Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(TextField);
Vue.use(Paper);
Vue.use(Avatar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
