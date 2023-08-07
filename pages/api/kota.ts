import { searchProvince } from '../../helper/Province'
import { searchCity} from '../../helper/Network'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    var searchName = req.query['provinsi'] as string | undefined
    if (searchName == undefined) {
        return res.status(400).json({ message: "Please fill param `provinsi`" })
    }

    if (searchName.includes("+")) {
        searchName = searchName.replaceAll("+", " ")
    }

    let provinceData = searchProvince(searchName.toLowerCase())

    if (provinceData == undefined) {
        return res.status(400).json({ message: "Unknown `provinsi` data, try another key" })
    }

    let listCity = await searchCity(provinceData.id)

    res.status(200).json({ data: listCity })
}