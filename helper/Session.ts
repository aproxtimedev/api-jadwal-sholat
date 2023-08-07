import axios from 'axios'
const setCookie = require('set-cookie-parser')

export const getSession = async () => {
    const response = await axios.head(
        'https://bimasislam.kemenag.go.id/jadwalshalat',
    );

    var cookies = setCookie.parse(response, {
        decodeValues: true,
        map: true
    });
    
    return cookies['PHPSESSID'].value;
}