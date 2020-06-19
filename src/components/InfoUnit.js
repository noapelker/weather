import React from 'react';
import {convertTemperature} from "../Utils";
import {useSelector} from "react-redux";

const InfoUnit = ({data}) => {
    const showCelcius = useSelector(state => state.themeMode.showCelcius);

    const temp = data && data.Temperature ? data.Temperature.Imperial : "Unknown";
    return (
        <div className={'infoUnit'}>
            <span className={'weatherTitle'}>{data.WeatherText}</span>
            <span className={'temperature'}>{convertTemperature(temp.Value, showCelcius)} {showCelcius ? 'ºc' : 'F'}</span>
        </div>
    );
};

export default InfoUnit;