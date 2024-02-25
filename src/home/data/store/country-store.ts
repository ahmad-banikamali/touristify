import {defineStore} from "pinia";
import CountriesRepository from "../repositories/CountriesRepository.ts";

export const useCountryStore = defineStore('country', () => {
    let repository = new CountriesRepository()
    let countryById = repository.getCountryById();
    return {countryById}
})
