const APIkey = 'c57586f78199aaa4318f82049325b058';

const lat = '32.71';
const lon = '-117.16';

const forecastByArea = async () => {
    const result = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`)

    const data = await result.json();
    console.log(data.list);
    return data.list;
};

forecastByArea();