import { createRouter, createWebHistory } from 'vue-router'
import Home from './App.vue'
import BasicFunction from '@/components/pages/BasicFunction.vue'
import Page2 from '@/components/pages/Page2.vue'

const routes = [
    { path: '/', name: 'BasicFunction', component: BasicFunction },
    { path: '/page2', name: 'Page2', component: Page2 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router