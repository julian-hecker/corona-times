const { getCode, getName, getData } = require("country-list");

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.ianmatlak.com:8443/corona/api/table.php');
xhr.onload = function () {
    let xhrResult = xhr.responseText;
    handleResponse(xhrResult);
}
xhr.send();

function handleResponse(response) {
    let countryData = JSON.parse(response);
    console.log(countryData);

    console.log(getData());
    for (let country of countryData.data) {
        console.log(
            country['country'],
            getCode(country['country']), 
            country['infected']);
    }
}


let mapData = {
    // CN: 68502,
    // JP: 408,
    // SG: 72,
    // HK: 56,
    // TH: 34,
    // KR: 29,
    // MY: 22,
    // TW: 18,
    // VN: 16,
    // DE: 16,
    // AU: 16,
    // US: 16,
    // FR: 16,
};


export default mapData;