import FirstChild from "../first-child.vue";
import generateRoute from "../../../../../../common/view/router";

export default generateRoute("first", FirstChild,
    import.meta.glob('../children/*/view/router/index.ts', {
        import: 'default',
        eager: true,
    }))


