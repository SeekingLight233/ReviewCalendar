import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        showevent: false,
        username: "",
        password: ""
    },
});
export default store;