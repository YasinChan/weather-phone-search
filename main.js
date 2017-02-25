var apiName = 'http://api.jirengu.com/weather.php';
var http = require('http');



http.get(apiName, (res) => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error(`Request Failed.\n` +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content-type.\n` +
            `Expected application/json but received ${contentType}`);
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        try {
            //console.log(rawData);
            let parsedData = JSON.parse(rawData);
            //console.log(JSON.stringify(parsedData['results'][0]));
            let obj = parsedData['results'][0];
            let newObj0 = parsedData['results'][0].index[0];
            let newObj1 = parsedData['results'][0].index[1];
            let newObj2 = parsedData['results'][0].index[2];
            let newObj3 = parsedData['results'][0].index[3];
            let newObj4 = parsedData['results'][0].index[4];
            let newObj5 = parsedData['results'][0].index[5];



            let obj0 = parsedData['results'][0].weather_data[0];
            let obj1 = parsedData['results'][0].weather_data[1];
            let obj2 = parsedData['results'][0].weather_data[2];
            let obj3 = parsedData['results'][0].weather_data[3];


            console.log('你所在的城市：' + obj.currentCity);
            console.log('日期：' + obj0.date);
            console.log('天气：' + obj0.weather + ',' + obj0.wind + ',' + obj0.temperature);
            console.log('pm2.5:' + obj.pm25);

            console.log('\n');
            console.log('生活指数：');
            console.log(newObj0.tipt + ':' + newObj0.zs + ',' + newObj0.des);
            console.log(newObj1.tipt + ':' + newObj1.zs + ',' + newObj1.des);
            console.log(newObj2.tipt + ':' + newObj2.zs + ',' + newObj2.des);
            console.log(newObj3.tipt + ':' + newObj3.zs + ',' + newObj3.des);
            console.log(newObj4.tipt + ':' + newObj4.zs + ',' + newObj4.des);
            console.log(newObj5.tipt + ':' + newObj5.zs + ',' + newObj5.des);

            console.log('\n');
            console.log('近几日天气预报');
            console.log(obj1.date + ':')
            console.log('天气：' + obj1.weather + ',' + obj1.wind + ',' + obj1.temperature);
            console.log(obj2.date + ':')
            console.log('天气：' + obj2.weather + ',' + obj2.wind + ',' + obj2.temperature);
            console.log(obj3.date + ':')
            console.log('天气：' + obj3.weather + ',' + obj3.wind + ',' + obj3.temperature);





        } catch (e) {
            console.log(e.message);
        }
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});