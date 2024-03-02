import {RouteComponent, RouteRecordRaw} from "vue-router";

export default function generateRoute(path: string, component: RouteComponent,childrenModules: Record<string, RouteRecordRaw>) {
    return {
        path: path,
        component: component,
        children: Object.values(childrenModules).map(function (value) {
            return value
        })
    }
}
