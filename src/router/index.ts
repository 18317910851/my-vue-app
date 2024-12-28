import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
// import {setupPermissions} from '@/router/permissions'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/homePage'
    },
    {
        path: '/homePage',
        name: 'ces',
        component: () => import("@/views/index/first.vue"),
        meta: {
            title: '开源数据发展趋势-登录页',
            showHeader: true,
        }
    },
    {
        path: '/cssPage',
        name: 'cssPage',
        component: () => import("@/views/css/cssStylePage.vue"),
        meta: {
            title: 'css样式大全',
            showHeader: true,
        }
    },
    {
        path: '/toolsPage',
        name: 'toolsPage',
        component: () => import("@/views/tools/index.vue"),
        meta: {
            title: '工具大全',
            showHeader: true,
        }
    },
    {
        path: '/funcPage',
        name: 'funcPage',
        component: () => import("@/views/functionModule/funcInfo.vue"),
        meta: {
            title: '功能模块',
            showHeader: true,
        }
    },
    {
        path: '/mapCes',
        name: 'mapCes',
        component: () => import("@/views/functionModule/mapInfo/index.vue"),
        meta: {
            title: '地图数据',
            showHeader: true,
        }
    },
    // ces页面
    {
        path: '/cesCode',
        name: 'cesCode',
        component: () => import("@/views/ces/cesCode.vue"),
        meta: {
            title: '测试code页面',
            showHeader: false,
        }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,

});

export default router;
