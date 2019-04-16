import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/', ///builder/form
            name: 'design',
            component: Home
        },
        {
            path: '/preview', ///builder/form/preview
            name: 'preview',
            component: () => import('./views/Preview.vue')
        },
        {
            path: '/about', ///builder/form/about
            name: 'about',
            component: () => import('./views/About.vue')
        }
    ]
})
