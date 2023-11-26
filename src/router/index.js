import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const pages = {};
const files = require.context('~/views', true, /.vue/);
files.keys().forEach(key => {
    pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
    console.log(files(key).default);
})

const rule = [];
Object.keys(pages).forEach(item => {
    const Rpath = item.replace(new RegExp('views', 'g'), '')
    rule.push({
        path: `/${Rpath}`,
        name: pages[item].name,
        component: pages[item]
    })
})

//路由表
const routes = [
    {
        path: "/",
        redirect: '/index'
    },
    {
        path: '/404',
        component: () => import('~/components/error-page/404'),
        hidden: true
    },
    ...rule,
    { path: '*', redirect: '/404', hidden: true }
];
console.log("路由：", routes);
const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
    // scrollBehavior: (to, from, savePosition) => {
    //     if (savePosition) {
    //         return savePosition;
    //     } else {
    //         return {
    //             x: 0,
    //             y: 0
    //         }
    //     }
    // }

})
export default router
