import {RouteRecordRaw} from "vue-router";
import CountryView from "../country-view.vue";
import generateRoute from "../../../common/view/router";

const routeRecord: RouteRecordRaw = generateRoute("/",CountryView)
export default routeRecord

