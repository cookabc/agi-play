import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("@/views/index.vue")
        },
        {
            path: 'train',
            name: 'Train',
            component: () => import("@/views/train/index.vue"),
            meta: {
                title: "项目"
            },
        }
    ]
})

export default router
