import {RouteRecordRaw} from "vue-router";
import HomeView from "../home-view.vue";


const modules: Record<string, RouteRecordRaw> =
    import.meta.glob('../children/*/view/router/index.ts', {
        import: 'default',
        eager: true,
    })

const routeRecord: RouteRecordRaw = {
    path: "/",
    component: HomeView,
    children: Object.values(modules).map(function (value) {
        return value
    })
}
export default routeRecord

