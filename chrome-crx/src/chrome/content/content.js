import Vue from 'vue'
import Vocabulary from '@/utils/vocabulary'
import Storage from '@/utils/storage'
import { TR_SETTING_BLACK_LIST_KEY } from '@/utils/constant'
import { _removeTag, _inBlackList } from '@/utils'
import '@/styles/index_translator.scss'
import axios from 'axios';
Vue.prototype.$axios = axios;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://39.107.97.170:27017/article', { useNewUrlParser: true });
// var db = mongoose.connection;
// db.collection('news').countDocuments((err, count) => {
//     console.log(count);
// })

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("收到了！！！！");
    console.log(request.value);
    localStorage.setItem("username", request.value);
    this.username = localStorage.getItem("username");
    // alert(request.value);
    sendResponse('我收到了你的消息！');
});



console.log(localStorage.getItem("username"));
// 组件注册
const componentsContext = require.context('@/components', true, /.vue$/)
componentsContext.keys().forEach(path => {
        const component = componentsContext(path).default
        Vue.component(component.name, component)
    })
    // Vue.use(TextField);
Vue.use({
    install: Vue => {
        Vue.filter('removeTag', _removeTag)
        Vue.prototype.$vocabulary = Vocabulary
        Vue.prototype.$storage = Storage
    }
})

const initTranslator = _ => {
    const div = document.createElement('div')
    div.id = '__tr-container__'

    document.body.appendChild(div);
    console.log(localStorage.getItem("username"));

    new Vue({
        el: '#__tr-container__',
        data() {
            return {
                inExtension: false,
                count: 0,
                translateEnable: true
            }
        },

        created() {
            window.$root = this
        },

        template: '<translator/>'
    })

    Vue.config.devtools = false
    Vue.config.slient = true
    Vue.config.productionTip = false
}

document.addEventListener('DOMContentLoaded', async _ => {
    if (await _inBlackList()) return
    initTranslator()
})

export default initTranslator