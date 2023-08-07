interface RegionData {
    id: string
    name: string
}

interface PrayTime {
    key: string
    tanggal: string
    imsak: string
    subuh: string
    terbit: string
    dhuha: string
    dzuhur: string
    ashar: string
    maghrib: string
    isya: string
}

export type { RegionData, PrayTime }