import CountryDto from "../entities/CounryDto.ts";
import toCountry from "../mappers/CoutriesMapper.ts";

export default class CountriesRepository {
    static getCountryById(): CountryDto {
        let countryResponse: CountryDto = {
            id: 1,
            name: "i am country"
        }
        return toCountry(countryResponse)
    }
}
