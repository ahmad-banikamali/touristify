import CountryView from "../country-view.vue";
import generateRoute from "../../../common/view/router";

export default generateRoute("/", CountryView,
    import.meta.glob('../children/*/view/router/index.ts', {
        import: 'default',
        eager: true,
    }))


