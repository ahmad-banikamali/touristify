import {RouteComponent, RouteRecordRaw} from "vue-router";


const childrenModules: Record<string, RouteRecordRaw> =
    import.meta.glob('../children/*/view/router/index.ts', {
        import: 'default',
        eager: true,
    })

export default function generateRoute(path: string, component: RouteComponent) {
    return {
        path: path,
        component: component,
        children: Object.values(childrenModules).map(function (value) {
            return value
        })
    }
}
