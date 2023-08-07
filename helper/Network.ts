import axios from 'axios'
import { getSession } from './Session'
import type { PrayTime, RegionData } from './Interface'

const searchCity = async (provinceId: string): Promise<RegionData[]> => {
    const phpSessionID = await getSession()
    const response = await axios.post('https://bimasislam.kemenag.go.id/ajax/getKabkoshalat', {
        x: provinceId
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'PHPSESSID=' + phpSessionID
        }
    })

    var result: RegionData[] = []

    const regex = /(<option value="(.*?)">(.*?)<\/option>)/gm;
    let tempLooping;

    while ((tempLooping = regex.exec(response.data)) !== null) {
        if (tempLooping.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        var temp: RegionData = { id: '', name: '' }
        tempLooping.forEach((match, groupIndex) => {
            if (groupIndex == 2) temp.id = match
            else if (groupIndex == 3) temp.name = match.toLowerCase()
        });

        result.push(temp)
    }

    return result
}

const searchPrayTime = async (
    provinceId: string,
    cityId: string,
    month: string,
    year: string
): Promise<PrayTime[]> => {
    const phpSessionID = await getSession()
    const response = await axios.post('https://bimasislam.kemenag.go.id/ajax/getShalatbln', {
        x: provinceId,
        y: cityId,
        bln: month,
        thn: year
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'PHPSESSID=' + phpSessionID
        }
    })

    console.log(response.data)

    var result: PrayTime[] = []

    if (response.data.data == undefined || response.data.data == null) {
        return result
    }

    const keys = Object.keys(response.data.data);
    keys.forEach((key, index) => {
        let time: PrayTime = { key: key, ...response.data.data[key] }
        result.push(time)
    });

    return result
}

export { searchCity, searchPrayTime }  