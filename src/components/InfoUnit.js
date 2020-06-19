import React from 'react';
import {weather} from "../TextBlocks";
import {convertTemperature} from "../Utils";

const InfoUnit = ({data}) => {
    const temp = data && data.Temperature ? data.Temperature.Imperial : "Unknown";
    return (
        <div className={'infoUnit'}>
            <span className={'weatherTitle'}>{data.WeatherText}</span>
            <span className={'temperature'}>{convertTemperature(temp.Value)} {weather.tempUnit}</span>
        </div>
    );
};

export default InfoUnit;