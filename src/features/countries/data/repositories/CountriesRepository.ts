import CountryDto from "../entities/CounryDto.ts";
import generateCountryArray from "../../../../core/data/fake-db/country-generator.ts";
import toCountryDto from "../mappers/CoutriesMapper.ts";

export default class CountriesRepository {
    static getCountryById(id: string): CountryDto | XError {
        const countries = generateCountryArray();
        let country = countries.find(function (eachCountry) {
            return eachCountry.id === id
        });

        if (country == null) {
            return <XError>{
                message: "country not found",
            }
        }
        return toCountryDto(country)
    }

    static getAllCountryNames(offset: number, limit: number): string[] {
        const countries = generateCountryArray();
        const countryNames = countries.map(function (value) {
            return value.name
        })

        return countryNames.slice(offset, limit)
    }
}
