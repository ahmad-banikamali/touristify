import {
    Baking,
    Celebrity,
    City,
    CountryModel,
    Food,
    Image,
    Landmark,
    Location,
    Pointy,
    Religion,
    Stringy,
    SubTradition,
    Tradition
} from "./touristify-model.ts";

export default function generateCountryArray(n: number = 50) {
    return Array(n).fill(null).map(function (_,i) {
        return generateCountry(i)

    })
}

function generateCountry(i: number) {
    return <CountryModel>{
        id: generateId(i),
        name: generateName(i),
        capital: generateCity(i),
        flag: generateFlag(i),
        language: generateLanguage(i),
        cities: Array(5).fill(null).map(function (_,i) {
            return generateCity(i)

        }),
        celebrities: Array(5).fill(null).map(function (_,i) {
            return generateCelebrity(i)

        }),
        religions: Array(5).fill(null).map(function (_,i) {
            return generateReligions(i)

        })
    }
}

function generateReligions(i: number) {
    return <Religion>{
        id: generateId(i),
        name: generateName(i),
        percent: generatePercent(i)
    }
}


function generateCelebrity(i: number) {
    return <Celebrity>{
        id: generateId(i),
        name: generateName(i),
        birth: generateBirth(i),
        death: generateDeath(i),
        desc: generateDesc(i),
    }
}


function generateCity(i: number) {
    return <City>{
        id: generateId(i),
        name: generateName(i),
        populationCount: generatePopulationCount(i),
        foods: Array(5).fill(null).map(function (_,i) {
            return generateFood(i)

        }),
        landmarks: Array(5).fill(null).map(function (_,i) {
            return generateLandmark(i)

        }),
        traditions: Array(5).fill(null).map(function (_,i) {
            return generateTradition(i)

        })
    }
}

function generateStringy(i: number) {
    return <Stringy>{
        fullAddress: generateFullAddress(i)
    }
}

function generatePointy(i: number) {
    return <Pointy>{
        x: generateX(i),
        y: generateY(i)
    }
}

function generateImage(i: number) {
    return <Image>{
        id: generateId(i),
        src: generateSrc(i),
        thumbnail: generateThumbnail(i)
    }
}


function generateLocation(i: number) {
    return <Location>{
        stringy: generateStringy(i),
        pointy: generatePointy(i)
    }
}

function generateLandmark(i: number) {
    return <Landmark>{
        id: generateId(i),
        type: generateType(i),
        images: Array(5).fill(null).map(function (_,i) {
            return generateImage(i)

        }),
        location: generateLocation(i),
    }
}

function generateBaking(i: number) {
    return <Baking>{
        desc: generateDesc(i),
        materials: Array(5).fill(null).map(function (_,i) {
            return generateMaterial(i)

        }),
    }
}


function generateFood(i: number) {
    return <Food>{
        id: generateId(i),
        name: generateName(i),
        desc: generateDesc(i),
        images: Array(5).fill(null).map(function (_,i) {
            return generateImage(i)

        }),
        baking: generateBaking(i)
    }
}

function generateSubTradition(i: number) {
    return <SubTradition>{
        name: generateName(i),
        desc: generateDesc(i),
        images: Array(5).fill(null).map(function (_,i) {
            return generateImage(i)

        })
    }
}

function generateTradition(i: number) {
    return <Tradition>{
        id: generateId(i),
        name: generateName(i),
        subTraditions: Array(5).fill(null).map(function (_,i) {
            return generateSubTradition(i)

        })
    }
}

function generateFlag(i: number) {
    return generateString("flag", i)
}

function generateName(i: number) {
    return generateString("name", i)
}

function generateId(i: number) {
    return generateString("id", i)
}

function generateType(i: number) {
    return generateString("type", i)
}

function generateDesc(i: number) {
    return generateString("desc", i)
}

function generateMaterial(i: number) {
    return generateString("material", i)
}

function generateSrc(i: number) {
    return generateString("src", i)
}

function generateThumbnail(i: number) {
    return generateString("thumbnail", i)
}

function generatePercent(i: number) {
    return generateString("percent", i)
}

function generateDeath(i: number) {
    return generateString("death", i)
}

function generateBirth(i: number) {
    return generateString("birth", i)
}

function generateX(i: number) {
    return generateString("x", i)
}

function generateY(i: number) {
    return generateString("x", i)
}

function generateFullAddress(i: number) {
    return generateString("fullAddress", i)
}

function generatePopulationCount(i: number) {
    return generateString("populationCount", i)
}

function generateLanguage(i: number) {
    return generateString("language", i)
}

function generateString(name: string, i: number) {
    return name + i
}
