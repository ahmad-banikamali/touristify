import {defineStore} from "pinia";
import CountriesRepository from "../repositories/CountriesRepository.ts";
import CountryDto from "../entities/CounryDto.ts";
import {ref} from "vue";
import {delay} from "../../../../core/utils/utility-functions.ts";

export const useCountryStore = defineStore('country', () => {

    let countryById = ref<CountryDto | XError>();
    let countries = ref<string[]>();

    async function getCountryById(id: string) {
        await delay(2000);
        countryById.value = CountriesRepository.getCountryById(id)
    }


    async function getCountries(offset: number, limit: number) {
        await delay(2000);
        countries.value = CountriesRepository.getAllCountryNames(offset, limit);
    }

    return {countries, getCountries, countryById, getCountryById,}
})
