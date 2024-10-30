import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/systems/Home.vue'
import Examples from '@/views/examples/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/exp',
        name: 'Exp',
        component: Examples
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router