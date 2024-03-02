import generateRoute from "../../../../../../common/view/router";
import SecondChild from "../second-child.vue";

export default generateRoute("/second", SecondChild,
    import.meta.glob('../children/*/view/router/index.ts', {
        import: 'default',
        eager: true,
    }))
