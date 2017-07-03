import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [
            {
                id: 1,
                name: '杨成功',
                img: '/static/img/ava4.png',
                score: 3
            },
            {  
                id: 2,
                name: '王小贱',
                img: '/static/img/ava5.png',
                score: 7
            },
            {
                id: 3,
                name: '阿葱',
                img: '/static/img/ava3.png',
                score: 6
            },
            {
                id: 4,
                name: '阿城',
                img: '/static/img/ava1.png',
                score: 5
            },
            {
                id: 5,
                name: '云飞姐',
                img: '/static/img/ava2.png',
                score: 8
            }
        ],
        groups: [
            {
                id: 1,
                name: '一组',
                score: 3
            },
            {  
                id: 2,
                name: '二组',
                score: 6
            }
        ],
        status: {
            role: 'students',
            checked: false
        },
        pingData: []
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
        },
        changeStatus(state,objct) {
            for(let key in objct) {
                state.status[key] = objct[key]
            }
        },
        allCheck(state,arr) {
            if (state.pingData.length == 0) {
                state[arr].forEach((item)=> {
                    state.pingData.push(item.id)
                })
            } else {
                state.pingData = []
            }
        },
        init(state) {
            state.status.checked = false
            state.pingData = []
        }
    }
})
