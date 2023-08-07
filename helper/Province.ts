import type { RegionData } from "./Interface"

const provinceData: RegionData[] = [
    {
        "id": "c4ca4238a0b923820dcc509a6f75849b",
        "name": "aceh"
    },
    {
        "id": "c81e728d9d4c2f636f067f89cc14862c",
        "name": "sumatera utara"
    },
    {
        "id": "eccbc87e4b5ce2fe28308fd9f2a7baf3",
        "name": "sumatera barat"
    },
    {
        "id": "a87ff679a2f3e71d9181a67b7542122c",
        "name": "riau"
    },
    {
        "id": "e4da3b7fbbce2345d7772b0674a318d5",
        "name": "kepulauan riau"
    },
    {
        "id": "1679091c5a880faf6fb5e6087eb1b2dc",
        "name": "jambi"
    },
    {
        "id": "8f14e45fceea167a5a36dedd4bea2543",
        "name": "bengkulu"
    },
    {
        "id": "c9f0f895fb98ab9159f51fd0297e236d",
        "name": "sumatera selatan"
    },
    {
        "id": "45c48cce2e2d7fbdea1afc51c7c6ad26",
        "name": "kepulauan bangka belitung"
    },
    {
        "id": "d3d9446802a44259755d38e6d163e820",
        "name": "lampung"
    },
    {
        "id": "6512bd43d9caa6e02c990b0a82652dca",
        "name": "banten"
    },
    {
        "id": "c20ad4d76fe97759aa27a0c99bff6710",
        "name": "jawa barat"
    },
    {
        "id": "c51ce410c124a10e0db5e4b97fc2af39",
        "name": "dki jakarta"
    },
    {
        "id": "aab3238922bcc25a6f606eb525ffdc56",
        "name": "jawa tengah"
    },
    {
        "id": "9bf31c7ff062936a96d3c8bd1f8f2ff3",
        "name": "d.i. yogyakarta"
    },
    {
        "id": "c74d97b01eae257e44aa9d5bade97baf",
        "name": "jawa timur"
    },
    {
        "id": "70efdf2ec9b086079795c442636b55fb",
        "name": "bali"
    },
    {
        "id": "6f4922f45568161a8cdf4ad2299f6d23",
        "name": "nusa tenggara barat"
    },
    {
        "id": "1f0e3dad99908345f7439f8ffabdffc4",
        "name": "nusa tenggara timur"
    },
    {
        "id": "98f13708210194c475687be6106a3b84",
        "name": "kalimantan barat"
    },
    {
        "id": "3c59dc048e8850243be8079a5c74d079",
        "name": "kalimantan selatan"
    },
    {
        "id": "b6d767d2f8ed5d21a44b0e5886680cb9",
        "name": "kalimantan tengah"
    },
    {
        "id": "37693cfc748049e45d87b8c7d8b9aacd",
        "name": "kalimantan timur"
    },
    {
        "id": "1ff1de774005f8da13f42943881c655f",
        "name": "kalimantan utara"
    },
    {
        "id": "8e296a067a37563370ded05f5a3bf3ec",
        "name": "gorontalo"
    },
    {
        "id": "4e732ced3463d06de0ca9a15b6153677",
        "name": "sulawesi selatan"
    },
    {
        "id": "02e74f10e0327ad868d138f2b4fdd6f0",
        "name": "sulawesi tenggara"
    },
    {
        "id": "33e75ff09dd601bbe69f351039152189",
        "name": "sulawesi tengah"
    },
    {
        "id": "6ea9ab1baa0efb9e19094440c317e21b",
        "name": "sulawesi utara"
    },
    {
        "id": "34173cb38f07f89ddbebc2ac9128303f",
        "name": "sulawesi barat"
    },
    {
        "id": "c16a5320fa475530d9583c34fd356ef5",
        "name": "maluku"
    },
    {
        "id": "6364d3f0f495b6ab9dcf8d3b5c6e0b01",
        "name": "maluku utara"
    },
    {
        "id": "182be0c5cdcd5072bb1864cdee4d3d6e",
        "name": "papua"
    },
    {
        "id": "e369853df766fa44e1ed0ff613f563bd",
        "name": "papua barat"
    }
]

const getProvince = (): RegionData[] => {
    return provinceData
}

const searchProvince = (name: string): RegionData | undefined => {
    return provinceData.find(function (row) { return row.name == name })
}

export { getProvince, searchProvince }  