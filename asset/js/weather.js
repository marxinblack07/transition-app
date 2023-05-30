const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001';
const options = {
	method: 'GET',
	headers: {
		'Authorization':    "CWB-F3F3603D-AD1D-432D-83AC-09E5A1A60C6C",
        'format':           "jSON",
        'locationName':     "%E8%87%BA%E5%8C%97%E5%B8%82",
        'elementName':      "",
        'sort':             "time"
	}
};
const fetchUrl = async(url, options) =>
{
    try
    {
        const response = await fetch(url, options);
        console.log(response);
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch (error)
    {
        console.error(error);
    }
}
fetchUrl(url,options);