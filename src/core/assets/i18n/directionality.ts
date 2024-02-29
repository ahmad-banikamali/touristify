
//reference: https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code?setlang=ru

const rtlCodes = [
    "ar",
    "arc",
    "arz",
    "ckb",
    "dv",
    "fa",
    "ha",
    "khw",
    "ks",
    "ps",
    "sd",
    "ur",
    "uz_AF",
    "yi",
]


export function directionality(code: string): "ltr" | "rtl" {
    return rtlCodes.includes(code)?"rtl":"ltr"
}
