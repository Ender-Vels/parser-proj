import { createRouter, createWebHistory } from 'vue-router'
import TradeHistory from '../components/TradeHistory.vue'
import Settings from '../components/Settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: TradeHistory },
        { path: '/settings', component: Settings }
    ]
})

export default router