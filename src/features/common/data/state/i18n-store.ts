import {defineStore} from "pinia";
import {usePrimeVue} from "primevue/config";
import fa from "/src/core/assets/i18n/fa.json"
import en from "/src/core/assets/i18n/en.json"
import {ref} from "vue";

export const useLocale = defineStore('i18n', () => {
    let primeVue = usePrimeVue()
    let layoutDir = ref("ltr")

    function setCurrentLocale(locale: "en" | "fa") {
        let config = primeVue.config;
        switch (locale) {
            case "en":
                config.locale = Object.assign(
                    {},
                    en
                );
                layoutDir.value = "ltr"
                break;
            default:
                config.locale = Object.assign(
                    {},
                    fa
                );
                layoutDir.value = "rtl"
        }
    }

    return {setCurrentLocale, layoutDir}
})
