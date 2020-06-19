import React from 'react';
import {weather} from "../TextBlocks";

const InfoUnit = ({data}) => {
    const convertTemperature = val => {
        return Math.round((val - 32) * (5 / 9));
    }
    const temp = data && data.Temperature ? data.Temperature.Imperial : "Unknown";
    return (
        <div className={'infoUnit'}>
            <span className={'weatherTitle'}>{data.WeatherText}</span>
            <span className={'temperature'}>{convertTemperature(temp.Value)} {weather.tempUnit}</span>
        </div>
    );
};

export default InfoUnit;