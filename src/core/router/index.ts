import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";


const modules: Record<string, RouteRecordRaw> =
    import.meta.glob('/src/features/*/view/router/index.ts', {
        import: 'default',
        eager: true,
    })

const routes: RouteRecordRaw[] = Object.values(modules).splice(1)

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
