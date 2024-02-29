import {defineStore} from "pinia";
import {usePrimeVue} from "primevue/config";
import {ref} from "vue";
import {directionality} from "../../../../core/assets/i18n/directionality.ts";
import en from "../../../../core/assets/i18n/en.ts";
import fa from "../../../../core/assets/i18n/fa.ts";

export const useLocale = defineStore('i18n', () => {
    let primeVue = usePrimeVue()
    let layoutDir = ref("ltr")


    function setHtmlAttrs(code:string,name:string) {
        document.documentElement.setAttribute('dir', directionality(code));
        document.documentElement.setAttribute('lang', name);
    }

    function setCurrentLocale(locale: "en" | "fa") {
        let config = primeVue.config;
        switch (locale) {
            case "en":
                config.locale = en;
                setHtmlAttrs("en","en");
                break;
            case "fa":
                config.locale = fa;
                setHtmlAttrs("fa","fa-IR");
                break;
            default:
                config.locale = en;
                setHtmlAttrs("en","en");
                break;
        }
    }

    return {setCurrentLocale, layoutDir}
})
