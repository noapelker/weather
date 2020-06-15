import React, {useEffect, useState} from 'react';
import "../styles/weatherContainer.css"
import WeatherContainerCol from "./WeatherContainerCol";
import {getData} from "./Main";

const WeatherContainer = ({keyValue}) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        getData("/forecasts/v1/daily/5day/" + keyValue + "?apikey=GK8E2uOE0UfajX6bbLIfGIPjOTeucaC6").then(data => {
            setData(data)
        })
    }, [keyValue]);

    return (

        <div className={'weatherContainer'}>
            {data &&data.DailyForecasts&& data.DailyForecasts.map((item, key) => <WeatherContainerCol index={key} key={key}
                                                                  data={item}/>)}
        </div>
    );
};

export default WeatherContainer;