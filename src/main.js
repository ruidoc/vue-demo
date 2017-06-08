// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './theme/index.less';
Vue.use(iView);

import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        totleScore: 0
    },
    mutations: {
        increment(state,score) {
            state.totleScore = score
        }
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
    store,
	render: h => h(App) 
});
