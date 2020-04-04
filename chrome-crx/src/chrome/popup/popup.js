import Vue from 'vue'
import Popup from '@/components/vue/Popup'
import Switch from '@/components/vue/Switch'
import Storage from '@/utils/storage'
import '@/styles/index_popup.scss'
import 'muse-ui/lib/styles/base.less';
import { Button, Select, TextField } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import axios from 'axios';


Vue.component('Switcher', Switch)
Vue.prototype.$axios = axios;

let name = localStorage.getItem("username");


//将用户信息发送到content.js
// function sendMessageToContentScript(message, callback) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
//             if (callback) callback(response);
//         });
//     });
// }
// sendMessageToContentScript({ cmd: 'test', value: name }, function(response) {
//     console.log("发出去了!");
// });


Vue.use({
    install: Vue => {
        Vue.prototype.$storage = Storage
    }
})
Vue.use(Button);
Vue.use(Select);
Vue.use(TextField)
new Vue({
    el: '#app',
    components: {
        Popup
    },
    template: '<Popup/>'
})

Vue.config.devtools = false
Vue.config.slient = true
Vue.config.productionTip = false