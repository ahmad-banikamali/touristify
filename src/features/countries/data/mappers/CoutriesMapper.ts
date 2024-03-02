import CountryDto from "../entities/CounryDto.ts";
import {Country} from "../../../../core/data/touristify-model.ts";

export default function toCountryDto(country: Country): CountryDto {
    return <CountryDto>{
        name: country.name
    }
}
