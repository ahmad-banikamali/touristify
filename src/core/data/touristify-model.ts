export interface CountryModel {
    id: string;
    name: string;
    flag: string;
    language: string;
    religions: Religion[];
    capital: City | null;
    cities: City[];
    celebrities: Celebrity[];
}

export interface Celebrity {
    id: string;
    name: string;
    birth: string;
    death: string;
    desc: string;
}

export interface City {
    id: string;
    name: string;
    populationCount: string;
    landmarks: Landmark[];
    foods: Food[];
    traditions: Tradition[];
}

export interface Tradition {
    id: string;
    name: string;
    subTraditions: SubTradition[];
}

export interface SubTradition {
    name: string;
    desc: string;
    images: Image[];
}

export interface Food {
    id: string;
    name: string;
    images: Image[];
    desc: string;
    baking: Baking;
}

export interface Baking {
    desc: string;
    materials: string[];
}

export interface Landmark {
    id: string;
    type: string;
    images: Image[];
    location: Location;
}

export interface Location {
    stringy: Stringy;
    pointy: Pointy;
}

export interface Stringy {
    fullAddress: string;
}

export interface Pointy {
    x: string;
    y: string;
}


export interface Religion {
    id: string;
    name: string;
    percent: string;
}

export interface Image {
    id: string,
    src: string,
    thumbnail: string | undefined
}
