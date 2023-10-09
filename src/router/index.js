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
            path: '/train',
            name: 'Train',
            component: () => import("@/views/train/index.vue"),
            children: [
                {
                    path: '',
                    name: 'TrainIndex',
                    component: () => import("@/views/train/index/index.vue"),
                    meta: {
                        title: "项目列表"
                    }
                },
                {
                    path: 'image',
                    name: 'TrainImage',
                    component: () => import("@/views/train/image/index.vue"),
                },
            ]
        }
    ]
})

export default router
