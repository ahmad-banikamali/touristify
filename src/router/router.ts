import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";


const modules: Record<string, RouteRecordRaw> =
    import.meta.glob('../*/view/router/index.ts', {
        import: 'default',
        eager: true,
    })

const routes: RouteRecordRaw[] = Object.values(modules).map(function (value) {
    return value
})

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
