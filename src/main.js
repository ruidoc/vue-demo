// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

//npm install less less-loader style-loader
import '!style-loader!css-loader!less-loader!./assets/index.less';

Vue.use(iView);

import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        lists: [
            {
                id: 1,
                name: '杨成功',
                score: 3
            },
            {  
                id: 2,
                name: '王小贱',
                score: 7
            },
            {
                id: 3,
                name: '阿葱',
                score: 6
            },
            {
                id: 4,
                name: '阿城',
                score: 5
            }
        ]
    },
    mutations: {
        allAddScore(state,score) {
            state.lists.forEach((item)=> {
                item.score = parseInt(item.score)+parseInt(score)
            })
        },
        resetScore(state) {
            state.lists.forEach((item)=> {
                item.score = 0
            })
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
