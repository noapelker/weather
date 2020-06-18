import React, {useEffect, useState} from 'react';
import "../styles/weatherContainer.css"
import WeatherContainerCol from "./WeatherContainerCol";
import {API_KEY, getData} from "./Main";
import {weather} from "../TextBlocks";

const WeatherContainer = ({keyValue}) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        if (keyValue)
        getData("/forecasts/v1/daily/5day/" + keyValue + "?apikey=" + API_KEY).then(data => {
            setData(data)
        })
    }, [keyValue]);

    return (

        <div className={'weatherContainer'}>
            {data && data.DailyForecasts ? data.DailyForecasts.map((item, key) =>
                    <WeatherContainerCol index={key}
                                         key={key}
                                         data={item}/>) :
                <span className={'noData'}>{weather.noData}</span>}
        </div>
    );
};

export default WeatherContainer;