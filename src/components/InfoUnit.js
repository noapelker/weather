import React from 'react';

const InfoUnit = ({data}) => {
    const temp = data && data.Temperature ? data.Temperature.Imperial : "Unknown";
    return (
        <div className={'infoUnit'}>
            <span className={'weatherTitle'}>{data.WeatherText}</span>
            <span className={'temperature'}>{temp.Value} {temp.Unit}</span>
        </div>
    );
};

export default InfoUnit;