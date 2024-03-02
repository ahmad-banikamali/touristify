import {defineStore} from "pinia";
import CountriesRepository from "../repositories/CountriesRepository.ts";

export const useCountryStore = defineStore('country', () => {
    let countryById = CountriesRepository.getCountryById();
    return {countryById}
})
