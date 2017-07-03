import Vue from 'vue'
import Router from 'vue-router'

import StudentList from './components/StudentList'
import GroupList from './components/GroupList'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/students'
    },
    {
        path: '/students',
        name: 'students',
        component: StudentList
    },

    {
        path: '/groups',
        name: 'groups',
        component: GroupList
    }
]

export default new Router({
    mode: 'history',
    routes
})
