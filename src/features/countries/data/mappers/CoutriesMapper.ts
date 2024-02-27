import CountryDto from "../entities/CounryDto.ts";
import Country from "../entities/Counry.ts";

export default function toCountry(countryDto: CountryDto): Country {
    return {
        id: countryDto.id,
        name: countryDto.name
    } as Country
}
